(() => {
  const config = window.ELECTROPAY_SUPABASE_CONFIG;
  const loginScreen = document.getElementById('login-screen');
  const loginForm = document.getElementById('login-form');
  const loginButton = document.getElementById('login-button');
  const registerForm = document.getElementById('register-form');
  const registerButton = document.getElementById('register-button');
  const loginMessage = document.getElementById('login-message');
  const appShell = document.getElementById('app-shell');
  let client = null;
  let currentUser = null;
  let currentProfile = null;
  let initialized = false;
  let passwordRecovery = window.location.hash.includes('type=recovery') ||
    new URLSearchParams(window.location.search).get('type') === 'recovery';

  function setMessage(message, isError = false) {
    loginMessage.textContent = message;
    loginMessage.classList.toggle('text-red-600', isError);
    loginMessage.classList.toggle('text-emerald-700', !isError);
    loginMessage.classList.toggle('hidden', !message);
  }

  function setLoading(loading) {
    loginButton.disabled = loading;
    loginButton.textContent = loading ? 'Signing in…' : 'Sign in';
    loginButton.classList.toggle('opacity-70', loading);
    loginButton.classList.toggle('cursor-not-allowed', loading);
  }

  function setRegisterLoading(loading) {
    registerButton.disabled = loading;
    registerButton.textContent = loading ? 'Creating account…' : 'Create Account';
    registerButton.classList.toggle('opacity-70', loading);
    registerButton.classList.toggle('cursor-not-allowed', loading);
  }

  function showRegistrationForm() {
    loginForm.classList.add('hidden');
    document.getElementById('forgot-password').classList.add('hidden');
    document.getElementById('password-reset-form').classList.add('hidden');
    registerForm.classList.remove('hidden');
    setMessage('');
  }

  function showLoginForm(message = '') {
    registerForm.classList.add('hidden');
    document.getElementById('password-reset-form').classList.add('hidden');
    loginForm.classList.remove('hidden');
    document.getElementById('forgot-password').classList.remove('hidden');
    setMessage(message, Boolean(message));
  }

  function validateEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  function validateRegistrationInput({ fullName, email, password, confirmPassword }) {
    if (!fullName.trim()) return 'Enter your full name.';
    if (!validateEmail(email)) return 'Enter a valid email address.';
    if (password.length < 8) return 'Password must be at least 8 characters long.';
    if (confirmPassword !== password) return 'Passwords do not match.';
    return '';
  }

  function setFieldError(fieldId, message, errorId = `${fieldId}-error`) {
    const field = document.getElementById(fieldId);
    const errorNode = document.getElementById(errorId);
    if (field) {
      field.classList.toggle('border-red-500', Boolean(message));
      field.classList.toggle('focus:border-red-500', Boolean(message));
      field.classList.toggle('focus:ring-red-500/20', Boolean(message));
    }
    if (errorNode) {
      errorNode.textContent = message || '';
      errorNode.classList.toggle('hidden', !message);
    }
  }

  function syncRegistrationValidation() {
    const fullName = document.getElementById('register-full-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-password-confirm').value;

    setFieldError('register-full-name', fullName ? '' : 'Full name is required.', 'register-full-name-error');
    setFieldError('register-email', email ? (!validateEmail(email) ? 'Enter a valid email address.' : '') : 'Email is required.', 'register-email-error');
    setFieldError('register-password', password && password.length < 8 ? 'At least 8 characters required.' : '', 'register-password-error');
    setFieldError('register-password-confirm', confirmPassword && confirmPassword !== password ? 'Passwords do not match.' : '', 'register-confirm-password-error');
  }

  async function readProfile(userId) {
    const { data, error } = await client.rpc('electropay_current_profile');
    if (error) throw error;
    const profile = Array.isArray(data) ? data[0] : data;
    if (!profile || profile.user_id !== userId || !['ADMIN', 'STAFF'].includes(profile.role)) {
      throw new Error('This account is not enabled for ElectroPay. Contact your administrator.');
    }
    const { data: authData, error: authError } = await client.auth.getUser();
    if (authError) throw authError;
    if (profile.role === 'STAFF' && !authData.user?.email_confirmed_at) {
      throw new Error('Please verify your email address first. Use the link sent to your registered email, then return and sign in.');
    }

    return profile;
  }

  async function refreshActiveProfile() {
    if (!client || !currentUser) return;
    const { data, error } = await client.rpc('electropay_current_profile');
    if (error) {
      console.error('Could not refresh the authenticated ElectroPay profile:', error);
      return;
    }
    const profile = Array.isArray(data) ? data[0] : data;
    if (!profile || profile.user_id !== currentUser.id) {
      const { error: signOutError } = await client.auth.signOut();
      if (signOutError) console.error('Could not end the invalid ElectroPay session:', signOutError);
      return;
    }

    const previousProfile = currentProfile;
    const accessChanged =
      profile.has_business_data_access !== previousProfile?.has_business_data_access;
    const profileChanged =
      profile.role !== previousProfile?.role ||
      profile.full_name !== previousProfile?.full_name ||
      profile.access_status !== previousProfile?.access_status;
    if (accessChanged || profileChanged) {
      currentProfile = profile;
      document.getElementById('profile-name').textContent =
        profile.full_name.trim() || currentUser.email || 'ElectroPay user';
      document.getElementById('profile-role').textContent = profile.role;
      if (!profile.active || (profile.role === 'STAFF' && !profile.has_business_data_access)) {
        showRestrictedAccessScreen(profile.access_status || 'PENDING');
      }
      if (accessChanged) {
        window.location.reload();
        return;
      }
      document.dispatchEvent(new CustomEvent('electropay:role-changed'));
    }
  }

  async function showAuthenticatedApp(user, { logLogin = false } = {}) {
    const profile = await readProfile(user.id);
    if (logLogin) {
      const { error } = await client.rpc('log_electropay_event', { p_action: 'LOGIN' });
      if (error) console.error('Could not record the login event:', error);
    }
    currentUser = user;
    currentProfile = profile;
    document.getElementById('profile-name').textContent =
      profile.full_name.trim() || user.email || 'ElectroPay user';
    document.getElementById('profile-email').textContent = user.email || '';
    document.getElementById('profile-role').textContent = profile.role;
    document.getElementById('profile-status').textContent = profile.active ? 'Active account' : 'Inactive account';

    if (!profile.active || (profile.role === 'STAFF' && !profile.has_business_data_access)) {
      showRestrictedAccessScreen(profile.access_status || 'PENDING');
      void refreshNotifications();
      return false;
    }

    appShell.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    loginForm.classList.add('hidden');
    document.getElementById('forgot-password').classList.add('hidden');
    setMessage('Loading your protected ElectroPay workspace…');
    void refreshNotifications();
    if (logLogin) document.dispatchEvent(new CustomEvent('electropay:authenticated'));
    return true;
  }

  function showLogin(message = '') {
    currentUser = null;
    currentProfile = null;
    appShell.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    registerForm.classList.add('hidden');
    const restrictedAccess = document.getElementById('restricted-access-screen');
    if (restrictedAccess) restrictedAccess.classList.add('hidden');
    if (!passwordRecovery) {
      loginForm.classList.remove('hidden');
      document.getElementById('forgot-password').classList.remove('hidden');
      document.getElementById('password-reset-form').classList.add('hidden');
    }
    setMessage(message, Boolean(message));
  }

  function showWorkspace() {
    const restrictedAccess = document.getElementById('restricted-access-screen');
    if (restrictedAccess) restrictedAccess.classList.add('hidden');
    loginScreen.classList.add('hidden');
    appShell.classList.remove('hidden');
  }

  function showRestrictedAccessScreen(accessStatus = 'PENDING') {
    loginScreen.classList.remove('hidden');
    appShell.classList.add('hidden');
    loginForm.classList.add('hidden');
    registerForm.classList.add('hidden');
    document.getElementById('forgot-password').classList.add('hidden');
    document.getElementById('password-reset-form').classList.add('hidden');
    const accessCard = document.getElementById('restricted-access-screen');
    const statusBadge = document.getElementById('access-request-status');
    const statusText = (accessStatus || 'PENDING').toUpperCase();
    if (accessCard) accessCard.classList.remove('hidden');
    if (statusBadge) statusBadge.textContent = statusText;
    document.getElementById('restricted-access-title').textContent =
      currentProfile?.active === false
        ? 'Account Inactive'
        : statusText === 'SUSPENDED'
          ? 'Access Suspended'
        : statusText === 'REJECTED'
          ? 'Access Request Declined'
          : 'Access Pending';
    document.getElementById('restricted-access-description').textContent =
      currentProfile?.active === false
        ? 'Your ElectroPay account is currently inactive. You can review your profile and notifications, but business data is unavailable. Contact an administrator to reactivate your account.'
        : statusText === 'SUSPENDED'
          ? 'Your ElectroPay workspace access has been suspended. You can still review your profile and notifications; contact an administrator to reactivate business-data access.'
        : 'Your account has been created successfully, but you do not have access to the ElectroPay business workspace yet. Request access from an administrator to continue.';
    const requestButton = document.getElementById('request-access-button');
    const requestMessage = document.getElementById('request-access-message');
    const canRequest = currentProfile?.active !== false &&
      !currentProfile?.has_business_data_access &&
      !['SUSPENDED', 'REVOKED'].includes(statusText);
    if (requestButton) {
      requestButton.classList.toggle('hidden', !canRequest);
      requestButton.disabled = !canRequest || currentProfile?.has_pending_access_request === true;
      requestButton.textContent = currentProfile?.has_pending_access_request ? 'Request Pending' : 'Request Access';
    }
    if (requestMessage) {
      requestMessage.textContent = statusText === 'SUSPENDED' || currentProfile?.active === false
        ? 'Your workspace access has been suspended. Contact an administrator to reactivate it.'
        : currentProfile?.has_pending_access_request
          ? 'Access request already pending. An administrator will review it shortly.'
          : statusText === 'REJECTED'
            ? 'Your previous access request was declined. You may submit a new request.'
            : 'Your verified account is waiting for an administrator to grant business-data access.';
    }
    document.getElementById('restricted-profile-name').textContent =
      currentProfile?.full_name || 'ElectroPay user';
    document.getElementById('restricted-profile-email').textContent = currentUser?.email || '';
    document.getElementById('restricted-profile-role').textContent = currentProfile?.role || 'STAFF';
    setMessage('');
  }

  async function requestBusinessDataAccess() {
    const button = document.getElementById('request-access-button');
    if (!button || currentProfile?.has_pending_access_request) {
      const message = document.getElementById('request-access-message');
      if (message) message.textContent = 'Access request already pending. An administrator will review it shortly.';
      return;
    }
    button.disabled = true;
    button.textContent = 'Requesting…';

    try {
      if (!client) throw new Error('Supabase is not configured. Reload after configuration.');
      const { data, error } = await client.rpc('request_electropay_data_access', {
        p_requested_access: 'Existing business records'
      });
      if (error) throw error;
      currentProfile = { ...currentProfile, access_status: 'PENDING', has_pending_access_request: true };
      document.getElementById('access-request-status').textContent = 'PENDING';
      document.getElementById('request-access-message').textContent = data?.already_pending
        ? 'Access request already pending. An administrator will review it shortly.'
        : 'Your access request has been submitted. An administrator will review it shortly.';
      button.disabled = true;
      button.textContent = 'Request Pending';
      if (typeof showToast === 'function') {
        showToast(data?.already_pending ? 'Your access request is already pending.' : 'Access request submitted.', 'success');
      }
    } catch (error) {
      console.error('Access request failed:', error);
      if (typeof showToast === 'function') showToast('We could not submit your access request. Please try again.', 'error');
      document.getElementById('request-access-message').textContent = 'We could not submit your access request right now.';
    } finally {
      const pending = currentProfile?.has_pending_access_request === true;
      button.disabled = pending || currentProfile?.active === false;
      button.textContent = pending ? 'Request Pending' : 'Request Access';
    }
  }

  async function refreshNotifications() {
    if (!client || !currentUser) return;
    const { data, error } = await client.rpc('electropay_list_my_notifications');
    if (error) {
      console.error('Could not load ElectroPay notifications:', error);
      for (const target of [
        document.getElementById('notification-list'),
        document.getElementById('restricted-notifications-list')
      ].filter(Boolean)) {
        const status = document.createElement('p');
        status.className = 'px-3 py-6 text-center text-xs text-red-600';
        status.textContent = 'Notifications are unavailable right now.';
        target.replaceChildren(status);
      }
      return;
    }
    const notifications = Array.isArray(data) ? data : [];
    const unread = notifications.filter(item => !item.read_at).length;
    const badge = document.getElementById('notification-unread-count');
    const panelCount = document.getElementById('notification-panel-count');
    const restrictedCount = document.getElementById('restricted-notification-count');
    badge.textContent = unread > 99 ? '99+' : String(unread);
    badge.classList.toggle('hidden', unread === 0);
    panelCount.textContent = unread ? `${unread} unread` : 'All caught up';
    restrictedCount.textContent = unread ? `(${unread} unread)` : '';

    const targets = [
      document.getElementById('notification-list'),
      document.getElementById('restricted-notifications-list')
    ].filter(Boolean);
    for (const target of targets) {
      target.replaceChildren();
      if (!notifications.length) {
        const empty = document.createElement('p');
        empty.className = 'px-3 py-6 text-center text-xs text-gray-500 dark:text-gray-400';
        empty.textContent = 'You have no notifications yet.';
        target.appendChild(empty);
        continue;
      }
      for (const notification of notifications) {
        const button = document.createElement('button');
        button.type = 'button';
        button.dataset.notificationId = notification.notification_id;
        button.className = `block w-full rounded-lg border px-3 py-2 text-left transition hover:bg-gray-50 dark:hover:bg-gray-700 ${
          notification.read_at
            ? 'border-gray-100 dark:border-gray-700'
            : 'border-emerald-200 bg-emerald-50/70 dark:border-emerald-900 dark:bg-emerald-950/30'
        }`;
        const heading = document.createElement('span');
        heading.className = 'flex items-center justify-between gap-2 text-xs font-semibold text-gray-900 dark:text-white';
        const title = document.createElement('span');
        title.textContent = notification.title;
        const priority = document.createElement('span');
        priority.className = 'text-[9px] uppercase tracking-wide text-gray-500 dark:text-gray-400';
        priority.textContent = notification.priority;
        heading.append(title, priority);
        const preview = document.createElement('span');
        preview.className = 'mt-1 block line-clamp-2 text-[11px] text-gray-600 dark:text-gray-300';
        preview.textContent = notification.message;
        const stamp = document.createElement('span');
        stamp.className = 'mt-1 block text-[10px] text-gray-400';
        stamp.textContent = new Date(notification.created_at).toLocaleString();
        button.append(heading, preview, stamp);
        target.appendChild(button);
      }
    }
  }

  async function openNotification(notificationId) {
    try {
      const { error } = await client.rpc('electropay_mark_notification_read', {
        p_notification_id: notificationId
      });
      if (error) throw error;
      await refreshNotifications();
      const { data, error: listError } = await client.rpc('electropay_list_my_notifications');
      if (listError) throw listError;
      const notification = (data || []).find(item => item.notification_id === notificationId);
      if (notification) {
        await window.ElectroPayModal.show({
          type: 'info',
          title: notification.title,
          message: notification.message,
          details: [`Priority: ${notification.priority}`, new Date(notification.created_at).toLocaleString()]
        });
      }
    } catch (error) {
      console.error('Could not open ElectroPay notification:', error);
      if (typeof showToast === 'function') showToast('This notification could not be opened.', 'error');
    }
  }

  function openAccountDialog() {
    if (!currentUser || !currentProfile) return;
    document.getElementById('account-full-name').value = currentProfile.full_name || '';
    document.getElementById('account-email').value = currentUser.email || '';
    document.getElementById('account-role').textContent = currentProfile.role;
    document.getElementById('account-access').textContent =
      currentProfile.role === 'ADMIN' ? 'Administrator' : currentProfile.access_status;
    document.getElementById('account-organization').textContent = currentProfile.organization_name || 'ElectroPay';
    document.getElementById('profile-form-message').textContent = '';
    document.getElementById('password-form-message').textContent = '';
    const dialog = document.getElementById('account-dialog');
    dialog.classList.remove('hidden');
    dialog.classList.add('flex');
    window.lucide?.createIcons({ nodes: [dialog] });
  }

  async function initialize() {
    if (initialized) return Boolean(currentUser);
    initialized = true;
    if (!window.supabase?.createClient) {
      showLogin('Authentication could not load. Check your internet connection and reload.');
      return false;
    }
    if (!config || !config.url || !config.anonKey) {
      showLogin('Supabase is not configured yet. Add your project URL and publishable anon key in js/supabase-config.js.');
      return false;
    }

    try {
      client = window.supabase.createClient(config.url, config.anonKey, {
        auth: { persistSession: true, autoRefreshToken: true, detectSessionInUrl: true }
      });
      client.auth.onAuthStateChange((event) => {
        if (event === 'SIGNED_OUT' && !appShell.classList.contains('hidden')) {
          window.location.reload();
        }
        if (event === 'PASSWORD_RECOVERY') {
          passwordRecovery = true;
          loginForm.classList.add('hidden');
          registerForm.classList.add('hidden');
          document.getElementById('forgot-password').classList.add('hidden');
          document.getElementById('password-reset-form').classList.remove('hidden');
          setMessage('Choose a new password for your account.');
        }
      });
      const { data, error } = await client.auth.getSession();
      if (error) throw error;
      if (passwordRecovery) {
        loginForm.classList.add('hidden');
        document.getElementById('forgot-password').classList.add('hidden');
        document.getElementById('password-reset-form').classList.remove('hidden');
        setMessage('Choose a new password for your account.');
        return false;
      }
      if (!data.session) {
        showLogin();
        return false;
      }
      try {
        return await showAuthenticatedApp(data.session.user);
      } catch (profileError) {
        await client.auth.signOut();
        showLogin(profileError.message);
        return false;
      }
    } catch (error) {
      showLogin(`Could not connect to Supabase: ${error.message}`);
      return false;
    }
  }

  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    setMessage('');
    setLoading(true);
    const email = document.getElementById('login-email').value.trim();
    const password = document.getElementById('login-password').value;
    try {
      if (!client) throw new Error('Supabase is not configured. Reload after configuration.');
      if (!email || !password) {
        setMessage('Enter your email address and password.', true);
        return;
      }
      const { data, error } = await client.auth.signInWithPassword({ email, password });
      if (error || !data.user) {
        if (error?.code === 'email_not_confirmed' || /email not confirmed/i.test(error?.message || '')) {
          try {
            const { error: resendError } = await client.auth.resend({ type: 'signup', email });
            if (resendError) throw resendError;
            setMessage('Please verify your email address first. A verification link has been sent to your registered email.', true);
          } catch (resendError) {
            console.error('Could not resend the email verification link:', resendError);
            setMessage('Please verify your email address before signing in. If you need a new link, use the sign-up form again or contact an administrator.', true);
          }
          return;
        }
        setMessage('Invalid email or password.', true);
        return;
      }
      try {
        await showAuthenticatedApp(data.user, { logLogin: true });
      } catch (profileError) {
        await client.auth.signOut();
        setMessage(profileError.message, true);
      }
    } catch (error) {
      setMessage(error.message, true);
    } finally {
      setLoading(false);
    }
  });

  registerForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    setMessage('');
    setRegisterLoading(true);

    const fullName = document.getElementById('register-full-name').value.trim();
    const email = document.getElementById('register-email').value.trim();
    const password = document.getElementById('register-password').value;
    const confirmPassword = document.getElementById('register-password-confirm').value;

    const validationMessage = validateRegistrationInput({ fullName, email, password, confirmPassword });
    if (validationMessage) {
      setMessage(validationMessage, true);
      setRegisterLoading(false);
      return;
    }

    try {
      if (!client) throw new Error('Supabase is not configured. Reload after configuration.');
      const { data, error } = await client.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}${window.location.pathname}`,
          data: {
            full_name: fullName
          }
        }
      });

      if (error) {
        setMessage('We could not create your account right now. Please try again.', true);
        return;
      }

      let verificationSent = !data.session;
      if (data.session) {
        const { error: signOutError } = await client.auth.signOut();
        if (signOutError) throw signOutError;
        const { error: resendError } = await client.auth.resend({ type: 'signup', email });
        verificationSent = !resendError;
        if (resendError) console.error('Could not send the registration verification email:', resendError);
      }

      await window.ElectroPayModal.show({
        type: 'success',
        title: 'Account Created',
        message: verificationSent
          ? 'Account created successfully. Please verify your email address using the link sent to your registered email.'
          : 'Account created successfully, but the verification email could not be sent. Contact an administrator to check email confirmation and delivery settings.',
        details: verificationSent
          ? ['After verifying your email, return to ElectroPay and sign in.']
          : ['After the email settings are corrected, request a new verification email before signing in.'],
        confirmText: 'Back to Login',
        onConfirm: () => showLoginForm(verificationSent
          ? 'Account created successfully. Please verify your email using the link sent to your registered email, then return and sign in.'
          : 'Account created, but verification email delivery is unavailable. Contact an administrator before signing in.')
      });
      showLoginForm(verificationSent
        ? 'Account created successfully. Please verify your email using the link sent to your registered email, then return and sign in.'
        : 'Account created, but verification email delivery is unavailable. Contact an administrator before signing in.');
    } catch (error) {
      setMessage('We could not create your account right now. Please try again.', true);
      console.error('Registration failed:', error);
    } finally {
      setRegisterLoading(false);
    }
  });

  ['register-full-name', 'register-email', 'register-password', 'register-password-confirm'].forEach((fieldId) => {
    document.getElementById(fieldId).addEventListener('input', syncRegistrationValidation);
  });

  document.getElementById('show-signup').addEventListener('click', () => {
    showRegistrationForm();
  });

  document.getElementById('request-access-button').addEventListener('click', () => {
    void requestBusinessDataAccess();
  });

  document.getElementById('notifications-toggle').addEventListener('click', () => {
    const panel = document.getElementById('notifications-panel');
    const open = panel.classList.contains('hidden');
    panel.classList.toggle('hidden', !open);
    document.getElementById('notifications-toggle').setAttribute('aria-expanded', String(open));
    if (open) void refreshNotifications();
  });
  document.getElementById('notification-list').addEventListener('click', event => {
    const button = event.target.closest('button[data-notification-id]');
    if (button) void openNotification(button.dataset.notificationId);
  });
  document.getElementById('restricted-notifications-toggle').addEventListener('click', () => {
    const list = document.getElementById('restricted-notifications-list');
    const opening = list.classList.contains('hidden');
    list.classList.toggle('hidden', !opening);
    if (opening) void refreshNotifications();
  });
  document.getElementById('restricted-notifications-list').addEventListener('click', event => {
    const button = event.target.closest('button[data-notification-id]');
    if (button) void openNotification(button.dataset.notificationId);
  });
  document.getElementById('account-menu-button').addEventListener('click', openAccountDialog);
  document.getElementById('restricted-account-button').addEventListener('click', openAccountDialog);
  document.getElementById('account-dialog-close').addEventListener('click', () => {
    const dialog = document.getElementById('account-dialog');
    dialog.classList.add('hidden');
    dialog.classList.remove('flex');
  });
  document.getElementById('account-dialog').addEventListener('click', event => {
    if (event.target.id === 'account-dialog') {
      event.currentTarget.classList.add('hidden');
      event.currentTarget.classList.remove('flex');
    }
  });
  document.getElementById('profile-form').addEventListener('submit', async event => {
    event.preventDefault();
    const fullName = document.getElementById('account-full-name').value.trim();
    const message = document.getElementById('profile-form-message');
    try {
      const { error } = await client.rpc('electropay_update_my_profile', { p_full_name: fullName });
      if (error) throw error;
      currentProfile = { ...currentProfile, full_name: fullName };
      document.getElementById('profile-name').textContent = fullName;
      document.getElementById('restricted-profile-name').textContent = fullName;
      message.textContent = 'Profile updated.';
      message.className = 'text-xs text-emerald-600';
    } catch (error) {
      console.error('Could not update the ElectroPay profile:', error);
      message.textContent = error.message || 'Profile could not be updated.';
      message.className = 'text-xs text-red-600';
    }
  });
  document.getElementById('change-password-form').addEventListener('submit', async event => {
    event.preventDefault();
    const currentPassword = document.getElementById('current-password').value;
    const newPassword = document.getElementById('new-password').value;
    const confirmation = document.getElementById('confirm-new-password').value;
    const message = document.getElementById('password-form-message');
    const button = document.getElementById('change-password-button');
    if (newPassword.length < 12) {
      message.textContent = 'Choose a password with at least 12 characters.';
      message.className = 'text-xs text-red-600';
      return;
    }
    if (newPassword !== confirmation) {
      message.textContent = 'The new passwords do not match.';
      message.className = 'text-xs text-red-600';
      return;
    }
    button.disabled = true;
    try {
      const { error: authError } = await client.auth.signInWithPassword({
        email: currentUser.email,
        password: currentPassword
      });
      if (authError) throw new Error('The current password is incorrect.');
      const { error } = await client.auth.updateUser({ password: newPassword });
      if (error) throw error;
      event.currentTarget.reset();
      message.textContent = 'Password updated successfully.';
      message.className = 'text-xs text-emerald-600';
    } catch (error) {
      console.error('Could not change the authenticated user password:', error);
      message.textContent = error.message || 'Password could not be changed.';
      message.className = 'text-xs text-red-600';
    } finally {
      button.disabled = false;
    }
  });
  document.getElementById('restricted-logout-button').addEventListener('click', () => {
    document.getElementById('logout-button').click();
  });

  document.getElementById('back-to-login').addEventListener('click', () => {
    showLoginForm();
  });

  document.getElementById('toggle-password').addEventListener('click', () => {
    const password = document.getElementById('login-password');
    const show = password.type === 'password';
    password.type = show ? 'text' : 'password';
    document.getElementById('toggle-password').setAttribute('aria-label', show ? 'Hide password' : 'Show password');
  });

  document.getElementById('forgot-password').addEventListener('click', async () => {
    const email = document.getElementById('login-email').value.trim();
    if (!email) {
      setMessage('Enter your email address first, then choose Forgot password.', true);
      document.getElementById('login-email').focus();
      return;
    }
    setLoading(true);
    try {
      if (!client) throw new Error('Supabase is not configured. Reload after configuration.');
      const { error } = await client.auth.resetPasswordForEmail(email, {
        redirectTo: window.location.href
      });
      if (error) {
        setMessage('The reset request could not be completed. Try again later or contact your administrator.', true);
        return;
      }
      setMessage('If an account matches that address, a password-reset link will be sent.');
    } catch (error) {
      console.error('Password reset request failed:', error);
      setMessage('The reset request could not be completed. Try again later or contact your administrator.', true);
    } finally {
      setLoading(false);
    }
  });

  document.getElementById('password-reset-form').addEventListener('submit', async (event) => {
    event.preventDefault();
    const password = document.getElementById('reset-password').value;
    const confirmation = document.getElementById('reset-password-confirm').value;
    if (password.length < 12) {
      setMessage('Choose a password with at least 12 characters.', true);
      return;
    }
    if (password !== confirmation) {
      setMessage('The passwords do not match.', true);
      return;
    }
    const button = document.getElementById('reset-password-button');
    button.disabled = true;
    button.textContent = 'Updating…';
    try {
      const { error } = await client.auth.updateUser({ password });
      if (error) throw error;
      await client.auth.signOut();
      passwordRecovery = false;
      loginForm.classList.remove('hidden');
      document.getElementById('forgot-password').classList.remove('hidden');
      document.getElementById('password-reset-form').classList.add('hidden');
      document.getElementById('reset-password').value = '';
      document.getElementById('reset-password-confirm').value = '';
      setMessage('Password updated. Sign in with your new password.');
    } catch (error) {
      setMessage(`Password update failed: ${error.message}`, true);
    } finally {
      button.disabled = false;
      button.textContent = 'Update password';
    }
  });

  document.getElementById('logout-button').addEventListener('click', () => {
    let auditWarningShown = false;
    void window.ElectroPayModal.show({
      type: 'confirm',
      title: 'Log out?',
      message: 'Are you sure you want to log out of ElectroPay?',
      confirmText: 'Log Out',
      cancelText: 'Cancel',
      loadingText: 'Logging out…',
      onConfirm: async () => {
        if (client && currentUser) {
          if (!auditWarningShown) {
            const { error: auditError } = await client.rpc('log_electropay_event', { p_action: 'LOGOUT' });
            if (auditError) {
              console.error('Logout audit event could not be recorded:', auditError);
              auditWarningShown = true;
              window.ElectroPayModal.setFeedback({
                type: 'warning',
                message: `Logout could not be audited: ${auditError.message}. Select “Log Out Anyway” to end the session.`,
                confirmText: 'Log Out Anyway'
              });
              return false;
            }
          }
          const { error } = await client.auth.signOut();
          if (error) throw new Error(`Logout failed: ${error.message}`);
        }
        window.location.reload();
      }
    });
  });

  window.addEventListener('focus', () => { void refreshActiveProfile(); });
  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') void refreshActiveProfile();
  });
  window.setInterval(() => { void refreshActiveProfile(); }, 60000);
  window.setInterval(() => { void refreshNotifications(); }, 60000);
  window.lucide?.createIcons();

  window.ElectroPayAuth = {
    initialize,
    showLogin,
    showWorkspace,
    showRestrictedAccessScreen,
    refreshNotifications,
    get client() { return client; },
    get user() { return currentUser; },
    get profile() { return currentProfile; },
    isAdmin() { return currentProfile?.role === 'ADMIN' && currentProfile?.active === true; },
    hasBusinessDataAccess() { return currentProfile?.active === true && (currentProfile?.role === 'ADMIN' || currentProfile?.has_business_data_access === true); },
    requireAdmin() {
      if (currentProfile?.role === 'ADMIN') return true;
      if (typeof showToast === 'function') showToast('This action requires an administrator role.', 'error');
      return false;
    }
  };
})();
