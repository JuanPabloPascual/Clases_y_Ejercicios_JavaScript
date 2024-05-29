// TAREAS: 

/* 1.

Solicitar al usuario un texto y verificar si se trata de una URL con certificado ssl,
Si cuenta con con https:// decir por consola "la url ingresada, cuenta con certificado ssl"
Si no lo tiene pero si tiene http:// "la url ingresada no cuenta con certificado ssl"
Si no posee ninguno decir "no has ingresado una url valida" */

let texto = prompt("Por favor, ingresa una url:");

if(texto.toLowerCase().includes('https:// ')){

    console.log('la url ingresada, cuenta con certificado ssl')

}else if(texto.toLowerCase().includes('http:// ')){

    console.log('la url ingresada, cuenta con certificado ssl')
    
}else{
    console.log('No has ingresado una url válida')
}


/* 2.
Dado los siguientes texto
"hola%20como%20estas,%20todo%bien?"
"no%20me%20siento%20bien"
"que%20mal"
Descifrar el codigo y mostrarlo por consola: "El codigo descifrado es: " + codigoDescifrado   // replaceAll

Averiguar la cantidad de caracteres y en base a el numero de caracteres mostrar          //  length
"el mensaje es corto" entre 1 y 8 caracteres
"el mensaje es mediano" entre 9 y 18
"el mensaje es largo"  mas de 18

Ademas si el mensaje cuenta con ",", "@", "-" debera decir, "el mensaje es complejo", sino decir   //  includes
"el mensaje no es complejo" */

function descifrarCodigo(codigo){

    let codigoDescifrado = codigo.replaceAll('%20','')

    return console.log('el código descifrado es: ' + codigoDescifrado)
}

function cantidadCaracteres(codigo){
    let codigoDescifrado = codigo.replaceAll('%20','')

    if (codigoDescifrado.length >= 1 && codigoDescifrado.length <= 8){
    
        return console.log('el mensaje es corto')
}
    else if(codigoDescifrado.length >= 9 && codigoDescifrado.length <= 18){
    
        return console.log('el mensaje es mediano')
}
        return console.log('    El mensaje es largo')
}

function complejidad(codigo){
    let codigoDescifrado = codigo.replaceAll('%20','')

    if(codigoDescifrado.includes(',' || ', ' || '@' || '-')){
        return console.log('el mensaje es complejo')
    }
        return console.log('el mensaje no es complejo')
}

console.log('mensaje 1:')

descifrarCodigo("hola%20como%20estas,%20todo%20bien?")

cantidadCaracteres("hola%20como%20estas,%20todo%20bien?")

complejidad("hola%20como%20estas,%20todo%20bien?")

console.log('\nmensaje 2:')

descifrarCodigo("no%20me%20siento%20bien")

cantidadCaracteres("no%20me%20siento%20bien")

complejidad("no%20me%20siento%20bien")

console.log('\nmensaje 3:')

descifrarCodigo("que%20mal")

cantidadCaracteres("que%20mal")

complejidad("que%20mal")


/* 3.
Solicitar al usuario un mensaje, y cifrarlo con %20 en los espacios. Una vez cifrado decifrarlo
con el algoritmo anterior. */

let mensaje = prompt("Por favor, ingresa un mensaje");

function cifrarCodigo(mensaje){

    let mensajeCifrado = mensaje.replaceAll(' ', '%20')

    return console.log('el mensaje cifrado es: ' + mensajeCifrado)
}

function descifrarCodigo(mensajeCifrado){

    let codigoDescifrado = mensajeCifrado.replaceAll('%20','')

    return codigoDescifrado
}

/* 4.
Solicitar al usuario una palabra y decir en consola "tiene mayuscula" en el caso de que tenga
una maysucula, sino decir "tiene minuscula" */

let palabra = prompt("Por favor, ingresa una palabra");

if(/[A-Z]/.test(palabra)){         // Encontre esto del rango de A-Z y el .test buscando algo mas simple qe un for

    console.log('la palabra ingresada, tiene mayuscula')

}else if(/[a-z]/.test(palabra)){

    console.log('tiene minuscula')
    
}else{
    console.log('No has ingresado una palabra válida')
}

/* 28.
Necesitamos un programa que pida ingresar la distancia de un recorrido, mediante el mensaje:
Ingresá la distancia del recorrido. Con esta información, el programa deberá calcular cuánto tiempo tardaría en completar 
el recorrido en distintos medios de transporte y luego mostrarlo mediante el siguiente mensaje:

Para la distancia {distancia} km en bicicleta el tiempo de viaje es {resultadoEnBicicleta} hora/s, 
a pie {resultadoAPie} hora/s 
y en auto {resultadoEnAuto} hora/s

Las velocidades de los medio de transporte son:
a pie : 5 km/ hs
bicicleta : 10 km/ hs
auto : 50 km/hs */

let distancia = parseFloat(prompt('ingrese distancia del recorrido'));

function resultadoEnBicicleta(distancia){
        return distancia / 10; 
}

function resultadoAPie(distancia){
    return distancia / 5; 
}

function resultadoEnAuto(distancia){
    return distancia / 50; 
}
console.log('Para la distancia ' + distancia + ' km:');
console.log('En bicicleta el tiempo de viaje es ' + (resultadoEnBicicleta(distancia)) + ' hs.');
console.log('A pie el tiempo de viaje es ' + (resultadoAPie(distancia)) + ' hs.');
console.log('En auto el tiempo de viaje es ' + (resultadoEnAuto(distancia)) + ' hs.');

/* 29.
Definí una función puedeVerPelicula que reciba como argumentos un número edad y un booleano tieneAutorizacion, 
y retorne true si la persona está habilitada para ver la película o false si no. 
Sólo puede ver la película si: tiene 15 años o más, o tiene autorización de sus padres.

Datos con los cuales deben ser enviados a la función
puedeVerPelicula(12, false)
false
puedeVerPelicula(12, true)
true
puedeVerPelicula(16, false)
true
puedeVerPelicula(18, true)
true */

function puedeVerPelicula(edad, tieneAutorizacion) {
    return edad >= 15 || tieneAutorizacion;
}
console.log(puedeVerPelicula(12, false)); 
console.log(puedeVerPelicula(12, true));  
console.log(puedeVerPelicula(16, false)); 
console.log(puedeVerPelicula(18, true)); 


/* 
30.
Definí una función esVocal que tome por parámetro un string letra y nos indique si letra es una vocal.
datos con los cuales deben ser enviados a la función:
esVocal('a')
true
esVocal('n')
false
esVocal('e')
true */  

function esVocal(letra) {
    letra = letra.toLowerCase();
    return letra === 'a' || letra === 'e' || letra === 'i' || letra === 'o' || letra === 'u';
}

console.log(esVocal('a'));
console.log(esVocal('n')); 
console.log(esVocal('e')); 
