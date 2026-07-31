const form = document.getElementById('loginForm');
const togglePassword = document.getElementById('togglePassword');
const passwordInput = document.getElementById('password');
const emailInput = document.getElementById('email');
const message = document.getElementById('message');

function togglePasswordVisibility(button, input) {
    const isPasswordHidden = input.type === 'password';
    input.type = isPasswordHidden ? 'text' : 'password';

    const eyeIcon = button.querySelector('.eye-icon');
    if (eyeIcon) {
        eyeIcon.textContent = isPasswordHidden ? '🙈' : '👁️';
    }

    button.setAttribute('aria-label', isPasswordHidden ? 'Ocultar senha' : 'Mostrar senha');
}

function isValidPassword(value) {
    return value.length >= 8 && /[A-Z]/.test(value) && /\d/.test(value);
}

if (togglePassword && passwordInput) {
    togglePassword.addEventListener('click', () => {
        togglePasswordVisibility(togglePassword, passwordInput);
    });
}

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = emailInput?.value?.trim() || '';
        const password = passwordInput?.value || '';

        if (!isValidPassword(password)) {
            if (message) {
                message.textContent = 'A senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um número.';
                message.classList.remove('success');
            }
            passwordInput?.focus();
            return;
        }

        localStorage.setItem('userEmail', email);
        window.location.href = '../home/home.html';
    });
}

