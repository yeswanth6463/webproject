const loginButton = document.getElementById('login-button');
const loginForm = document.querySelector('.login-form');
const registerButton = document.getElementById('register');
const registerForm = document.querySelector('.Register-form');

loginButton.addEventListener('click', () => {
  loginForm.classList.toggle('show');
  registerForm.classList.remove('show');
});

registerButton.addEventListener('click', () => {
  registerForm.classList.toggle('show');
  loginForm.classList.remove('show');
});

// Initialize ScrollReveal with common configuration
const sr = ScrollReveal({
  distance: '80px',
  duration: 2000,
  delay: 200,
  reset: false
});

