/* Renderizar el historial, cada elemento de historial debe seguir la sig estructura:

<div>
    <span><b>ID: #003</b></span>
    <h3>Tv samsung</h3>
    <span>Fecha: 14/05/2023</span>
    <br>
    <hr>
</div> */

// ----------------------------------------------------------------------------------------------------------

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
/* const historialContainer = document.getElementById('historial-container')

let historialLista = ''
for(const registro of historial){
    historialLista = historialLista + `
    <div>
    <span><b>${registro.id}</b></span>
    <h3>${registro.nombre}</h3>
    <span>Fecha: ${registro.fecha}</span>
    <br>
    <hr>
</div>
    `
} */

// historialContainer.innerHTML = historialLista

const listaHistorialHTML = document.getElementById('lista')

let listaHistorial = ''

for(const item of historial){

    listaHistorial = listaHistorial + `
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

listaHistorialHTML.innerHTML = listaHistorial