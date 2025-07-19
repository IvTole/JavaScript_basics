// debemos interactuar con el input, el boton y el listado

const text = document.getElementById("text")
const button = document.getElementById("button")
const list = document.getElementById("list")

// Buena práctica
// No tiene mucho sentido empezar a realizar tareas con el DOM si éste no esté cargado
// Hay que meterle un listener para esperar a que carguen las cosas

// Agregar tarea
// li son los nodos
// ul es el container
function addTask() {

    if (text.value === "") {
        return // si el texto es vacío no continúes
    }
    
    const newElement = document.createElement("li")
    newElement.textContent = text.value // queremos añadir el valor del text
    
    // se remueve el elemento de lista al hacer click sobre él
    newElement.addEventListener("click", () => {
        newElement.remove()
    })
    
    list.appendChild(newElement) // agrega tarea al listado 
    
    text.value = "" // limpia el input

}

button.addEventListener("click", addTask)

// Cuando hago un enter dentro del input
text.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
        addTask()
    }
})