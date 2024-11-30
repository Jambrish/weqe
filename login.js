document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'admin') {
        alert('Welcome, Admin!');
        window.location.href = 'admin.html'; // Redirect to admin page
    } else {
        alert('Welcome, Customer!');
        window.location.href = 'index.html'; // Redirect to home page for customers
    }
});
