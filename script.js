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