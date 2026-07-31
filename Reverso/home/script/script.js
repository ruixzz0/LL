const welcomeMessage = document.getElementById('welcomeMessage');
const userEmail = localStorage.getItem('userEmail') || '';

if (welcomeMessage) {
    const userName = userEmail ? userEmail.split('@')[0] : '';

    welcomeMessage.textContent = userName
        ? `Olá, ${userName}!`
        : 'Olá, visitante!';
}