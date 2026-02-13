// app.js
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const loginContainer = document.getElementById('login-container');
    const dashboard = document.getElementById('dashboard');

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        // Symulacja logowania - zawsze udane
        loginContainer.classList.add('hidden');
        dashboard.classList.remove('hidden');
    });
});
