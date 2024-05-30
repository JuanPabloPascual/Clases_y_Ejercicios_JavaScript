/* const historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2
    },
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 1,
        b: 2,
        resultado: 2
    },
]

const historialenString = JSON.stringify(historial)

alert(historialenString) */


/* 
console.log(renderizarHistorial(historial)) */

/* let datoImportante = 'el mate se toma amargo' */
/* 
localStorage.setItem('array', {}) */

/* localStorage.removeItem('array') */

/* localStorage.clear() */

/* JSON:  JAVASCRIPT OBJECT NOTATION
JSON es la variable global que usamos para acceder a los metodos .parse(), .stringify()

Las reglas de JSON

Si quiero escribir un array uso []
Si quiero escribir un objeto uso {}
Si quiero escribir un string uso "" (no valen '' o ``)
Si quiero escribir null undefined o numeros los sigo usando como antes
SI ESCRIBEN OBJETOS O ARRAYS la ultima coma no va
Caso incorrecto
{
    "nombre": "pepe",
    "edad": 70, //esta coma da error
}
Caso correcto:
{
    "nombre": "pepe",
    "edad": 70
}
*/

//Este string es transformable a objeto de JS
/* let string = '{"username": "pepe"}' *///este string esta escrito en formato JSON


//Transforma al formato objeto de JS

/* let stringComoObjeto = JSON.parse(string)
console.log(stringComoObjeto) */

//Transforma a formato text/string
/* JSON.stringify() */

/* let objeto = {
    nombre: 'pepe',
    edad: 70
} */
/* let objetoEnString = JSON.stringify(objeto) */

/* console.log(objetoEnString) *///'{"nombre": "pepe", "edad": 70}


/* 
Transformar el array historial a string con notacion JSON y mostrarlo por alert


AUTOCORRECCION:
La alerta no debe mostrar [object Object]
*/

/* const objetoEnString = JSON.stringify(historial) */

/* 
En la funcion de agregar al historial vamos a hacer el push que veniamos haciendo
pero ademas vamos a guardar el historial en el localStorage con la key 'historial'
*/

const historial = [
    {
        accion: 'CALCULAR',
        operacion: '+',
        a: 20,
        b: 2,
        resultado: 22
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
    {
        accion: 'CALCULAR',
        operacion: '-',
        a: 1,
        b: 2,
        resultado: -1
    },
]

function renderizarHistorial (historialRecibido){

    let listaStrHistorial = ''
    for (const item of historialRecibido){

        listaStrHistorial = listaStrHistorial + `
        Accion: ${item.accion}
        Operacion: ${item.operacion}
        Numeros: ${item.a}, ${item.b}
        Resultado: ${item.resultado}
        `
    }
    return listaStrHistorial
    
} 

function agregarAlHistorial(elementoHistorial) {
    const historial = obtenerHistorial() // historial previo o []
    historial.push(elementoHistorial)
    const historialStr = JSON.stringify(historial)
    localStorage.setItem('historial', historialStr)
}

function obtenerHistorial() {
    const historialLocal = localStorage.getItem('historial') // la key tiene que ser string
    return JSON.parse(historialLocal)
}

// Verificando que un usuario que entra por primera vez tenga un historial
if(obtenerHistorial() === null){
    // Si no hay historial, se guarde el historial como array vacio
    localStorage.setItem('historial', JSON.stringify([]))
}


agregarAlHistorial({
    accion: 'PEPE',
    operacion: '-',
    a: 1,
    b: 2,
    resultado: -1
})
console.log(renderizarHistorial(historial))

// Vimos con con console.log como agregar 1 o 2 objetos. Comentar el codigo y ver como queda guardado