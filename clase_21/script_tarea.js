/* 
Hacer un formulario para productos

Titulo: string con mas de 6 caracteres
Precio: numero valido 
Descripcion (textarea): string con mas de 100 caracteres
stock: numero valido
Codigo: string pero que tenga un # por delante EJ: '#aj504'/ '#pepe' / '#123'

*/
const formulario = document.getElementById('formulario')
const limpiar = document.getElementById('limpiar')
const INPUTS = [
    {
        id: '',
        validacion: (texto) => texto.length > 6,
        error: 'El string debe tener mas de 6 caracteres'
    },
    {
        id: '',
        validacion: (numero) => !isNaN(numero) && Boolean(numero),
        error: 'No se ingresó un número'
    },
    {
        id: '',
        validacion: (texto)  => texto.length > 10,
        error: 'El string debe tener mas de 100 caracteres'
    },
    {
        id: '',
        validacion: (numero) => !isNaN(numero) && Boolean(numero),
        error: 'No se ingresó un número'
    },
    {
        id: '',
        validacion: (string) => string.startsWith('#'),
        error: 'El código debe empezar con el caracter #'
    }
]
const ids = []
let texto = ''
for(let i = 0; i < formulario.elements.length - 1; i++){
    ids.push(formulario[i].id)
}
for(let i = 0; i < formulario.elements.length - 1; i++){
    INPUTS[i].id = ids[i]
}
let i = 0
formulario.addEventListener('submit', ( evento)=> {
    evento.preventDefault()
    i= 0
    for(let input of INPUTS){
        if(input.validacion(evento.target[i].value)){
            console.log('exito')
            document.getElementById(input.id).style = 'none'
            let span = document.getElementById('mensaje-error-' + INPUTS[i].id)
            span.innerText = ''
        }else{
            console.log(input.error)
            let span = document.getElementById('mensaje-error-' + INPUTS[i].id)
            span.innerText = INPUTS[i].error
        }
        i++
    }
})