// DOM (Documento Object Model)
// Es una representación en forma de árbol de todos los elementos que tenemos en la web
// Se hace referencia a todo lo que está en la página web (etiquetas, atributos, texto)
// Y puede interacturar con este contenido 

// Estructura del DOM

// Selección de elementos
// Métodos básicos (selector HTML)

// console.log(document)
// de manera nativa tenemos una variable llamada document
// el fichero de html donde esté actuando este js será el document
// Esto es el propio DOM
const myElement = document.getElementById("id") // seleccionar un elemento único  

const myElements = document.getElementsByClassName("class") // ahora por nombre de clase, clase representa a diferentes elementos que son iguales (botones por ejemplo), devuelve una colección de elementos html

const myElementsByTag = document.getElementsByTagName("tag") // una selección por etiqueta, asociada a una colección de elementos

// Métodos más modernos (selector CSS)

document.querySelector(".paragraph") // Lanzar una consulta, con un criterio, incluso asociados al selector CSS
document.querySelectorAll(".paragraph") // Devuelve una lista de nodos

// Manipulación de elementos

const title = document.getElementById("title") // const es solo una referencia, el valor si puede modificarse
title.textContent = "Hola JavaScript" // Si existe este elemento, se acaba modificando

const container = document.querySelector(".container")
container.innerHTML = "<p>Esto es un nuevo párrafo</p>" // cambiar elemento interno de este contenedor, por ejemplo un boton o un parrafo con texto

// realmente tenemos infinitas formas de modificar elementos

// Modificación de atributos

const link = document.querySelector("a") // atributos de un link dentro de html, el primer elemento que coincida con el criterio
// devolver el primer enlace que encuentre

// Obtención de atributo
const url = link.getAttribute("href") // propiedad donde está la url

// Establecimiento del atributo
link.setAttribute("href", "https://example.com")

// Comprobación de atributo 
link.hasAttribute("target") // target, que pasa a la hora de hacer click en el link, regresa un boolean

// Eliminacion de atributos
link.removeAttribute("target")

// - Interacción con clases CSS

const box = document.querySelector(".box") // un elemento ahí perdido CSS, que también pueden tener identificadores
box.classList.add("selected") // En html, las clases pueden estar repetidas, y por tanto podría acceder a una lista de clases
// en la lista de clases hay un nuevo nombre de clase, ese selected podria estar asociado a esta clase
box.classList.remove("selected") 
box.classList.toggle("selected") // es como un switch, cambio de estado, como al hacer click en un botón

// cambiar los estilos 
const button = document.querySelector("button")
button.style.backgroundColor = "blue" // un control sobre el estilado asociado a ese element desde HTML, sin necesidad de la hoja de estilos
button.style.color = "white" // esta propiedad style es propia de estos objetos de boton
button.style.padding = "10px"

// - Creación y eliminación de elementos

// Creación
const newParagraph = document.createElement("p") // añadir un elemento parrafo, pero no lo añade en el DOM
newParagraph.textContent = "Este es un nuevo párrafo creado desde JS"
newParagraph.style.paddint = "8px"

container.appendChild(newParagraph) // creación de elementos en el DOM

// crear un listado de elementos
const itemsList = document.querySelector("ul") // me traigo el listado de elementos
const newItem = document.createElement("li")
newItem.textContent = "Nuevo elemento"

// Inserción en un lugar concreto
const secondItem = itemsList.children[1] // a cada uno de sus hijos, o li
secondItem.insertBefore(newItem, secondItem) // Lo quiero insertar antes del segundo

itemsList.append(newItem) // insertar al final del listado
itemsList.prepend(newItem) // insertar al principio del listado
secondItem.before(newItem) // sin acceder al listado (algo más moderno)
secondItem.after(newItem)

// Eliminación
// quiero eliminar el new paragraph, tengo la referencia
newParagraph.remove()

// Eliminación tradicional
const parente = newParagraph.parentElement // ir hacia abajo, a sus hijos, o hacia arriba, al contenedor
parente.removeChild(newParagraph)

//  - Elementos del DOM
// Elementos que permiten atender a acciones del usuario

// pop up
function showMsg() {
    alert("Clic!")
}

const sendButton = document.querySelector("#send")
// agregar una acción al click
sendButton.addEventListener("clic", showMsg)

// también podemos utilizar arow functions
sendButton.addEventListener("click", () => {
    alert("Clic con una arrow function!")
})

// Eventos comunes

document.addEventListener("DOMContentListener", () => {
    console.log("El DOM está completamente cargado")
}) // a nivel de todo el DOM, quedarnos esperando por que la web esté cargada

// eventos de ratón, ej. cuando le pasemos el raton por encima
sendButton.addEventListener("mouseenter", () => {
    sendButton.style.backgroundColor = "green"
})
sendButton.addEventListener("mouseleave", () => {
    sendButton.style.backgroundColor = "blue"
})

// formulario
const form = document.querySelector("form")
form.addEventListener("submit", (event) => {
    //código al momento de enviar el formulario
})