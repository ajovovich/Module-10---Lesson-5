document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    //Task 2
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Task 3
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    //Task 2
    const userInput = {
        name: name,
        email: email,
        message: message
    };

    console.log('User Input:', userInput);

    // Clear form fields after submission
    document.getElementById('userForm').reset();
});
