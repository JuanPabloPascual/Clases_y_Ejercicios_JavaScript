/* FILTER es un metodo avanzado. Le decimos asi a un metodo que recibe una Callback
Si el valor de retorno de la callback es thurty entonces el elemento se agregara al array resultante
Si el valor de retorno de la callback es falsy se ignora (pasa el siguiente elmento)

Siempre FILTER RETORNARA un array. Si el array es vacio siginifica que nadie paso el filtro.

Callback: Una funcion pasada por parametro. Anonima. En el ejemplo siempre recie al personaje, es decir, el elemento.
Y retorna una condicion */


const productos = [
    {
        nombre:'tv samsung',
        marca: 'samsung',
        id: 1,
        precio: 3000,
    },
    {
        nombre:'celular',
        marca: 'samsung',
        id: 4,
        precio: 1100,
    },
    {
        nombre:'tv LG',
        marca: 'LG',
        id: 2,
        precio: 2900,
    },
    {
        nombre:'tv Noblex',
        marca: 'noblex',
        id: 3,
        precio: 2300,
    },
]

/* Consigna: 
-Traer los productos que sea de un precio inferior a 2950.
-Traer los productos de la marca Noblex
-Traer los productos que en su nombre incluyan el string 'tv'
*/

// Resolucion:

/* const prductosBaratos = productos.filter(function(producto){
    return (producto.precio < 2950)
})
console.log(prductosBaratos)


const prductosNoblex = productos.filter(function(producto){
    return (producto.marca === 'noblex')
})
console.log(prductosNoblex)

const prductosTv = productos.filter(function(producto){
    return (producto.nombre.includes('tv'))   

    El string tv conviene pasarlo a minuscula con toLowerCase por que es lo que el usuario inserta.

    Buena practica:
    (producto.nombre.toLowerCase().includes('tv'.toLowerCase))  

})
console.log(prductosTv) */


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

const personajesMayoresDeEdad = personajes.filter(function (personaje){
    return personaje.edad >= 18
})

// Aca reemplazo el filter con un OF / El .push pone los elmentos al final del array

const personajesMayores = []
for(const personaje of personajes){
    if(personaje.edad >= 18){
        personajesMayores.push(personaje)
    }
}
console.log(personajesMayoresDeEdad) 

// Si le ponemos llaves a algo consologeando lo transformamos en un objeto y lo podemos encontrar en consola mas facil.
// {(personaje)} Y ota forma es poner un string con de donde viene sin concatenar. Poner coma como salto de linea.