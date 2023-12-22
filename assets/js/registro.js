document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const form = document.getElementById('loginForm');
    const formData = new FormData(form);

    fetch('http://localhost:3000/api/register', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(Object.fromEntries(formData)),
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error en el registro:', error));
});
