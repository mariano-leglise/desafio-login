const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

// muestra el formulario de registro
registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

// muestra el formulario de inicio de sesión
loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

// maneja el envio del formulario de registro
document.getElementById('signUpForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    // captura los valores de los campos
    const name = document.getElementById('signUpName').value;
    const email = document.getElementById('signUpEmail').value;
    const password = document.getElementById('signUpPassword').value;

    // crea el objeto JSON
    const signUpData = {
        nombre: name,
        correo: email,
        contraseña: password
    };

    // muestra el objeto JSON en la consola
    console.log("Datos de Registro:", JSON.stringify(signUpData));
});

// maneja el envio del formulario de inicio de sesión
document.getElementById('signInForm').addEventListener('submit', function (event) {
    event.preventDefault(); 

    const email = document.getElementById('signInEmail').value;
    const password = document.getElementById('signInPassword').value;

    const signInData = {
        correo: email,
        contraseña: password
    };


    console.log("Datos de Inicio de Sesión:", JSON.stringify(signInData));
});
