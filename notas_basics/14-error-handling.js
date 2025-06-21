// Manejo de errores


// Excepciones
let myObject
//console.log(myObject.email) 
// // Esto va a producir un error, una excepción

// Tratamiento de errores
// try-catch

try {
    // código que intenta ejecutar
    console.log(myObject.email) // ya en consola no se ve el error
    console.log("Finaliza la ejecución sin errores") // esta línea no alcanza a ejecutarse
} catch {
    // bloque de error
    console.log("Se ha producido un error")
}

// Captura del error
try {
    console.log(myObject.email) 
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}

// finally
try {
    console.log(myObject) 
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
} finally {
    // Este bloque siempre se ejecuta
    console.log("Esto código se ejecuta siempre")
}

// throw
// Lanzar errores propios

function sum(a,b) { // a, b no son instancias
    if (typeof a === "number") {
        console.log("Es instancia de número")
    }
    if (Number.isInteger(a)) {
        console.log("Es un número entero")
    }
    if (!Number.isNaN(a)) {
        console.log("Es un número no nulo")
    }
    if (Number.isFinite(a)) {
        console.log("Es un número finito")
    }
    if (!(a instanceof Number) && !(b instanceof Number)) {
        console.log("No se pueden sumar estas propiedades")
    }
    return a+b // el problema es que este return siempre se ejecuta
}

console.log(sum("5",10)) // se andan mostrando varias cosas 

// Number.isInteger, verifica si el valor es un número entero
// isNaN, vierifica si el valor convertido a número es NaN
// Number.IsNan, igual que IsNan pero NO convierte, solo evalúa sin el valor es estrictamente NaN
// isFinite, verifica si el valor convertido a número es finito (no Infinity)
// Number.isFinite, igual que isFinite pero NO convierte a número
// instanceof, verifica si un objeto es instancia de una clase o constructor

// se soluciona de la siguiente manera
function sumIntegers(a,b) { // a, b no son instancias
    
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación solo suma números enteros")
    }
    return a+b 
}

try {
console.log(sumIntegers(5,10))
console.log(sumIntegers("5",10))
} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}

//throw new Error("Se ha producido un Error")
// instanceof
// typeof

// Que tal si hacemos comprobaciones antes
function sumIntegers2(a,b) { // a, b no son instancias
    if (typeof a!== "number" || typeof b !== "number") {
        throw new TypeError("Esta operacion sólo acepta números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación solo suma números enteros")
    }
    return a+b
}

try {
console.log(sumIntegers2(5,10))
console.log(sumIntegers2("5",10))

} catch (error) {
    console.log("Se ha producido un error: ", error.message)
}

// Capturar varios tipos de errores
try {
//console.log(sumIntegers2(5.5,10))
console.log(sumIntegers2("5",10))

} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de tipo: ", error.message)
    } else if (error instanceof Error) {
        console.log("Se ha producido un error: ", error.message)
    }
}

// Crear excepciones personalizadas
class sumZeroIntegerError extends Error {

    constructor(message, a,b) {
        super(message)
        this.a = a
        this.b = b // almacenemos sus propiedades
    }

    printNumbers() {
        console.log(this.a, "+", this.b)
    }
}

function sumIntegers3(a,b) { // a, b no son instancias
    if (typeof a!== "number" || typeof b !== "number") {
        throw new TypeError("Esta operacion sólo acepta números")
    }
    if (!Number.isInteger(a) || !Number.isInteger(b)) {
        throw new Error("Esta operación solo suma números enteros")
    }
    if (a == 0 || b == 0) {
        throw new sumZeroIntegerError("Se está intentando sumar cero", a, b)
    }
    return a+b
}

try {
console.log(sumIntegers3(0,10))

} catch (error) {
    console.log("Se ha producido un error personalizado: ", error.message)
    error.printNumbers()
}