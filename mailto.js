document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contact-form');
  const modal = document.getElementById('mailtoModal');
  const modalOk = document.getElementById('modalOk');

  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name     = document.getElementById('name')?.value || '';
      const business = document.getElementById('business')?.value || '';
      const email    = document.getElementById('email')?.value || '';
      const phone    = document.getElementById('phone')?.value || '';
      const service  = document.getElementById('service')?.value || '';
      const size     = document.getElementById('size')?.value || '';
      const message  = document.getElementById('message')?.value || '';

      const recipient = 'info.techchimps@gmail.com';
      const subject   = encodeURIComponent(`Inquiry from ${name} | ${business}`);

      const bodyLines = [
        'New message from Tech Chimps Website',
        '',
        `Full Name:     ${name}`,
        `Business:      ${business}`,
        `Work Email:    ${email}`,
      ];
      if (phone)   bodyLines.push(`Phone:         ${phone}`);
      if (service) bodyLines.push(`Service:       ${service}`);
      if (size)    bodyLines.push(`Company Size:  ${size}`);
      bodyLines.push('', 'Message:', message);

      const body = encodeURIComponent(bodyLines.join('\n'));
      window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;

      if (modal) modal.classList.add('active');
    });
  }

  if (modalOk) {
    modalOk.addEventListener('click', function () {
      if (modal) modal.classList.remove('active');
      if (contactForm) contactForm.reset();
      window.location.href = 'index.html';
    });
  }

  // Close modal on backdrop click
  if (modal) {
    modal.addEventListener('click', function (e) {
      if (e.target === modal) modal.classList.remove('active');
    });
  }
});
