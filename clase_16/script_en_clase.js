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
// saco el igual para siempre estar 1 por detras. El 4 es la cantidad de elementos en el array.
// en vez de 4 podemos usar length

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

const carrito = [
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
]

/* Por cada elemento de mi carrito mostrar por consola

Has comprado el producto {producto.nombre} x {producto.cantidad} a un precio unitario de ${producto.precio}

Cuando recorro un array siempre es el mismo for. Lo unico que cambia es el array que recorro.
Y la variable que guarda el elemento en particular.  

*/

for(let index = 0; index < carrito.length; index = index +1){
    let producto = carrito[index]
    console.log(producto)

// Podemos reemplazar el let por un const. Ya que es un objeto. 

// producto seria un objeto, el cual esta siendo guardado en la variable
// al ser un array de objetos es un objeto

    console.log('Has comprado el producto' + producto.nombre + 'x' + producto.cantidad + 
    'a un precio unitario de' + producto.precio)
}

// No puedo declarar en el mismo bloque varias constantes iguales. Pero si esta por fuera si. 

