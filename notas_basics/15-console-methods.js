// Métodos de console

var colors = require('colors');

// log
// mostrar la información más general por consola
console.log("Hello, World!")

// error
console.error("Este es un mensaje de error".red)
console.error("Error al conectarse a la base de datos".red, new Error("Conexion fallida"))

// warn
console.warn("Este es un mensaje de advertencia".yellow)

// info
console.info("Este es un mensaje de información adicional")

// table
let data = [
    ["Ivan", 36],
    ["Sara", 35]
]
console.table(data)

data = [
    {name: "Ivan", age: 37},
    {name: "Sara", age: 21}
]
console.table(data)

// group
console.group("Usuario:")
console.log("Nombre: Ivan")
console.log("Edad: 36")
console.groupEnd()

// time
// tiempos de ejecución
console.time("Tiempo de ejecución1")
for (let i=0; i<10000; i++) {

}
console.timeEnd("Tiempo de ejecución1")
console.time("Tiempo de ejecución2")
for (let i=0; i<10000; i++) {

}
console.timeEnd("Tiempo de ejecución2")

// assert
// muestra en mensaje de error si lo que evalua es false
// se utiliza mucho en testing
// un criterio para mostrar algo por consola
let age = 17
console.assert(age >= 18, "El usuario debe ser mayor de edad")

// count
// el numero de veces que se llama una etiqueta específica
console.count("Click")
console.count("Click")
console.count("Click")
console.countReset("Click")
console.count("Click")

// trace
// muestra el seguimiento de la pila de ejecución
function funcA() {
    funcB()
}
function funcB() {
    console.trace("Seguimiento de la ejecución")
}

funcA()

// clear
// al ejecutar se limpia la consola
// console.clear()