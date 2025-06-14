// Strings
// Algunos métodos de cadenas de texto

let myName = "Ivan"
let greeting = "Hola, " + myName + '!'// al sumar strings se concatenan

console.log(greeting, 'type: ', typeof greeting)

// Longitud
console.log('Longitud: ', greeting.length)

// Acceso a caracteres
console.log('caracter en posicion 0: ', greeting[0])
console.log('caracter en posicion 1: ', greeting[1])
console.log('caracter en posicion 10: ', greeting[10])

// Métodos comunes para strings
console.log('toUppercase(): ', greeting.toUpperCase())
console.log('toLowercase(): ', greeting.toLowerCase())
console.log('indexOf(Ivan): ', greeting.indexOf("Ivan")) // el indice donde ha encontrado la palabra en el argumento
console.log('indexOf(Toledano): ', greeting.indexOf("Toledano")) // si no encuentra, pone -1
console.log('includes(Ivan): ', greeting.includes("Ivan")) // checa si incluye una palabra
console.log('slice(0,8): ', greeting.slice(0,8)) // slicing, no incluye el ultimo argumento de indice
console.log('replace("Ivan", "Toledano"): ', greeting.replace("Ivan", "Toledano"))

// Template literals (plantillas literales)
// para crear strings que sean de varias lineas

let message = `Hola, estoy tomando un
curso de JavaScript`
console.log('mesage: ', message)

// también lo utilizamos para incluir valores de variables
// con los acentos ` podemos hacer esto
let email = "toledano.ivan@gmail.com"
console.log(`Hola, ${myName}!, tu email es ${email}`)