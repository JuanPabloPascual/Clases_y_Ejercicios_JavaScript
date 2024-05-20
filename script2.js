/*  Ejercicios del 13 de Mayo

Ejercicio 1
Escribe un condicional que verifique si una variable llamada "tieneHijos" es "true". 
Si es "true", imprime "Tienes hijos" en la consola. Si es "false", imprime "No tienes hijos" en la consola. 

Ejercicio 2
Escribe un condicional que verifique si una variable llamada "genero" es "hombre" o "mujer". 
Si es "hombre", imprime "Eres hombre" en la consola. Si es "mujer", imprime "Eres mujer" en la consola.
que el usuario realice la carga de un dato por teclado dicho dato será el lado de un cuadrado,
para luego  mostrar por pantalla el perímetro del mismo.

Ejercicio 3
Hacer un programa donde se ingresan cuatro números, 
calcular e informar la suma de los dos primeros y la multiplicación del tercero y el cuarto.

Ejercicio 4
Se ingresa  un valor entero, mostrar un mensaje que indique si el número es positivo, cero o negativo.

Ejercicio 5
Escribe una expresión que use el operador "&&" (and lógico) 
para verificar si una variable llamada "edad" es mayor o igual a 18 y si una variable llamada "tienePermiso" es "true". 
Si ambas condiciones se cumplen, imprime "Puedes conducir" en la consola. 
Si alguna de las dos condiciones no se cumple, imprime "No puedes conducir" en la consola.

------------------------------------------------------------------------------------------------------------------

Ejercicio 1

let tieneHijos = true;

if (tieneHijos === true)
    {
    console.log("Tienes hijos");
    }
else
    {
    console.log("No tienes hijos");
    }

------------------------------------------------------------------------------------------------------------------

Ejercicio 2

let genero

if (genero === hombre ){
    console.log("Eres hombre")}
else
    {console.log("Eres mujer");
}

------------------------------------------------------------------------------------------------------------------

Ejercicio 3

let num1 = prompt("Ingrese el primer numero:")
let num2 = prompt("Ingrese el segundo numero:")
let num3 = prompt("Ingrese el tercer numero:")
let num4 = prompt("Ingrese el cuarto numero:")

let suma = Number(num1) + Number(num2)

let producto = num3 * num4

alert("La suma de los 2 primeros numeros es: " + suma)
alert("La multiplicacion de los ultimos 2 numeros es: " + producto)

------------------------------------------------------------------------------------------------------------------

Ejercicio 4

Inicial sin terminar

let valor = prompt("Ingrese un numero")

if (valor > 0 Number){
    console.log('positivo')
}
else (valor => 0);{
    console.log('cero')
}
else (valor =)
)
}
-------------------------
Correccion 

let dato = prompt("Ingrese un valor entero")
if (dato >0)
    {
    alert("El valor ingresado es Positivo")
    }
else if (dato<0)
    {
    alert("El valor ingresado es Negativo")    
    }
else if (dato==0)
    {
    alert("El valor ingresado es Cero")    
    }

------------------------------------------------------------------------------------------------------------------

Ejercicio 5


let edad
let tienePermiso

if (edad >=0 && tienePermiso == true)
{
    console.log("Puedes conducir")
}
else
{
    console.log('No puedes conducir')
}

*/