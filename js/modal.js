(() => {
  const root = document.getElementById('electropay-modal');
  const panel = root.querySelector('[data-modal-panel]');
  const icon = document.getElementById('electropay-modal-icon');
  const title = document.getElementById('electropay-modal-title');
  const message = document.getElementById('electropay-modal-message');
  const details = document.getElementById('electropay-modal-details');
  const inputLabel = document.getElementById('electropay-modal-input-label');
  const input = document.getElementById('electropay-modal-input');
  const errorMessage = document.getElementById('electropay-modal-error');
  const cancelButton = document.getElementById('electropay-modal-cancel');
  const confirmButton = document.getElementById('electropay-modal-confirm');
  const icons = {
    success: 'circle-check',
    warning: 'triangle-alert',
    error: 'circle-x',
    info: 'info',
    confirm: 'circle-help',
    danger: 'shield-alert'
  };

  let active = null;
  let previousFocus = null;
  let previousOverflow = '';
  let busy = false;
  let modalSequence = 0;

  function sanitizeErrorText(value) {
    if (value == null) return 'Operation failed.';
    const raw = typeof value === 'string' ? value : value.message || value.details || JSON.stringify(value);
    const cleaned = String(raw)
      .replace(/(Bearer\s+|Authorization\s*:\s*|token\s*[:=]\s*|api[_-]?key\s*[:=]\s*)[^\s,;]+/gi, '$1[redacted]')
      .replace(/(sbp_[A-Za-z0-9]+|eyJ[A-Za-z0-9._-]+)/g, '[redacted]')
      .trim();
    if (!cleaned || cleaned === '[object Object]') return 'Operation failed.';
    return cleaned;
  }

  function getFriendlyError(error) {
    const details = [];
    if (error && typeof error === 'object') {
      const message = sanitizeErrorText(error.message || error.details || error.hint || error.code);
      if (message && message !== 'Operation failed.') details.push(message);
      const extraDetail = [error.details, error.hint].filter(Boolean).map(item => sanitizeErrorText(item)).join(' ');
      if (extraDetail) details.push(`Technical details: ${extraDetail}`);
      if (error.code) details.push(`Code: ${error.code}`);
    }
    if (!details.length) { 
      const fallback = sanitizeErrorText(error);
      return fallback === 'Operation failed.' ? 'Operation failed.' : fallback;
    }
    return details.join(' ');
  }

  function resetModalState() {
    root.dataset.variant = 'info';
    icon.replaceChildren();
    const defaultIcon = document.createElement('i');
    defaultIcon.dataset.lucide = 'info';
    defaultIcon.setAttribute('aria-hidden', 'true');
    icon.appendChild(defaultIcon);
    title.textContent = 'ElectroPay';
    message.textContent = '';
    details.replaceChildren();
    details.classList.add('hidden');
    input.value = '';
    input.required = false;
    input.disabled = false;
    input.classList.add('hidden');
    input.setAttribute('aria-invalid', 'false');
    input.placeholder = '';
    inputLabel.textContent = '';
    inputLabel.classList.add('hidden');
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
    cancelButton.textContent = 'Cancel';
    cancelButton.disabled = false;
    cancelButton.classList.remove('hidden');
    confirmButton.textContent = 'Done';
    confirmButton.disabled = false;
    busy = false;
    previousFocus = null;
    previousOverflow = '';
    window.lucide?.createIcons({ nodes: [icon] });
  }

  function setVariant(variant) {
    const normalizedVariant = String(variant || 'info').toLowerCase();
    const safeVariant = normalizedVariant === 'alert'
      ? 'info'
      : icons[normalizedVariant] ? normalizedVariant : 'info';
    root.dataset.variant = safeVariant;
    icon.replaceChildren();
    const iconElement = document.createElement('i');
    iconElement.dataset.lucide = icons[safeVariant];
    iconElement.setAttribute('aria-hidden', 'true');
    icon.appendChild(iconElement);
    window.lucide?.createIcons({ nodes: [icon] });
  }

  function setFeedback({ type = 'error', message: text, confirmText } = {}) {
    const current = active;
    if (!current) return false;
    setVariant(type);
    if (typeof text === 'string' && text.trim()) message.textContent = text;
    if (typeof confirmText === 'string' && confirmText.trim()) {
      current.confirmText = confirmText;
      confirmButton.textContent = confirmText;
    }
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');
    confirmButton.disabled = Boolean(current.requiredText && input.value !== current.requiredText);
    return true;
  }

  function close(result = false, force = false) {
    const current = active;
    if (!current || (busy && !force)) return false;

    const resolver = current.resolve;
    const restoreFocusTarget = previousFocus;
    const restoreOverflowValue = previousOverflow;

    root.classList.add('hidden');
    root.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = restoreOverflowValue;
    resetModalState();
    active = null;
    previousFocus = null;
    previousOverflow = '';
    if (restoreFocusTarget && restoreFocusTarget.isConnected && !restoreFocusTarget.closest('.hidden') && !restoreFocusTarget.disabled) {
      restoreFocusTarget.focus();
    }
    if (typeof resolver === 'function') resolver(result);
    return result;
  }

  function getFocusableElements() {
    return [...panel.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
    )].filter(element => !element.closest('.hidden'));
  }

  async function runConfirmAction() {
    const current = active;
    if (!current || busy) return;
    const sessionToken = current.session;

    if (current.requiredText && input.value !== current.requiredText) {
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      return;
    }

    if (!current.onConfirm) {
      close(true, true);
      return;
    }

    busy = true;
    confirmButton.disabled = true;
    cancelButton.disabled = true;
    input.disabled = true;
    confirmButton.textContent = current.loadingText || 'Please wait…';
    errorMessage.classList.add('hidden');
    errorMessage.textContent = '';

    try {
      const result = await current.onConfirm();
      if (active?.session !== sessionToken) return;
      if (result !== false) {
        close(true, true);
        return;
      }
    } catch (error) {
      if (active?.session !== sessionToken) return;
      console.error('ElectroPay dialog action failed:', error);
      errorMessage.textContent = getFriendlyError(error);
      errorMessage.classList.remove('hidden');
    } finally {
      if (active?.session !== sessionToken) return;
      busy = false;
      cancelButton.disabled = false;
      input.disabled = false;
      confirmButton.disabled = Boolean(current.requiredText && input.value !== current.requiredText);
      if (confirmButton.textContent === (current.loadingText || 'Please wait…')) {
        confirmButton.textContent = current.confirmText || 'Done';
      }
    }
  }

  function show(options = {}) {
    if (active) {
      return Promise.reject(new Error('Another ElectroPay dialog is already open.'));
    }

    const {
      type = 'info',
      title: heading = 'ElectroPay',
      message: body = '',
      confirmText = 'Done',
      cancelText = 'Cancel',
      onConfirm = null,
      details: detailItems = [],
      requiredText = '',
      inputLabel: phraseLabel,
      inputPlaceholder,
      loadingText,
      closeOnBackdrop,
      closeOnEscape
    } = options;
    const normalizedType = String(type || 'info').toLowerCase();
    const safeType = normalizedType === 'alert'
      ? 'info'
      : icons[normalizedType] ? normalizedType : 'info';

    resetModalState();
    previousFocus = document.activeElement;
    previousOverflow = document.body.style.overflow;
    const session = ++modalSequence;

    setVariant(safeType);
    title.textContent = heading;
    message.textContent = body;
    details.replaceChildren();
    for (const item of detailItems) {
      const listItem = document.createElement('li');
      listItem.textContent = item;
      details.appendChild(listItem);
    }
    details.classList.toggle('hidden', detailItems.length === 0);

    const needsInput = Boolean(requiredText);
    input.value = '';
    input.required = needsInput;
    input.setAttribute('aria-invalid', 'false');
    input.placeholder = inputPlaceholder || requiredText;
    inputLabel.textContent = phraseLabel || (requiredText ? `Type exactly: ${requiredText}` : '');
    inputLabel.classList.toggle('hidden', !needsInput);
    input.classList.toggle('hidden', !needsInput);

    cancelButton.textContent = cancelText;
    cancelButton.disabled = false;
    cancelButton.classList.toggle('hidden', !onConfirm);
    confirmButton.textContent = confirmText;
    confirmButton.disabled = needsInput;
    input.disabled = false;
    active = {
      type: safeType,
      onConfirm,
      requiredText,
      confirmText,
      loadingText,
      resolve: null,
      session,
      closeOnBackdrop: closeOnBackdrop ?? (!onConfirm && !needsInput && safeType !== 'danger'),
      closeOnEscape: closeOnEscape ?? (!needsInput && safeType !== 'danger')
    };

    root.classList.remove('hidden');
    root.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    window.lucide?.createIcons({ nodes: [root] });
    (needsInput ? input : onConfirm ? cancelButton : confirmButton).focus();

    return new Promise(resolve => {
      active.resolve = resolve;
    });
  }

  root.addEventListener('click', event => {
    if (event.target === root && active?.closeOnBackdrop && !busy) close(false);
  });
  cancelButton.addEventListener('click', () => {
    if (busy) return;
    close(false);
  });
  confirmButton.addEventListener('click', () => { void runConfirmAction(); });
  input.addEventListener('input', () => {
    if (!active) return;
    input.setAttribute('aria-invalid', 'false');
    confirmButton.disabled = input.value !== active.requiredText;
  });
  panel.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      event.preventDefault();
      if (!busy && active?.closeOnEscape) close(false);
      return;
    }
    if (event.key === 'Enter' && event.target !== confirmButton && event.target !== cancelButton) {
      event.preventDefault();
      if (!confirmButton.disabled) void runConfirmAction();
      return;
    }
    if (event.key === 'Tab') {
      const focusable = getFocusableElements();
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  window.ElectroPayModal = {
    show,
    close: () => close(false),
    setFeedback
  };
})();
