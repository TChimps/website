document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const modal = document.getElementById('mailtoModal');
  const modalOk = document.getElementById('modalOk');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const business = document.getElementById('business').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Updated contact email
      const recipient = "info.techchimps@gmail.com";

      const subject = encodeURIComponent(`Inquiry from ${name} | ${business}`);

      const body = encodeURIComponent(
        `New message from Tech Chimps Website:\n\n` +
        `Full Name: ${name}\n` +
        `Business: ${business}\n` +
        `Work Email: ${email}\n\n` +
        `Message Details:\n${message}`
      );

      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;

      // Show modal confirmation
      if (modal) {
        modal.classList.add('active');
      }
    });
  }

  if (modalOk) {
    modalOk.addEventListener('click', function() {
      if (modal) {
        modal.classList.remove('active');
        if (contactForm) contactForm.reset();
        window.location.href = 'index.html';
      }
    });
  }

  // Close modal on overlay click
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        modal.classList.remove('active');
      }
    });
  }
});
