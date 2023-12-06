
document.addEventListener('DOMContentLoaded', function () {
    
   
    const email = {
        email: '',
        password: ''
    }

 // selecciónar elementos de la interfaz
    const inputEmail = document.getElementById('email');
    const inputPassword = document.getElementById('password');
    const button = document.querySelector('#loginForm button[type="submit"]')

    // Asignar eventos
    inputEmail.addEventListener('blur', validar);
    inputPassword.addEventListener('blur', validar);

    function validar(e) {
       if (e.target.value.trim() === '') {
           mostrarAlerta(`El ${e.target.id} es obligatorio`, e.target.parentElement);
           email[e.target.name] = '';
           comprobarEmail();
           return; 
        } 
        
        if(e.target.id === 'email' && !validarEmail(e.target.value)){
            mostrarAlerta('El email no es válido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        };

        limpiarAlerta(e.target.parentElement);

        // asignar valores

        email[e.target.name] = e.target.value.trim().toLowerCase();
        
        // Comprobar el objeto de email
        comprobarEmail();

    }

    function mostrarAlerta(mensaje, referencia) {

        limpiarAlerta(referencia);

        // generar alerta en HTML
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('error');

        //insertar el error en el formulario
        referencia.appendChild(error);
    
    }

    function limpiarAlerta(referencia){
        const alerta = referencia.querySelector('.error');
        if (alerta) {
            alerta.remove();
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if(Object.values(email).includes('')){
            button.disabled = true;
        }else{
            button.disabled = false;
        };
    }

});

