const historial = [
    {
        id: '001',
        nombre: 'tv samsung',
        fecha: '17/09/2020'
    },
    {
        id: '022',
        nombre: 'Macbook',
        fecha: '14/10/2020'
    },
    {
        id: '030',
        nombre: 'Celular motorola',
        fecha: '17/09/2021'
    },
    {
        id: '301',
        nombre: 'Zapatillas nike',
        fecha: '30/09/2023'
    }
]

/* const listaHistorialHTML = document.querySelector('.lista')  */ // utiliza los selectores de CSS. Por ejemplo el punto.
/*  const listaHistorialHTML = document.querySelector('#lista-historial')  Aca seria por ID con # */

/* const historialItemHTML = document.getElementsByClassName('histotrial-item')
console.log(historialItemHTML)  */

let itemHistorial = ''

for(const item of historial){

    itemHistorial = itemHistorial + `
    <div>
        <span>
            <b>ID: #${item.id}</b>
        </span>
        <h3>${item.nombre}</h3>
        <span>Fecha: ${item.fecha}</span>
        <br>
        <hr>
    </div>
    `
}

listaHistorialHTML.innerHTML = itemHistorial


/* const historialItemHTML = document.getElementsByClassName('histotrial-item') 

/* const historialItemHTML = document.querySelectorAll('.historial-item')  */

// Llamo a todos los elementos con la "clase historial-item" y les agrego el boton 

/* console.log(historialItemHTML)

for (const item of historialItemHTML){
        const btn = document.createElement('button')
        btn.innerText = 'ver publicacion'
        item.appendChild(btn)
}  */

// ----------------------------------------------------------------------------------------------------------

//  Mas propiedades del DOM

const input = document.getElementById('input')

// Accedo al valor del input
console.log(input.value)

// Aniado la class rojo al elemento input
// input.classList.add('rojo')

//  Accedo al objeto de la lista de clases del input
// console.log(input.classList)

// Para quitar una class
// input.classList.remove('input')

// Hacer un interruptor de clase (si esta la clase la eliminamos sino la agregamos) "TOGGLE"
// input.classList.toggle('mostrar') // esto busca el input, verifica y si la tiene la elimina. Y sino la agrega.


/*  Alternar entre clases
if(input.classList.value.split(' ').includes('mostrar')){
    input.classList.replace('mostrar','ocultar')
}
else{
    input.classList.replace('ocultar', 'mostrar')
} */


