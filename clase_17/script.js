
function validarEmail (email) {
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
}

function validarPassword(password) {
    return ( Boolean(password) && password.length > 6 && password != password.toLowerCase())
}

// -----------------------------------------------------------------------------------------------------------------

function obtenerDato(data){

    let dato = prompt(data.mensaje)
    while(!data.validacion(dato)){
        dato = prompt(data.error)
        }
        return dato
    }

const DATOS = {
    EMAIL: {
        mensaje: "Bienvenido, por favor ingrese su email: ",
        error: "Error, por favor ingrese su email valido: ",
        validacion: validarEmail
    },
    PASSWORD: {
        mensaje: "Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ",
        error: "Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ", 
        validacion: validarPassword
    }
}

function login() {
    let email = obtenerDato(DATOS.EMAIL)
    let password = obtenerDato(DATOS.PASSWORD)
    return { email: email, password: password}
}



/* function validarEmail (email) {
    return (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email))
}

function validarPassword(password) {
    return (password.length > 6 && password != password.toLowerCase() && Boolean(password)) // el boolean va al principio
}

//--------------------------------------------------------------------------------------------------------------------

function obtenerEmail() {
    let email = prompt("Bienvenido, por favor ingrese su email: ")
    while (!validarEmail(email)) {
        email = prompt("Error, por favor ingrese un email valido: ")
    }
    alert('El email esta registrado: ' + email)
    return email
}

function obtenerPassword() {
    let password = prompt("Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ")
    while (!validarPassword(password)) {
        password = prompt("Error, ingrese una contrasena de min 6 caracteres y 1 mayuscula: ")
    }
    alert('El password esta regirado: ' + password)
    return password
} */

//--------------------------------------------------------------------------------------------------------------------

// CALLBACK Funcion que recibe mensaje para mostarale al usuario, le pasamos un error y le pasamos una validacion.
// Paso una funcion por parametro
// Abstraer la funcion

/* function obtenerDato (mensaje, mensajeError, validacion){
    let dato = prompt(mensaje)
    while(!validacion(dato)){
    } */

/* function obtenerDato(data){

let dato = prompt(data.mensaje)
while(!data.validacion(dato)){
    dato = prompt(data.error)
    }
    return dato
}
obtenerDato(
    {
    mensaje:"Ingrese una contrasena de min 6 caracteres y 1 mayuscula: ", 
    error: "Error, ingrese una constrasena de6 caracteres y 1 mayuscula ",
    validacion: validarPassword
    }
)

function login() {
    let email = obtenerEmail()
    let password = obtenerPassword()
    return { email: email, password: password}
}

console.log(login()) */

/* 

function login(){

let usuarioEmail = prompt('Ingrese su email');

while (!(validarEmail(usuarioEmail))) {

    alert('ERROR: No se ingreso un email valido, reintente')

    usuarioEmail = prompt('Ingrese nuevamente su email')

    }

    alert('Email registrado ' + usuarioEmail)

    return usuarioEmail

}

function login(){

    let password = prompt('Ingrese password');

    while (!password || password.length < 6 != ''){

        alert('ERROR: No se ingreso una password invalida, reintente')

        password = prompt('Ingrese nuevamente su password')
    
        }
    
        alert('Password correcta' + password)
    
        return password
}

let emailRegistrado = login()

console.log(emailRegistrado)
 */
