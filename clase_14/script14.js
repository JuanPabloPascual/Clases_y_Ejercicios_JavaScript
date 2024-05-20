/* Ejercicio 3 de la clase 14

Solicitar al usuario la cantidad de personas en la clase (numero)
Dependiendo de la cantidad de alumnos de la clase van a solicitar a cada uno el nombre
(
    Si la cantidad de personas de clase es 5, van solicitar 5 nombre
)
Luego de solicitar los nombres mostrarlos en este formato:
'
Lista de alumnos:
-juan
-pepe
-maria
-carla
-julieta

Resolucion 

let sumatoria = 0
for (let i = 1; i <= 5; i = i = +1){
    let numero_clase = prompt('ingrese la cantidad de personas en la clase')
    while(!numero_clase || isNaN(numero_clase)){
    numero_clase = prompt('Error, dato no valido, vuelva a inrgesar el numero')
    }
    numero_clase = Number(numero_clase)
    sumatoria = sumatoria + numero_clase
}

alert ('lista: \n-juan\n-pepe\n-maria\-carla\-julieta')
*/


/* ----------------------------------------------------------------------------------------------------------------

Ejercicio 4 de la clase 14

calcularMinutos(horas) => cantidad de minutos
calcularMinutos(1) => 60
obtenerNumero()

Va a solicitar al usuario un numero y va a validar que el dato ingresado sea un numero
Sino debera volver a solicitarlo
Cuando termine de validar se retornara el numero */ 




