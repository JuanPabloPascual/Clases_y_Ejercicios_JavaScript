// Document es una variable global de JS que representa ocmo objeto a nuestro HTML

// DOM = Document Objet Model . Representacion de decumento como objeto. 'RDO'

// console.dir(document)

// Un metodo que nos permite tener un elmento por su id,si lo encuentra lo retorna sino retorna null
// Como en el ejemplo de subtitulo

/* const titulo =  document.getElementById('titulo') // Es un HTML element

const subtitulo =  document.getElementById('subtitulo')

console.log(titulo)

titulo.innerText = 'pepe' */

/* caja.innerHTML= '<h1> Tv Samsung </h1>' */
/* const caja = document.getElementById('producto')

/* const producto = {
    precio: 1000,
    nombre: 'tv samsung',
    descripcion: 'lorem ipsum' 
} */

// En html nunca deberia haber cajas de HTML

/* caja.innerHTML = `
<h1>${producto.nombre}</h1>
<p>${producto.descripcion}<p>
<span> Precio: $${producto.precio} </span>
<button> comprar </button>
` */

// Asi se crea o creaba un elemento era muy comun. Ahora se hace con la etiqueta de arrriba button.

/* const buttonProduct = document.createElement('button')

buttonProduct.innerText = 'comprar'

console.dir(buttonProduct)

caja.appendChild(buttonProduct) */


const userInfo = document.getElementById('userInfo');

const user = {
    username: 'pepesito',
    password: '*********4',
    adress: 'av siempre viva',
    email: 'pepe@gmaip.com',
}

userInfo.innerHTML = `
<h2>${user.username}</h2>
<span>${user.password}</span>

<span> 
    adress: $${user.adress}
    <input type="text" value="${user.adress}">
</span>

<span>
    email: $${user.email}
    <input type="text" value="${user.email}">
</span>
`;

/* Generar a partir del usuario el siguiente html

h2 username
span password
adress input (y el valor debe ser la direccion)
span input (el valor debe ser el email)


*/








