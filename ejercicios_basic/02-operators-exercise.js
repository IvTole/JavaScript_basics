// 1. Crea una variable para cada operación aritmética
let a = 2
let b = 3

console.log("Valores de referencia")
console.log("a:", a, "b:", b)
console.log("Operaciones aritmeticas")

let suma = a + b
console.log('suma: ', suma)

let resta = a - b
console.log('resta: ', resta)

let multiplicacion = a * b
console.log('multiplicacion: ', multiplicacion)

let division = a / b
console.log('division: ', division)

let modulo = a % b
console.log('modulo: ', modulo)

let exponente = a ** b
console.log('exponente: ', exponente)

let incremento = a++
console.log('incremento a: ', a)

let decremento = b--
console.log('decremento b: ', decremento)

// restauramos los valores
a = 2
b = 3

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

console.log("Operaciones de asignacion")

suma += 1
console.log('suma += 1: ', suma)

resta -= 1
console.log('resta -= 1: ', resta)

multiplicacion *= 2
console.log('multiplicacion *= 2: ', multiplicacion)

division /= 2
console.log('division /= 2: ', division)

modulo %= 2
console.log('modulo %= 2: ', modulo)

exponente **= 2
console.log('exponente **= 2: ', exponente)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log("Operadores de comparacion: true")
console.log('b > a: ', b > a)
console.log('suma > resta: ', suma > resta)
console.log('a+1 == b: ', (a+1) == b)
console.log('a+1 === b: ', (a+1) === b)
console.log('a == "2": ', a == "2")

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log("Operadores de comparacion: false")
console.log('b < a: ', b < a)
console.log('suma < resta: ', suma < resta)
console.log('a-1 == b: ', (a-1) == b)
console.log('a-1 === b: ', (a-1) === b)
console.log('a !== "2": ', a !== "2", "por que pasa esto?")

// 5. Utiliza el operador lógico and
console.log("Operador logico AND (&&)")
console.log('a < b && suma > resta: ', a < b && suma > resta)

// 6. Utiliza el operador lógico or
console.log("Operador logico OR (||)")
console.log('a > b || suma > resta: ', a > b || suma > resta)

// 7. Combina ambos operadores lógicos
console.log("Combinar operadores AND OR")
console.log('a > b && suma > resta || a+1 == b: ', a > b && suma > resta || (a+1)==b)

// 8. Añade alguna negación
console.log("Añadir alguna negacion")
console.log('a > b && suma > resta || !(a+1 == b): ', a > b && suma > resta || !((a+1)==b))

// 9. Utiliza el operador ternario
const isFriday = true

console.log('Operador ternario')
isFriday ? console.log("Es viernes") : console.log("No es viernes")


// 10. Combina operadores aritméticos, de comparáción y lógicas
let weight = 82
let reference_weight = 80
isTraining = false

console.log('Combinar operadores aritmeticos, de comparacion y logicos')
console.log('isTraining: ', isTraining)
console.log('weight before: ', weight)
isTraining ? weight -= 3 : weight += 2
console.log('weight after: ', weight)

let underweight

(weight >= reference_weight) ? console.log('Overweight') : console.log('Underweight')



