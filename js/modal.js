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
    setVariant(type);
    if (text) message.textContent = text;
    if (confirmText) {
      active.confirmText = confirmText;
      confirmButton.textContent = confirmText;
    }
    errorMessage.classList.add('hidden');
    errorMessage.textContent = '';
  }

  function close(result = false, force = false) {
    if (!active || busy && !force) return;
    root.classList.add('hidden');
    root.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = previousOverflow;
    busy = false;
    cancelButton.disabled = false;
    confirmButton.disabled = false;
    input.disabled = false;
    const resolver = active.resolve;
    active = null;
    input.value = '';
    if (previousFocus?.isConnected && !previousFocus.closest('.hidden')) previousFocus.focus();
    previousFocus = null;
    resolver(result);
  }

  function getFocusableElements() {
    return [...panel.querySelectorAll(
      'button:not([disabled]), input:not([disabled]), [href], [tabindex]:not([tabindex="-1"])'
    )].filter(element => !element.closest('.hidden'));
  }

  async function runConfirmAction() {
    if (!active || busy) return;
    if (active.requiredText && input.value !== active.requiredText) {
      input.setAttribute('aria-invalid', 'true');
      input.focus();
      return;
    }

    if (!active.onConfirm) {
      close(true, true);
      return;
    }

    busy = true;
    confirmButton.disabled = true;
    cancelButton.disabled = true;
    input.disabled = true;
    confirmButton.textContent = active.loadingText || 'Please wait…';
    errorMessage.classList.add('hidden');
    errorMessage.textContent = '';
    try {
      const result = await active.onConfirm();
      if (result !== false) {
        close(true, true);
        return;
      }
    } catch (error) {
      console.error('ElectroPay dialog action failed:', error);
      errorMessage.textContent = error instanceof Error ? error.message : 'The action could not be completed. Please try again.';
      errorMessage.classList.remove('hidden');
    } finally {
      if (active) {
        busy = false;
        confirmButton.disabled = Boolean(active.requiredText && input.value !== active.requiredText);
        cancelButton.disabled = false;
        input.disabled = false;
        if (confirmButton.textContent === (active.loadingText || 'Please wait…')) {
          confirmButton.textContent = active.confirmText;
        }
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

    previousFocus = document.activeElement;
    setVariant(safeType);
    title.textContent = heading;
    message.textContent = body;
    errorMessage.textContent = '';
    errorMessage.classList.add('hidden');

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
    inputLabel.textContent = phraseLabel || `Type exactly: ${requiredText}`;
    inputLabel.classList.toggle('hidden', !needsInput);
    input.classList.toggle('hidden', !needsInput);

    cancelButton.textContent = cancelText;
    cancelButton.disabled = false;
    cancelButton.classList.toggle('hidden', !onConfirm);
    confirmButton.textContent = confirmText;
    confirmButton.disabled = needsInput;
    input.disabled = false;
    active = {
      onConfirm,
      requiredText,
      confirmText,
      loadingText,
      resolve: null,
      closeOnBackdrop: closeOnBackdrop ?? (!onConfirm && !needsInput && safeType !== 'danger'),
      closeOnEscape: closeOnEscape ?? (!needsInput && safeType !== 'danger')
    };

    root.classList.remove('hidden');
    root.setAttribute('aria-hidden', 'false');
    previousOverflow = document.body.style.overflow;
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
  cancelButton.addEventListener('click', () => close(false));
  confirmButton.addEventListener('click', () => { void runConfirmAction(); });
  input.addEventListener('input', () => {
    input.setAttribute('aria-invalid', 'false');
    confirmButton.disabled = input.value !== active?.requiredText;
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
