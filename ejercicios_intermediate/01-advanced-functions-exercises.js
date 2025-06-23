// Ejercicios de funciones avanzadas

// 1. Crea una función que retorne a otra función
console.log("--Ejercicio 1--")

class Client {
    
    constructor(name, balance, password) {
        this.name = name
        this.balace = balance
        this.password = password
    }

    login() {
        return dbConnect
    }
}

function dbConnect() {
    console.info("Connecting to system ...")
}

let myClient = new Client("Ivan", 16000, "1234")

console.log(myClient.login())

// 2. Implementa una función currificada que multiplique 3 números
console.log("--Ejercicio 2--")

function mul(...numbers) {
    let counter = 1
    for (let number of numbers) {
        counter *= number
    }
    return counter
}

function curryMul(a) {
    return function (b) {
        return function (c) {
            return mul(a,b,c)
        }
    }
}


const mulAB = curryMul(2)(3)

console.log(mulAB(4))

// 3. Desarrolla una función recursiva que calcule la potencia de un número elevado a un exponente
console.log("--Ejercicio 3--")

function potencia(number, power) {
    if (!Number.isInteger(power)) {
        throw TypeError("Se esperaba una potencia entera")
    }
    if (power==0) {
        return 1
    }

    if (power>0) {
        return number * potencia(number, power - 1)
    } else if (power<0) {
        return (1/number) * potencia(number, power + 1)
    }    
}

console.log(potencia(2,-3))

// 4. Crea una función createCounter() que reciba un valor inicial y retorne un objeto con métodos para increment(), decrement() y getValue(), utilizando un closure para mantener el estado
console.log("--Ejercicio 4--")

function createCounter(value) {
    let counter = value
    return counterObj = {
        value: value,
        increment() {
            counter++
        },
        decrement() {
            counter--
        },
        getValue() {
            console.log(`Valor actual: ${counter}`)
            return counter
        }
    }
}

const counter = createCounter(4)

counter.increment()
counter.increment()
console.log(counter.getValue())


// 5. Crea una función sumManyTimes(multiplier, ...numbers) que primero sume todos los números (usando parámetros Rest) y luego multiplique el resultado por multiplier
console.log("--Ejercicio 5--")

function sumManyTimes(multiplier, ...numbers) {
    let counter = 0
    for (let number of numbers) {
        counter += number
    }
    return multiplier * counter
}

console.log(sumManyTimes(3,5,10))


// 6. Crea un Callback que se invoque con el resultado de la suma de todos los números que se le pasan a una función
console.log("--Ejercicio 6--")

function sum(...numbers) {
    let counter = 0
    for (let number of numbers) {
        counter += number
    }
    return counter
}

function processData(data, callback) {
    const result = sum(...data)     
    callback(result)
}

function processResult(result) {
    console.log(`El resultado de la suma es: ${result}`)
}

processData([1,2,3,4,5], processResult)
processData([1,2,3,4,5], (result) => {
    console.log(`Mi resultado utilizando un arrow function es: ${result}`)
})

// 7. Desarrolla una función parcial
console.log("--Ejercicio 7--")

function partialMul(a) {
    return function(b,c) {
        return mul(a,b,c)
    }
}

const mulWith = partialMul(4)
console.log(mulWith(2,3))

// 8. Implementa un ejemplo que haga uso de Spread
console.log("--Ejercicio 8--")

const numbers = [1,2,3,4]

function mulWithSpread(a,b,c,d) {
    return a*b*c*d
}

console.log(mulWithSpread(1,2,3,4)) // sin spread
console.log(mulWithSpread(...numbers)) // con spread


// 9. Implementa un retorno implícito
console.log("--Ejercicio 9--")

const greet = (name) => console.log(`Hola ${name}, gracias por inscribirte al curso.`)

greet("Ivan")

// 10. Haz uso del this léxico
console.log("--Ejercicio 10--")

const student = {
    name: "Ivan",
    password: "1234",
    login: function(pass) {
        if (pass===this.password) // this lexico
        console.log(`Hola, ${this.name}, gracias por ingresar a ...`)
        else if (pass !== this.password) {
            throw Error("No es el password correcto")
        }
    }
}

student.login("124")