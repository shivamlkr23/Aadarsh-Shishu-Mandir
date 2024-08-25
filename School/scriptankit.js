document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const message = document.getElementById('message').value;

    alert(`Thank you, ${name}! Your message has been received.`);

    // You can add more functionality here, like sending the form data to a server
});
