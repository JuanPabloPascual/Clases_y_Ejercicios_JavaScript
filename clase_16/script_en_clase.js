/* function esVocal(letra){
    const vocales = ['a', 'e', 'i', 'o', 'u']
    return vocales.includes(letras)
}

const vocales = ['a', 'e', 'i', 'o', 'u']
console.log(vocales.includes('r')) */

// ---------------------------------------------------------------------------------------------------------------

/* Por cada nombre quiero que aparezca un menaje por  consola diciendo 'hola [nombre]' 
El codigo de abajo no cumple el DRY. Tampoco tiene en cuenta la ejecucion en base al array*/

/* console.log('Hola' + nombres[0])
console.log('Hola' + nombres[1])
console.log('Hola' + nombres[2])
console.log('Hola' + nombres[3]) */

/* Necesito un bucle por que voy a repetir una accion una determinada cantidad de veces 
Se usa el FOR. Cuando quiero recorrer un array vamos a utilizar el bucle FOR.
*/
/* saco el igual para siempre estar 1 por detras. El 4 es la cantidad de elementos en el array.
en vez de 4 podemos usar length */

/* for (let i = 0; i < nombres.length; i = i +1)
    console.log(i) */

/* Esto es recorrar un array */

/* const nombres = ['pepe', 'juan', 'maria', 'ezequiel']

for (let i = 0; i < nombres.length; i = i +1){
    let nombre = nombres[i]
    console.log('Hola' + nombre)
}
*/

// -----------------------------------------------------------------------------------------------------------------

// Vemos una forma aun mas simple. Mostrar cada elemento de mi carro, mostrarlo en consola.

/* const carrito = [
    {
        nombre: 'tv samsung',
        precio: 300,
        cantidad: 3
    },
    {
        nombre: 'patineta',
        precio: 30,
        cantidad: 1
    },
] */

/* Por cada elemento de mi carrito mostrar por consola

Has comprado el producto {producto.nombre} x {producto.cantidad} a un precio unitario de ${producto.precio}

Cuando recorro un array siempre es el mismo for. Lo unico que cambia es el array que recorro.
Y la variable que guarda el elemento en particular.  

*/

/* for(let index = 0; index < carrito.length; index = index +1){
    let producto = carrito[index]
    console.log(producto)

// Podemos reemplazar el let por un const. Ya que es un objeto. 

// producto seria un objeto, el cual esta siendo guardado en la variable
// al ser un array de objetos es un objeto

    console.log('Has comprado el producto' + producto.nombre + 'x' + producto.cantidad + 
    'a un precio unitario de' + producto.precio)
} */

// No puedo declarar en el mismo bloque varias constantes iguales. Pero si esta por fuera si. 


// -----------------------------------------------------------------------------------------------------------------

/* let sumatoriaEdad = 0

const personajes = [
    {
        nombre:'pepe',
        apellido: 'suarez',
        edad: 40,
    },
    {
        nombre:'maria',
        apellido: 'cassanova',
        edad: 20,
    },
    {
        nombre:'ezequiel',
        apellido: 'rodriguez',
        edad: 35,
    },
]

for(let index = 0; index < personajes.length; index = index +1){
    const usuario = personajes[index]
    console.log('Hola mi nombre es' + usuario.nombre + ' ' + usuario.apellido + 
    ' y tengo ' + usuario.edad + ' años')
    sumatoriaEdad = sumatoriaEdad + usuario.edad
}
console.log('La suma de las edades es '+ sumatoriaEdad) */


// Cuando lo hice me falto agregar un + entre apellido y edad. Ademas de cambiar la declaracion de la constante usuario.
// Habia puesto nombre. Tampoco hay que modificar el let del for.

/* Por cada personaje mostrar el siguiente mensaje por consola
'Hola mi nombre es {personaje.nombre} {personaje.apellido} y tengo {personaje.edad} años'

Opcional:
Al finalizar el recorrido mostrar por consola 'total de edades: {sumatoria de las edades de los usuarios}' */

// -----------------------------------------------------------------------------------------------------------------

/* FOR OFF  es lo mismo que hice antes con let e index.
Se le pone al element una palabra en singular. 
Si el array fuese de strings seria con let en vez de const 
Si quiero recorrer al revez o desde el medio, no se puede usar el FOR OF. Es aplicable en un 90%
*/

/* const personajes = [
    {
        nombre:'pepe',
        apellido: 'suarez',
        edad: 40,
    },
    {
        nombre:'maria',
        apellido: 'cassanova',
        edad: 20,
    },
    {
        nombre:'ezequiel',
        apellido: 'rodriguez',
        edad: 35,
    },
]

for(const element of personajes){
    console.log(element)
} */

// -----------------------------------------------------------------------------------------------------------------

/* FOR IN  

*/

/* const datos = {
    nombre:'pepe',
    apellido: 'suarez',
    dni: '54543565',
    }

for(let propiedad of datos) */
