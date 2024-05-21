/* ARRAYS y SUS METODOS */

// Array de strings

const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex',
]

// Quiero que alex pase a se alexis

nombres[5] = 'alexis'

// Como elimino a alex, con delete quedando vacio el casillero. (pero es una mala practica) 
// No es bueno crearle o borrar posiciones al array
// delete nombres[5]
// nombres[7] = 'ezequiel' 

// .pop() => elimina el ultimo elmento y lo retornan
/* nombres.pop() */

// .shift() => elimina el primer elmento y lo retornan
/* nombres.shift() */

/* let eliminado = nombres.shift() */

// Son methodos mutables, modifican el array original.

/* let nombre = 'pepe'
nombre.toUpperCase()     asi NO se guarda en Mayusula, por que es no mutable */ 

/* let nombre = 'pepe'
nombre = nombre.toUpperCase() asi SI se guarda en Mayusula */

//----------------------------------------------------------------------------------------------------------------

/* push => agrega al final */ // Me retornan la nueva cantidad de elementos que yo tenga

//----------------------------------------------------------------------------------------------------------------

/* let nuevoLength = nombres.push('leonel') console.log(nuevoLength )*/ // No se usa mucho. Es Mutable.

//----------------------------------------------------------------------------------------------------------------

/* unshift => agregar al inicio */ // Me retornan la nueva cantidad de elementos que yo tenga

//----------------------------------------------------------------------------------------------------------------

/* INDEX off () */ // Solo se puede usar en arrays de STRINGS por compatibilidad

/* indexOf(searchString) => busca el elemento en el arrayt y si lo encuentra devuelve la posicion, sino deuvelve -1 */

/* let posicionMaria = nombres.indexOf('maria')  // tambien esta lastIndexOf

nombres[posicionMaria] = 'marianela'

console.log(nombres)

*/

/* SPLICE() Empalmar */ // la mas compleja

// Recibe (posicion, cuantosElementosElimino?, nuevo elemento)

/* let posicionDeValentina = nombres.indexOf('valentina')  

nombres.splice(posicionDeValentina, 1)

console.log(nombres)console.log(nombres) */

// Eliminar a juan y maria. Principio DRY

/* let posiciones = nombres.indexOf('juan')

nombres.splice(posiciones, 2)

console.log(nombres) */  // Aca no aplica tan bien porque sabemos la posicion de ambos por que vemos el Array

/* Aca aplica mejor ya que no sabemos las posiciones de antemano

const nombres = [
    'pepe',
    'juan',
    'maria',
    'pedro',
    'valentina',
    'alex'
]
nombres.splice(nombres.indexOf('juan'),1)
nombres.splice(nombres.indexOf('maria'),1)    */

// Mejorar este codigo con una funcion llamda elminarNobmre que recibira el nombre a eliminar 

// ERROR: dry
// KISS: Keep it simple

/* function sumar (a,b){
    return a + b
} 

function eliminarNombre(a,b){
    a.splice(a.indexOf(b), 1)
}

*/
// Principio de KISS: Keep it simple

/* function eliminarNombre(listaDeNombres, nombreAEliminar){
    
    listaDeNombres.splice(listaDeNombres.indexOf(nombreAEliminar), 1)
    
} */


/* const elementosEliminados = nombres.splice(nombresindexOf('maria'), 0, 'carlos', 'jose')
console.log(elementosEliminados) 

Este no se usa mucho, el la const es para ver los eliminados. 

*/ 

// LA CLASE QUE VIENE VAMOS CON ARRAYS DE OBJETOS