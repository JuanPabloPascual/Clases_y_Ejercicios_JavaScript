/*  

1.	Crea una variable llamada "tieneHijos" y asígnale "true" si tienes hijos o "false" si no los tienes. 
A continuación, escribe una línea de código para mostrar el valor de la variable en una alerta.

2.	Crea una variable llamada "salario" y solicita un salario actual como valor. 
A continuación, escribe una línea de código que calcule el salario anual multiplicando el salario mensual por 12 
y muestre el resultado en una alerta.

3.	Escribe un condicional que verifique si una variable llamada "edad" es mayor o igual a 18. 
Si es mayor o igual a 18, imprime "Eres mayor de edad" en la consola. 
Si no es mayor de edad, imprime "Eres menor de edad" en una alerta.

4.	De un empleado se sabe su sueldo y los años de antigüedad. El sector de contabilidad 
nos pide hacer un programa que lea los datos y nos muestre.
•	Si el sueldo es inferior a 500 y su antigüedad es igual o superior a 10 años, 
    otorgarle un aumento del 20 %, mostrar el sueldo a pagar.
•	Si el sueldo es inferior a 500 pero su antigüedad es menor a 10 años, otorgarle un aumento de 5 %.
•	Si el sueldo es mayor o igual a 500 mostrar el sueldo en la página sin cambios.

*/

/* 

/* Ejercicio 1 */ /*

let tieneHijos = false
alert(tieneHijos)

/* Ejercicio 2 */ /*

let salario = prompt('ingrese su salario actual');
let salario_anual = salario * 12
alert('Su salario anual es de : $') 

/* Ejercicio 3 */

/* 
let edad = prompt ('ingresa tu edad');

if (edad >= 18 ) {
    console.log('Eres mayor de edad');
}
else  (edad < 18 ){
        alert('Eres menor de edad')
}
*/

/* Ejercicio 4 */ 

/* 
let salario = prompt('ingrese su salario')
let anios_antiguedad = prompt('ingrese anios de antiguedad')

if (salario < 500 && anios_antiguedad >= 10)
{
    alert (salario * 20 /100)
}
else if (salario < 500 && anios_antiguedad < 10)
{
     alert (salario * 5 /100)
}
else (salario >= 500)
{
    alert (salario)
} 

*/

/*  Correccion del Ejercicio 4

let salario = 200
let anios_antiguedad = 2

if (salario < 500 && anios_antiguedad >= 10){
    alert ('$'+ salario * 1.2)
}
else if (salario < 500 && anios_antiguedad < 10)
{       
    alert ('$'+ salario * 1.05)
}
else if (salario >= 500)
{         
    alert ('$' + salario)
}          

*/