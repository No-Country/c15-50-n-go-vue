document.addEventListener('DOMContentLoaded', function () {
    const email = {
        email: '',
        password: ''
    }

    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const button = document.querySelector('#loginForm button[type="submit"]');

    inputEmail.addEventListener('blur', validar);
    inputPassword.addEventListener('blur', validar);

    function validar(e) {
        if (e.target.value.trim() === '') {
            mostrarAlerta(`El ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if (e.target.id === 'email' && !validarEmail(e.target.value)) {
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        if (e.target.id === 'password' && !validarPassword(e.target.value)) {
            mostrarAlerta('La contraseña debe tener al menos 8 caracteres', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }

        limpiarAlerta(e.target.parentElement);

        email[e.target.name] = e.target.value.trim().toLowerCase();
        comprobarEmail();
    }

    function validarEmail(email) {
        const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        return regex.test(email);
    }

    function validarPassword(password) {
        return password.length >= 8;
    }

    function mostrarAlerta(mensaje, referencia) {
        limpiarAlerta(referencia);

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('error');

        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.error');
        if (alerta) {
            alerta.remove();
        }
    }

    function comprobarEmail() {
        if (Object.values(email).includes('')) {
            button.disabled = true;
        } else {
            button.disabled = false;
        }
    }
});
