// 1. Crea un elemento (por ejemplo, un <h1 id="title">) y cambia su contenido a "¡Hola Mundo!"" al cargar la página
const myH1 = document.getElementById("title")
myH1.textContent = "¡Hola Mundo!"

// 2. Inserta una imagen con id="myImage" y cambia su atributo src a otra URL
const image = document.getElementById("myImage")
image.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS1PpKm-l7p3aszBlf5CBWTUmn7-9BWkWjZA&s"

// 3. Crea un <div id="box"> sin clases y agrega la clase resaltado cuando se cargue la página
const box = document.getElementById("box")
box.classList.add("resaltado")

// 4. Crea un párrafo con id="paragraph" y cambia su color de texto a azul
const paragraph = document.getElementById("paragraph")
paragraph.style.color = "blue"

// 5. Agrega un botón que, al hacer clic, cree un nuevo elemento <li> con el texto "Nuevo elemento y lo agregue a una lista <ul id="list">
const button = document.getElementById("button")
const list = document.getElementById("list")

function createNewElement() {

    const newElement = document.createElement("li")
    newElement.textContent = "Nuevo elemento"

    list.appendChild(newElement) // agrega tarea al listado 
}

button.addEventListener("click", createNewElement)

// 6. Crea un párrafo con id="deleteParagraph" y un botón. Al hacer clic en el botón, elimina el párrafo del DOM
const delParagraph = document.getElementById("deleteParagraph")
const delButton = document.getElementById("deleteButton")

function deleteParagraph() {
    delParagraph.remove()
}

delButton.addEventListener("click", deleteParagraph)

// también puede hacerse con una función anónima, arrow


// 7. Crea un <div id="content"> con algún texto y reemplaza su contenido por un <h2> con el mensaje "Nuevo Contenido"
const content = document.getElementById("content")
content.innerHTML = "<h2>Nuevo Contenido</h2>"

// 8. Crea un botón con id="greetBtn" y añade un evento que muestre una alerta con el mensaje "¡Hola!" al hacer clic
const greetButton = document.getElementById("greetBtn")

greetButton.addEventListener("click", () => {
    alert("¡Hola!")
})

// 9. Crea un <input id="textInput"> y un <div id="result">. Al escribir en el input, el <div> se debe actualizarse mostrando lo que se escribe
const inputText = document.getElementById("textInput")
const divResult = document.getElementById("result")

inputText.addEventListener("input", () => {
    divResult.textContent = inputText.value
})

// 10. Crea un botón con id="backgroundBtn" y, al hacer clic, cambia el color de fondo del <body> a un color diferente
const bgButton = document.getElementById("backgroundBtn")

bgButton.addEventListener("click", () => {
    document.body.style.backgroundColor = "#d4f1f4"
})