// Separated mailto handling for the contact form.
// Place this file at assets/js/mailto.js and ensure index.html loads it as shown.
//
// Improvements over the inline approach:
// - Clear separation of concerns (HTML + CSS vs. JS).
// - Small safety checks and user-friendly warnings for very long messages.
// - Accessible focus management for the modal.
// - Uses a temporary anchor with target="_blank" so the page stays active and modal can be shown.
// - Graceful handling if required fields are missing.

(function () {
  // Configuration
  const RECIPIENT = "asktechchimps@gmail.com";
  // Conservative mailto length threshold; browsers/clients may disagree on limits.
  const MAILTO_SAFE_LENGTH = 2000;

  // Elements
  const form = document.getElementById('contact-form');
  const modal = document.getElementById('mailtoModal');
  const modalOk = document.getElementById('modalOk');
  const modalText = document.getElementById('mailtoModalText');

  if (!form) {
    // If the form is not present on the page, nothing to do.
    return;
  }

  // Utility: Build mailto URL with subject and body. Uses CRLF in body for clearer line breaks.
  function buildMailto({ name, business, email, message }) {
    const subject = `Website contact from ${name || 'website visitor'}`;

    const lines = [];
    if (name) lines.push(`Name: ${name}`);
    if (business) lines.push(`Business: ${business}`);
    if (email) lines.push(`Email: ${email}`);
    if (message) {
      lines.push('');
      lines.push('Message:');
      lines.push(message);
    }
    const body = lines.join('\r\n');

    return `mailto:${RECIPIENT}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  // Utility: show modal and manage aria-hidden / focus
  function showModal() {
    modal.style.display = 'flex';
    modal.setAttribute('aria-hidden', 'false');
    modalOk.focus();
  }

  function hideModalAndRedirect() {
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    // Redirect to index.html (reloads)
    window.location.href = 'index.html';
  }

  // Validate required fields before building mailto.
  function validate(data) {
    const errs = [];
    if (!data.name) errs.push('Please enter your name.');
    if (!data.email) errs.push('Please enter your email.');
    // Additional lightweight email pattern check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailPattern.test(data.email)) errs.push('Please enter a valid email address.');
    return errs;
  }

  // Handler for form submit
  form.addEventListener('submit', function (ev) {
    ev.preventDefault();

    // Collect and trim values
    const name = (document.getElementById('name')?.value || '').trim();
    const business = (document.getElementById('business')?.value || '').trim();
    const email = (document.getElementById('email')?.value || '').trim();
    const message = (document.getElementById('message')?.value || '').trim();

    const payload = { name, business, email, message };

    // Validate
    const errors = validate(payload);
    if (errors.length) {
      // Show first error in a simple focusable alert — replace with your UI if desired
      alert(errors.join('\n'));
      return;
    }

    // Build mailto URL
    const mailto = buildMailto(payload);

    // Warn if the generated URL might be too long for some clients
    if (mailto.length > MAILTO_SAFE_LENGTH) {
      const proceed = confirm('The message is rather long and may be truncated by some mail apps. Do you want to continue?');
      if (!proceed) return;
    }

    // Create a temporary anchor and click it so the mail client opens while keeping this page active.
    const a = document.createElement('a');
    a.href = mailto;
    a.target = '_blank';
    a.rel = 'noopener noreferrer';
    a.style.display = 'none';
    document.body.appendChild(a);

    // Clicking must happen as part of the user gesture (it does — submit handler),
    // which reduces the chance of popup blocking.
    a.click();

    // Remove the temporary anchor quickly (timeout to ensure the click processed).
    setTimeout(() => {
      try { document.body.removeChild(a); } catch (e) { /* ignore */ }
    }, 50);

    // Update modal text with brief info for the user (optional)
    modalText.textContent = 'Your mail application should have opened. Please review and send the message there. After sending (or if you close the mail app), click OK to return to the homepage.';

    // Show modal so the user has a clear flow back to the site
    showModal();
  });

  // Modal OK button
  modalOk.addEventListener('click', function () {
    hideModalAndRedirect();
  });

  // Allow Escape to close the modal and redirect
  document.addEventListener('keydown', function (ev) {
    if (ev.key === 'Escape' && modal.style.display === 'flex') {
      hideModalAndRedirect();
    }
  });
})();
