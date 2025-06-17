// Funciones
// Un bloque de codigo diseñado para hacer una tarea específica

// Declaracion
function myFunc() {
    console.log("Hola")
}

for (let i=0; i<6; i++) {
    myFunc()
}

// Con parámetros/argumentos
function myFuncWithParams(name) {
    console.log(`Hola, ${name}`)
}
myFuncWithParams("Ivan")
myFuncWithParams("VanoTole")

// Funciones anonimas
// no tienen nombre definido
// se almacena en una variable
const myFunc2 = function (name) {
    console.log(`Hola, ${name}`)
}

myFunc2("Ivan")

// Arrow functions
// Es una forma más concisa de escribir funciones ECMASCRIPT ES6
// se asignan a variable o constante como funciones anónimas
// Util cuando queremos utilizar una sola linea

const myFunc3 = (nombre) => {
    console.log(`Hola, ${nombre}`)
}

const myFunc4 = (nombre) => console.log(`Hola, ${nombre}`)

myFunc3("VanoTole")
myFunc4("VanoTole")

// Parámetros
function sum(a, b) {
    console.log(a+b)
}

sum(5,10)
sum(5) // sale Nan

// valores por defecto
function defaultsum(a=0, b=0) {
    console.log(a+b)
}

defaultsum(5,10)
defaultsum(5)
defaultsum(b=5)

// Retorno de valores
function mult(a, b) {
    return a * b
}

console.log(mult(5,10))
let result = mult(a=5, b=10)
console.log(result)

// Funciones anidadas
function extern() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
}

extern() // solo se invoca la funcion externa
//intern() // no está definido, está fuera del scope

function extern2() {
    console.log("Función externa")
    function intern() {
        console.log("Función interna")
    }
    intern()
}

extern2() // ahora si se llama la funcion interna
// tener cuidado, aunque, porque la ultima declaracion de una funcion es la que se toma en cuenta para todo

// Funciones de orden superior
// funciones que reciben otras funciones como argumentos
function applyFunc(func, params) {
    func(params)
}

applyFunc(myFunc4,"Función de orden superior")

// forEach
// Es una función que nos sirve para ejecutar bucles asociados a elementos iterables
let myArray = [1,2,3,4]

myArray.forEach(function (value) { // funcion anonima
    console.log(value)
})

myArray.forEach((value) => console.log(value))

// también es valido para sets y para maps