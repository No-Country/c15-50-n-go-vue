document.addEventListener("DOMContentLoaded", function () {
    const registroForm = document.getElementById("registroForm");
    const registroButton = document.getElementById("registroButton");

    registroForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        // Obtener valores del formulario
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const password_confirm = document.getElementById("password_confirm").value;

        // Verificar si las contraseñas coinciden
        if (password !== password_confirm) {
            document.getElementById("passwordError").innerText = "Las contraseñas no coinciden";
            return;
        }

        // Limpiar mensajes de error
        document.getElementById("emailError").innerText = "";
        document.getElementById("passwordError").innerText = "";

        // Crear objeto de datos para enviar al servidor
        const data = {
            username: name,
            email: email,
            password: password,
        };

        try {
            // Realizar la solicitud al servidor usando fetch
            const response = await fetch("/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Verificar la respuesta del servidor
            if (response.ok) {
                // El registro fue exitoso
                alert("Registro exitoso. Inicia sesión con tu nueva cuenta.");
                // Redirigir a la página de inicio de sesión u otra página
                window.location.href = "/views/login.html";
            } else {
                // Mostrar mensaje de error
                const errorData = await response.json();
                alert("Error al registrar: " + errorData.message);
            }
        } catch (error) {
            console.error("Error al realizar la solicitud al servidor:", error);
            alert("Error al conectar con el servidor. Inténtalo nuevamente más tarde.");
        }
    });

    // Agregar event listeners para validar el formulario
    // Puedes utilizar librerías como 'validator' o hacer validación manual aquí
    // ...

    // Ejemplo de validación simple
    registroForm.addEventListener("input", function () {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const password_confirm = document.getElementById("password_confirm").value;

        // Validar que todos los campos estén completos antes de habilitar el botón
        if (name.trim() !== "" && email.trim() !== "" && password.trim() !== "" && password === password_confirm) {
            registroButton.removeAttribute("disabled");
        } else {
            registroButton.setAttribute("disabled", true);
        }
    });
});