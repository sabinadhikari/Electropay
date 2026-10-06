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
    const { data, error } = await client
      .from('profiles')
      .select('user_id, full_name, role, active, data_access_granted, access_status')
      .eq('user_id', userId)
      .maybeSingle();
    if (error) throw error;
    if (!data || data.active !== true || !['ADMIN', 'STAFF'].includes(data.role)) {
      throw new Error('This account is not enabled for ElectroPay. Contact your administrator.');
    }

    return data;
  }

  async function refreshActiveProfile() {
    if (!client || !currentUser) return;
    const { data, error } = await client
      .from('profiles')
      .select('user_id, full_name, role, active')
      .eq('user_id', currentUser.id)
      .maybeSingle();
    if (error) {
      console.error('Could not refresh the authenticated ElectroPay profile:', error);
      return;
    }
    if (!data || !data.active) {
      const { error: signOutError } = await client.auth.signOut();
      if (signOutError) console.error('Could not end the disabled ElectroPay session:', signOutError);
      return;
    }
    if (data.role !== currentProfile?.role || data.full_name !== currentProfile?.full_name) {
      currentProfile = data;
      document.getElementById('profile-name').textContent =
        data.full_name.trim() || currentUser.email || 'ElectroPay user';
      document.getElementById('profile-role').textContent = data.role;
      document.dispatchEvent(new CustomEvent('electropay:role-changed'));
    }
  }

  async function showAuthenticatedApp(user, { logLogin = false } = {}) {
    const profile = await readProfile(user.id);
    if (logLogin) {
      const { error } = await client.rpc('log_electropay_event', { p_action: 'LOGIN' });
      if (error) throw error;
    }
    currentUser = user;
    currentProfile = profile;
    document.getElementById('profile-name').textContent =
      profile.full_name.trim() || user.email || 'ElectroPay user';
    document.getElementById('profile-email').textContent = user.email || '';
    document.getElementById('profile-role').textContent = profile.role;
    document.getElementById('profile-status').textContent = profile.active ? 'Active account' : 'Inactive account';

    if (profile.role === 'STAFF' && !profile.data_access_granted) {
      showRestrictedAccessScreen(profile.access_status || 'PENDING');
      return;
    }

    appShell.classList.add('hidden');
    loginScreen.classList.remove('hidden');
    loginForm.classList.add('hidden');
    document.getElementById('forgot-password').classList.add('hidden');
    setMessage('Loading your protected ElectroPay workspace…');
    if (logLogin) document.dispatchEvent(new CustomEvent('electropay:authenticated'));
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
    setMessage('');
  }

  async function requestBusinessDataAccess() {
    const button = document.getElementById('request-access-button');
    if (!button) return;
    button.disabled = true;
    button.textContent = 'Requesting…';

    try {
      if (!client) throw new Error('Supabase is not configured. Reload after configuration.');
      if (client.rpc) {
        const { error } = await client.rpc('request_electropay_data_access', {
          p_requested_access: 'Existing business records'
        });
        if (error) throw error;
      }
      currentProfile = { ...currentProfile, access_status: 'PENDING', data_access_granted: false };
      document.getElementById('access-request-status').textContent = 'PENDING';
      document.getElementById('request-access-message').textContent = 'Your access request has been submitted. An administrator will review it shortly.';
      if (typeof showToast === 'function') showToast('Access request submitted.', 'success');
    } catch (error) {
      console.error('Access request failed:', error);
      if (typeof showToast === 'function') showToast('We could not submit your access request. Please try again.', 'error');
      document.getElementById('request-access-message').textContent = 'We could not submit your access request right now.';
    } finally {
      button.disabled = false;
      button.textContent = 'Request Access';
    }
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
        await showAuthenticatedApp(data.session.user);
        return true;
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
        setMessage('Invalid email/username or password.', true);
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
          data: {
            full_name: fullName
          }
        }
      });

      if (error) {
        const normalizedMessage = error.message || 'We could not create your account.';
        if (/already|exists|registered|duplicate/i.test(normalizedMessage)) {
          setMessage('An account with this email already exists. Try signing in instead.', true);
          return;
        }
        setMessage('We could not create your account right now. Please try again.', true);
        return;
      }

      if (data.session) {
        try {
          await showAuthenticatedApp(data.user, { logLogin: true });
          return;
        } catch (profileError) {
          await client.auth.signOut();
          setMessage(profileError.message, true);
          return;
        }
      }

      await window.ElectroPayModal.show({
        type: 'success',
        title: 'Account Created',
        message: 'Your ElectroPay account has been created successfully.',
        details: ['Please verify your email address before signing in.'],
        confirmText: 'Back to Login',
        onConfirm: () => showLoginForm('Account created. Check your email to verify before signing in.')
      });
      showLoginForm('Account created. Check your email to verify before signing in.');
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
  window.lucide?.createIcons();

  window.ElectroPayAuth = {
    initialize,
    showLogin,
    showWorkspace,
    showRestrictedAccessScreen,
    get client() { return client; },
    get user() { return currentUser; },
    get profile() { return currentProfile; },
    isAdmin() { return currentProfile?.role === 'ADMIN'; },
    hasBusinessDataAccess() { return currentProfile?.role === 'ADMIN' || currentProfile?.data_access_granted === true; },
    requireAdmin() {
      if (currentProfile?.role === 'ADMIN') return true;
      if (typeof showToast === 'function') showToast('This action requires an administrator role.', 'error');
      return false;
    }
  };
})();
