/* 
Ejercicio 1 de la clase 14

Mostrar por alerta el conteo del 1 al 10 (se deben ejecutar 10 alertas).

for (let iterador =1; iterador <= 10; iterador = iterador + 1){
    alert(iterador)
}

-------------------------------------------------------------------------------------------------------------

Ejercicio 2 de la clase 14

Solicitar al usuario un numero 3 veces, 
mostrar al final de las solicitudes un alerta que muestre la sumatoria de los 3 numeros

dime un numero> 3
dime un numero> 4
dime un numero> 3
>>alert> 10

let sumatoria = 0
for(let iterador = 1; iterador <= 3; iterador = iterador = +1){
    let numero = prompt('ingrese un numero')
    ---agregar validacion de numero ----
    numero = Number(numero)
    sumatoria = sumatoria + numero 
}
alert('Resultado: ' + sumatoria)

Resultado con explicacion incluyendo While

let sumatoria = 0
for(let iterador = 1; iterador <= 3; iterador = iterador = +1){
    let numero = prompt('ingrese un numero')
    while(!numero || isNaN(numero)){
        numero = prompt('Error, dato no valido, vuelva a ingresar el numero')
    }
    numero = Number(numero)
    sumatoria = sumatoria + numero 
}
alert('Resultado: ' + sumatoria)

-------------------------------------------------------------------------------------------------------------

Ejercicio 3 de la clase 14

Solicitar al usuario la cantidad de personas en la clase (numero)
Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre
(
    Si la cantidad de personas de clase es 5, van solicitar 5 nombre
)
Luego de solicitar los nombres mostrarlos en este formato:

Lista de alumnos:
-juan
-pepe
-maria
-carla
-julieta

alert ('lista: \n-pepe\n-juan')

----------------------------------------------------------------------------------------------------------------

Ejercicio 4 de la clase 14

calcularMinutos(horas) => cantidad de minutos
calcularMinutos(1) => 60
obtenerNumero()

Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero
Sino debera volver a solicitarlo
Cuando termine de validar se retornara el numero


Ejercicio 5 de la clase 14

obtenerNumero()
Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero
Sino debera volver a solicitarlo
Cuando termine de validar se retornara el numero

*/

