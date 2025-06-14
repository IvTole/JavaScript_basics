// Operadores

// Operadores aritmeticos
let a = 5
let b = 10


console.log(a + b) // suma
console.log(a - b) // resta
console.log(a * b) // multiplicacion
console.log(a / b) // division

console.log(a % b) // modulo
console.log(a ** b) // exponente

a++ // incremento
console.log(a)

b-- // decremento
console.log(b)

// Operadores de asignacion (el signo = al declarar una variable)
let myVariable = 2
console.log(myVariable)
myVariable += 2
console.log(myVariable)

myVariable -= 2
myVariable *= 2
myVariable /= 2
myVariable %= 2
myVariable **= 2

// Operadores de comparacion
console.log(a > b)
console.log(a < b)
console.log(10 >= 10)
console.log(a <= b)
console.log(a == b) // igualdad por valor
console.log(a == 6)
console.log(a == "6") // tambien se toma como true

console.log(a == a)
console.log(a===a) // igualdad por identidad (por tipo y valor)
console.log(a===6)
console.log(a==="6")
console.log(a != 6)
console.log(a !== "6")

// por una razon el 0 es como falso
console.log(0 == false)
console.log(1 == false)
console.log(2 == false)

// también cero podría ser true al comparar con un string vacio
console.log(0 == "")
console.log(0 == " ")
console.log(0 == "Hola")
console.log(0 === "") // esto no pasa para igualdad por identidad

// para valores nulos pasa algo similar
console.log(undefined == null) // true
console.log(undefined === null) // false

// Truthy values (valores que siempre son verdaderos)
// todos los números positivos y negativos menos el cero
// todas las cadenas de texto menos las vacias
// el boolean true

// Falsy values (valores que siempre son false)
// 0
// 0n
// null
// undefines
// NaN
// boolean false
// cadenas de texto vacías

// Operadores lógicos
// and(&&)
console.log(5 > 10 && 15 > 20)
console.log(5 < 10 && 15 < 20)
console.log(5 < 10 && 15 > 20)
console.log(5 > 10 && 15 > 20 && 30 > 40)

// or (||)
console.log(5 > 10 || 15 > 20)
console.log(5 < 10 || 15 < 20)
console.log(5 < 10 || 15 > 20)
console.log(5 > 10 && 15 > 20 || 30 < 40) // el or si se cumple, y por tanto el general es un true

// not (!)
console.log(!(true))
console.log(!(5 > 10 && 15 > 20))
console.log(!(5 > 10 || 15 > 20))

// Operadores ternarios (para escribir condicionales)
const isRaining = true

// si la condicion se cumple se ejecuta lo de antes de los :
isRaining ? console.log("Está lloviendo") : console.log("No está lloviendo") 


