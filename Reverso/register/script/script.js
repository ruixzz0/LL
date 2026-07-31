const form = document.getElementById('loginForm');
const togglePassword = document.getElementById('togglePassword');
const toggleConfirmPassword = document.getElementById('toggleConfirmPassword');
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirmPassword');
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

if (toggleConfirmPassword && confirmPasswordInput) {
    toggleConfirmPassword.addEventListener('click', () => {
        togglePasswordVisibility(toggleConfirmPassword, confirmPasswordInput);
    });
}

if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const password = passwordInput?.value || '';
        const confirmPassword = confirmPasswordInput?.value || '';

        if (!isValidPassword(password)) {
            if (message) {
                message.textContent = 'A senha deve ter no mínimo 8 caracteres, uma letra maiúscula e um número.';
                message.classList.remove('success');
            }
            passwordInput?.focus();
            return;
        }

        if (password !== confirmPassword) {
            if (message) {
                message.textContent = 'As senhas não coincidem.';
                message.classList.remove('success');
            }
            confirmPasswordInput?.focus();
            return;
        }

        if (message) {
            message.textContent = 'Cadastro realizado com sucesso!';
            message.classList.add('success');
        }

        form.reset();
    });
}
