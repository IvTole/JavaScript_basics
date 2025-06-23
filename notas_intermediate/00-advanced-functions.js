// Funciones avanzadas

// Ciudadanos de primera clase (objetos de primera clase)
// Entidades que las podemos tratar como cualquier otro valor del lenguaje
// Vamos a guardar funciones dentro de variables

const greet = function (name) { // funcion anonima
    console.log(`Hola, ${name}`)
}

greet("Ivan") // solo necesitamos el nombre de la constante declarada


// función como parámetro
function processGreeting(greetFunction, name) {
    greetFunction(name)
}

function returnGreeting() {
    return greet // se hace un return de la funcion que tiene acceso el fichero
}

processGreeting(greet, "VanoTole") // funcion como entrada y sus parametros

console.log(returnGreeting()) // nos devuelve una función

// Si una función me return una función podría hacerla una variable
const greet2 = returnGreeting()

greet2("VanoTole2") // recordar que esta función es la que hace el console.log

// Arrow functions avanzadas
// return implicito
const multiply = (a, b) => a * b
console.log(multiply(2,5))

// this léxico
// a diferencia de las funciones normales, las arrow no crean su propio contexto
// lo heredan de lo superior

const handler = {
    name: "Ivan",
    greeting: function() {
        console.log(`Hola, ${this.name}`) // es necesario this, que hace referencia al objeto que hereda
    },
    arrowGreeting: () => {
        console.log(`Hola, ${this.name}`) // arrow functions crean su propio contexto, y no el del objeto que lo contiene (scope)
    }
}

handler.greeting() // esto no es un arrow function
handler.arrowGreeting(); // esta si es un arrow function

// IIFE
// Immediately invoke function expression
// funciones especiales que se ejecutan en el momento que se definan
// es una forma de ejecutar algo y no contaminar el ámbito global
// ya no es la forma más habitual de hacer las cosas

// IIFE clásico
// no hace falta ponerle nombre
// va entre paréntesis como si la envocaras directamente
// solo funciona cuando todo el archivo está comentado, es como si fuera una funcion por defecto
// agarran el contexto de todo el fichero
// podría ejecutarse desde el principio o hacer que se ejecutara independientemente
// es necesario el punto y coma de la parte anterior
// pero esto no es usual ya para Javascript
(function() {
    console.log("IIFE clásico")
})();

// IIFE como arrow function
(() => {
    console.log("IFIFE como arrow function")
})();

// Parámetros Rest (...)
// cuando no sabemos que parámetros puede recibir la función
// genera un array automáticamente con los parámetros

function sum(...numbers) {
    let counter = 0
    for (let number of numbers) {
        counter += number
    }
    return counter
}

console.log(sum(1,2,3,4))
console.log(sum(5,10))

// Operador Spread (...)
// se escribe igual pero en otra posición, para expandir los elementos de un array

const numbers = [1,2,3,4]

function sumWithSpread(a,b,c,d) {
    return a+b+c+d
}

console.log(sumWithSpread(1,2,3,4)) // sin spread
console.log(sumWithSpread(...numbers)) // con spread

// Closures (Clausuras)

function createCounter() {
    let counter = 0
    return function () {
        counter++
        console.log(`Contador: ${counter}`)
    }
}

const counter = createCounter()
counter() // resulta en 1
counter() // resulta en 2
// esto es posible porque la funcion interna accede al contexto de la funcion extern
// y el valor de la variable la esta actualizando todo el tiempo
// son muy utiles porque encapsulan datos y al crear las funciones globales capaces de recordar el contexto y sin contaminar

const counter2 = createCounter()
counter2()
counter2()
counter2()
counter2()

// Recursividad
// Es una funcion que invoca a sí misma
// es necesario definir una condicion para no caer en un loop infinito
function factorial(n) {
    if (n<=1) {
        return 1
    }
    return n * factorial(n-1)    
}

console.log(factorial(5))

// Funciones parciales
// Dividir una funcion con varios parametros en funciones mas pequeñas con menos de ellos
// y retornan una nueva funcion que espera los siguientes parametros
function partialSum(a) {
    return function(b,c) {
        return sum(a,b,c)
    }
}

const sumWith = partialSum(4)
console.log(sumWith(2,3))
// Entonces tenemos una parte de una funcion que no cambia y la otra parte que si
// La segunda de manera dinamica recibe los otro parametros
// Para no estar redefiniendo los mismos parámetros una y otra vez

// Currying
// Transformar una funcion con multiples en una secuencia de funciones de un parámetro
// Se va guardando el estado de una función en diferentes momentos
function currySum(a) {
    return function (b) {
        return function (c) {
            return sum(a,b,c)
        }
    }
}

const sumAB = currySum(1)(2)

console.log(sumAB(3))

// Callback
// A una funcion le pasamos otra función como argumento, para cambiar su comportamiento

function processData(data, callback) {
    const result = sum(...data) // este resultado es la entrada del callback    
    callback(result)
}

function processResult(result) {
    console.log(result)
}

function processResult2(result) {
    console.log(`Mi resultado es: ${result}`)
}

processData([1,2,3,4], processResult)
processData([1,2,3,4], processResult2)
processData([1,2,3,4], (result) => { // utilizando la sintaxis de arrow function
    console.log(`Mi resultado utilizando un arrow function es: ${result}`)
})