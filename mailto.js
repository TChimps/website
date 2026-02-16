document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contact-form');
  const modal = document.getElementById('mailtoModal');
  const modalOk = document.getElementById('modalOk');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Capture values from the updated index.html form fields
      const name = document.getElementById('name').value;
      const business = document.getElementById('business').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;

      // Updated primary contact email
      const recipient = "techchimps@outlook.com"; 
      
      // Construct a professional subject line
      const subject = encodeURIComponent(`Inquiry from ${name} | ${business}`);
      
      // Format the email body for clarity
      const body = encodeURIComponent(
        `New message from Tech Chimps Website:\n\n` +
        `Full Name: ${name}\n` +
        `Business: ${business}\n` +
        `Work Email: ${email}\n\n` +
        `Message Details:\n${message}`
      );

      // Create the mailto URL
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${body}`;

      // Trigger the browser's default mail application
      window.location.href = mailtoUrl;

      // Display the confirmation modal to the user
      if (modal) {
        modal.style.display = 'flex';
      }
    });
  }

  // Handle the modal "OK" button to refresh/reset the experience
  if (modalOk) {
    modalOk.addEventListener('click', function() {
      if (modal) {
        modal.style.display = 'none';
        // Reset the form fields for the next interaction
        contactForm.reset();
        // Return user to the top of the homepage
        window.location.href = 'index.html';
      }
    });
  }
});