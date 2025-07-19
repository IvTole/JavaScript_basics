// Ejercicios de APIs

// 1. Realiza una petición GET con fetch() a JSONPlaceholder y muestra en la consola la lista de publicaciones

fetch("https://jsonplaceholder.typicode.com/postss")
.then(response => {
    return response.json()
})
.then(data => {
    const var_show = ["userId", "title"]
    for (element of data) {
        for (key of Object.keys(element)) {
            if (var_show.includes(key)) {
                console.log(`${key}: ${element[key]}`)
            }
        }
    }
})
.catch(error => {
    console.log("Error: ", error)
})

// 2. Modifica el ejercicio anterior para que verifique si la respuesta es correcta usando response.ok. Si no lo es, lanza y muestra un error

fetch("https://jsonplaceholder.typicode.com/postss")
.then(response => {
    if (!response.ok) {
        throw Error(`Status HTTP: ${response.status}`)
    }
    return response.json()
})
.then(data => {
    const var_show = ["userId", "title"]
    for (element of data) {
        for (key of Object.keys(element)) {
            if (var_show.includes(key)) {
                console.log(`${key}: ${element[key]}`)
            }
        }
    }
})
.catch(error => {
    console.log("Error: ", error)
})


// 3. Reescribe el ejercicio 1 usando la sintaxis async/await en lugar de promesas

async function getPosts() {
    try {
        const var_show = ["userId", "title"]
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
        if (!response.ok) {
            throw Error(`Status HTTP: ${response.status}`)
        }
        const data = await response.json()
        for (element of data) {
            for (key of Object.keys(element))
                console.log(`${key}: ${element[key]}`)
        }
    } catch(error) {
        console.log(`Error: `, error)
    }
}

getPosts()

// 4. Realiza una petición POST a JSONPlaceholder para crear una nueva publicación. Envía un objeto con propiedades como title o body

async function createPost() {
    try {

        const newPost = {
            userId: 1,
            title: "Nuevo post",
            body: "Hola a todos"
        }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
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

createPost()


// 5. Utiliza el método PUT para actualizar completamente un recurso (por ejemplo, modificar una publicación) en JSONPlaceholder

async function updatePost() {
    try {

        const updatedPost = {
            id: 1, // campo obligatorio
            userId:1,
            title: "Post actualizado",
            body: "Nuevo contenido del body actualizado"
        }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PUT",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(updatedPost)
    }) 

    const data = await response.json()
    console.log(data)
    } catch(error) {
        console.log(`Error: `, error)
    }
}

updatePost()

// 6. Realiza una petición PATCH para modificar únicamente uno o dos campos de un recurso existente

async function changePost() {
    try {

        const change = {
            title: "Post actualizado con PATCH"
        }

    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "PATCH",
        headers: { 
            "Content-Type": "application/json"
        },
        body: JSON.stringify(change)
    }) 
    
    if (!response.ok) {
        throw new Error(`HTTP status: ${response.status}`)
    }

    const data = await response.json()
    console.log(data)
    } catch(error) {
        console.log(`Error: `, error)
    }
}

changePost()

// 7. Envía una solicitud DELETE a la API para borrar un recurso (por ejemplo, una publicación) y verifica la respuesta

async function deletePost() {
    try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
        method: "DELETE"
    }) 
    
    if (!response.ok) {
        throw new Error(`HTTP status: ${response.status}`)
    }

    console.log(`Publicacion eliminada exitosamente. Status: ${response.status}`)
    } catch(error) {
        console.log(`Error: `, error)
    }
}

deletePost()

// 8. Crea una función que realice una solicitud GET (la que quieras) a OpenWeatherMap

async function getWeather(city) {
    
    const apiKey = "655177d6d0787b1a989dee7a63cb54f7"
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    try {
    const response = await fetch(url)
    if (!response.ok) {
        throw new Error(`HTTP error: Status: ${response.status}`)
    }
    const data = await response.json()
    console.log(data)
    } catch(error) {
        console.log(`Error: `, error)
    }
}

getWeather("Guadalajara")

// 9. Utiliza la PokéAPI para obtener los datos de un Pokémon concreto, a continuación los detalles de la especie y, finalmente, la cadena evolutiva a partir de la especie

async function getPokemonData(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error: Status: ${response.status}`)
        }
        return await response.json()
    } catch(error) {
        console.log("Error en Data: ", error)
    }
}

async function getPokemonSpecies(pokemon) {
    const url = `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
    try {
        const response = await fetch(url)        
        if (!response.ok) {
            throw new Error(`HTTP error: Status: ${response.status}`)
        }
        return await response.json()
    } catch(error) {
        console.log("Error en Species: ", error)
    }
}

async function getEvolutionChain(url) {
    try {
        const response = await fetch(url)        
        if (!response.ok) {
            throw new Error(`HTTP error: Status: ${response.status}`)
        }
        return await response.json()
    } catch(error) {
        console.log("Error en EvolutionChain: ", error)
    }
}

function getNextEvolutionChain(chain) {
    if (chain.evolves_to.length === 0) {
        return // exit the function
    } else {
        console.log(chain.evolves_to[0].species.name)
        const nextChain = chain.evolves_to[0]
        getNextEvolutionChain(nextChain)
    }
}

// lo siguiente no se puede porque se trata de una función asincrona, y retornaría una promesa pendiente
//const dragonite_data = getPokemonData("Dragonite")

async function getEvolutiveLine(pokemon) {
    console.log(`---Información del pokemon ${pokemon}---`)
    const data = await getPokemonData(pokemon)
    console.log("Name: ", data.name)
    console.log("Types: ", data.types.map(t => t.type.name).join(", "))

    const species = await getPokemonSpecies(pokemon)
    const evo_ulr = species.evolution_chain.url
    const evo_chain = await getEvolutionChain(evo_ulr)
    
    console.log("---Cadena evolutiva---")
    console.log(evo_chain.chain.species.name) // first in line
    getNextEvolutionChain(evo_chain.chain)
}

getEvolutiveLine("Chansey")


// 10. Utiliza una herramienta como Postman o Thunder Client para probar diferentes endpoint de una API