document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Format message for WhatsApp
    const whatsappMessage = 
        `*New Contact Form Submission*%0A%0A` +
        `*Name:* ${name}%0A` +
        `*Email:* ${email}%0A` +
        `*Subject:* ${subject}%0A%0A` +
        `*Message:*%0A${message}`;
    
    // Create WhatsApp link with your number (81985614)
    const whatsappLink = `https://wa.me/81985614?text=${whatsappMessage}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappLink, '_blank');
    
    // Show success message
    document.getElementById('successMessage').style.display = 'block';
    
    // Reset form
    this.reset();
    
    // Hide success message after 3 seconds
    setTimeout(function() {
        document.getElementById('successMessage').style.display = 'none';
    }, 3000);
});