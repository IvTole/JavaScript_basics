// APIs
// Application Programming Interface
// Interactuar con sistemas externos, como solicitar recursos
// Que sea de forma segura y estandarizada esta comunicación
// Conjunto de reglas y protocolos para comunicacion entre aplicaciones

// Sitios utilizados
// https://jsonplaceholder.typicode.com/
// https://openweathermap.org/
// https://www.postman.com/ 
// https://apidog.com/
// VSCODE Thunder Client (cliente http como extensión)

// API REST (HTTP + URLs + JSON(JavaScript Object Notation))
// Las mas comunes en desarrollo web
// Por ejemplo, el backend puede estar en python, comunicado con frotend en Js

// Métodos HTTP
// - GET - Solicitar datos
// - POST - Enviar datos, que van a acabar creando un nuevo recurso
// - PUT - Habitualmente para enviar datos al servidor, pero para actualiza un recurso
// - DELETE - Solicitar al servidor eliminar algún recurso

// Códigos de respuesta HTTP:
// 200 OK
// 201 OK y te dice que recursos ha creado
// 400 Error por parte del cliente (algo hice mal)
// 404 No encontrado, se ha solicitado algo que no existe
// 500 Error por parte del servidor (algo hice bien pero no responde)

// Consumir una API
// Usamos la url asociada a la API
// JSON Placeholder, una API que está expuesta de manera gratuita
// Los datos están en JSON, clave-valor
// Tenemos que tener documentacion para saber como hablar con esta API
// El explorador, la hacer click, la operación es de tipo GET

// consulta de manera asíncrona
// devuelve una promesa
fetch("https://jsonplaceholder.typicode.com/posts")
.then(response => {
    // transforma la respuesta a json
    return response.json() // el json de la respuestas es una promesa
    // intenté imprimir antes pero luego ya marcaba como leído 
})
.then(data => {
    // procesa los datos
    console.log(data)
}) // hay un then para quedarnos con la data
.catch(error => {
    // captura errores
    console.log("Error: ", error)
})

// Uso de Async / Await

async function getPosts() {
    
    try {

    const response = await fetch("https://jsonplaceholder.typicode.com/posts") // regresa una promesa
    
    const data = await response.json() // transformar la respuesta a json
    
    console.log(data)

    } catch(error) {
        console.log(`Error: `, error)
    }
}

getPosts()


// Solicitud Post
// En la documentacion menciona que también podemos hacer post sobre la misma url

async function createPost() {
    try {

        const newPost = {
            "userId": 1,
            "title": "Este es el titulo de mi post",
            "body": "Este es el cuerpo de mi post"
        }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", // el método a utilizar
        headers: { // cabeceras, para indicar la forma en que quiero que me des el contenido
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost) // la parte de la petición donde le mando datos al servidor, crear el post, conversion de string a json
    }) 

    const data = await response.json()
    console.log(data)
    } catch(error) {
        console.log(`Error: `, error)
    }
}

createPost()

// Manejo de errores

fetch("https://jsonplaceholder.typicode.com/vanotole")
.then(response => {
    console.log(response.status)
    if (!response.ok) {
        throw Error(`Status HTTP: ${response.status}`)
    }
    return response.json()
})
.catch(error => {
    console.log(error)
})

// Métodos adicionales

// PATCH - Actualizar parcialmente un recurso
async function partialPostUpdate() {
    try {
        const newPost = {
            "title": "Este es el NUEVO titulo de mi post",
        }
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/10", {
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newPost)
    }) 
    const data = await response.json()
    console.log(data)
    } catch(error) {
        console.log(`Error: `, error)
    }
}

partialPostUpdate()

// OPTIONS - Confirmar con el servidor qué metodos HTTP están permitidos para un recurso

// Autenticación mediante API Key



async function getWeather(city) {
    
    const apiKey = "655177d6d0787b1a989dee7a63cb54f8"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    } catch(error) {
        console.log(`Error: `, error)
    }
}

getWeather("Guadalajara")

// Otros métodos de autenticación y autorización
// formas más seguras
// Bearer Tokens
// JWT Json web tokens

// Versionado de APIs
// - https://api.example.com/v1/resources
// - https://api.example.com/v2/resources

// Otras APIs
// https://pokeapi.co/

async function getPokemon(pokemon) {
    
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`

    try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(`Habilidades de ${data.name}`)
    data.abilities.forEach(ability => {
        console.log(ability.ability.name)
    });
    } catch(error) {
        console.log("Error: ", error)
    }
}

getPokemon("Dragonite")

