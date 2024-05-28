
/* MAP 
Sirve para crear un array en base a otro array
Por ende Retorna siempre un array. A partir del array fui mapeandolos 
Va a recorrer el array y por cada elemnto la callback va a ejecutarse
El valor de retorno de la callback es el valor del nuevo elemento que se agregara al array resultante
No esta filtrando. Se espera un array de la misma cantidad de elementos que el array.
Si son 3 objetos hay 3 elementos
Map permite manipular los elementos para el siguiente. De un array de numeros, sacar uno booleano o de string.

La pregunta es como se van hacer esos 3 elementos?

*/

const objetos = [
    {
        nombre: 'vaso'
    },
    {
        nombre: 'tornillo'
    },
    {
        nombre:'computadora'
    },
]

const listaDeObjetosHTML = objetos.map(function(objeto){
    return '<div>'+ objeto.nombre + '</div>'
})
console.log(listaDeObjetosHTML)

/* 

'<div>vaso</div>'
'<div>tornillo</div>'
'<div>computadora</div>'

*/

// Esto me devuelve 3 false. Un array de false. 1 por cada elmento.

const resultadoX = objetos.map(function(objeto){
    return false
})
console.log(resultadoX)

/* TAREA PARA INVESTIGAR

.some()  sirve para saber si algun elemento cumple con x condicion
.every()  sirve para saber si todos elemento cumple con x condicion
.findeIndex() sirve para buscar el index de x elemento

Se escriben igual.
*/