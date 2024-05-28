
/* 

FIND es un metodo avanzado. la callback recibe al elemento (en este caso personajes)
Si el valor de retorno de la callback es thurty entonces el elemento se retornara y se cortara el find
Si el valor de retorno de la callback es falsy se ignora (pasa el siguiente elemento)
Find puede retornar el elmento o undefined (sino encuentra elementos)

*/

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

personajes.find(function(personajes){
    return (personajes.nombre === 'pepe')

})
console.log(personajes) 