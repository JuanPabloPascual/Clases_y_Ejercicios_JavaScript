### Calculadora

Funcionalidades:

Calculadora

-Tener soporte para las siguientes operaciones: +, -
    - Validar '+'
    - Validar '-'

Historial
-historial

Login:  (empezamos por aca)
-Crear usuario (esta se ejecuta la entrar a la calculadora)
    -email => debe estar validado

Utilidades:

-Validacion
-Opcion de CANCELAR

Ingreso de datos:
-prompt

Egreso de datos:
-alert


Login: 

Prompt va a solicitar al usuario un email
Validamos que el email sea un email 

RegEx / expresion regular: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailAVerificar) nos retorna un boolean
En caso de que no, volvera a solicitar
En caso de que si sea validao, dira email registrado {emailRegistrado}

Una vez solicitado el email, vamos a solicitar una password

Validaremos que 
1. Tenga una letra en mayuscula
2. No sea null o ''
3. Tenga al menos 6 caracteres

En caso de que no volver a solicitar.
En caso de que si sea valido dira password regirada {password}

Regla:
Todo el logeo debe estar dentro de una funcion

login() Login debe retornar un objeto usuario, email: value password: value