/* const obtenerUsuarios = async () => {

    const response = await fetch(URL_API + '/users', {
        method: 'GET',
    })

    const data = await response.json()
    console.log(data)
}


obtenerUsuarios() */


/* 

Si fetchean a esta direccion: https://jsonplaceholder.typicode.com/users/1
Obtendran el detalle de un usuario
El usuario tendra este formato
{
  "id": 1,
  "name": "Leanne Graham",
  "username": "Bret",
  "email": "Sincere@april.biz",
  "address": {
    "street": "Kulas Light",
    "suite": "Apt. 556",
    "city": "Gwenborough",
    "zipcode": "92998-3874",
    "geo": {
      "lat": "-37.3159",
      "lng": "81.1496"
    }
  },
  "phone": "1-770-736-8031 x56442",
  "website": "hildegard.org",
  "company": {
    "name": "Romaguera-Crona",
    "catchPhrase": "Multi-layered client-server neural-net",
    "bs": "harness real-time e-markets"
  }
}

Mostrar en HTML dentro de un div

h2: {user.name}
span: phone: {user.phone}
span: email: {user.email}

const URL_API = 'https://jsonplaceholder.typicode.com'
 
const obtenerUsuarios = async () =>{
    const response = await fetch(URL_API + '/users/1',{
        method: 'GET',
    })
    
    const data = await response.json()
    
    div.innerHTML = `
        <h2>
        ${data.name}
        </h2>
        <span>
        ${data.phone}
        </span>
        <span>
        ${data.email}
        </span>`
}
obtenerUsuarios()
let div = document.getElementById('div')

*/

const URL_API = 'https://jsonplaceholder.typicode.com'

const buscarUserPorId = async (id) =>{
    const response = await fetch(URL_API + '/users/' + id, {
        method: 'GET'
    })
    const user = await response.json()
    return user
}

const renderizarUsuario = async ( valorBusqueda, buscarUsuarioCallback ) => {
    const userInfoHTML = document.getElementById('user-info')
    userInfoHTML.innerHTML = `<h2>Cargando...</h2>`

    const user = await buscarUsuarioCallback(valorBusqueda)

    userInfoHTML.innerHTML = `
    <h2>Nombre: ${user.name}</h2>
    <span>Email: ${user.email}</span>
    <br>
    <span>Phone: ${user.phone}</span>
    `
}

renderizarUsuario(1, buscarUserPorId)
