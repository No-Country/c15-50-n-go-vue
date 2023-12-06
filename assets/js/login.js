
document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Validación del campo de email
    const email = document.getElementById('email');
    const emailValue = email.value;
    if (emailValue.trim() === '') {
        event.preventDefault();
        email.classList.add('error');
    } else {
        email.classList.remove('error');  // Elimina la clase de error si el campo es válido
    }

    // Validación del campo de password
    const password = document.getElementById('password');
    const passwordValue = password.value;

    if (passwordValue.trim() === '') {
        event.preventDefault();
        password.classList.add('error');
    } else {
        password.classList.remove('error');  // Elimina la clase de error si el campo es válido
    }
});
