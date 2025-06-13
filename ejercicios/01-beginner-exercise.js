// 1. Escribe un comentario en una línea
// esta es un comentario en una sola linea

// 2. Escribe un comentario en varias líneas
/* 
Este es un comentario
en varias lineas
*/

// 3. Declara variables con valores asociados a todos los datos de tipo primitivos

// string
let myName = "Ivan"
console.log(myName, typeof myName)

// number
let entero = 2
let flotante = 3.14
console.log(entero, typeof entero)
console.log(flotante, typeof flotante)

// boolean
let isTrue = true
console.log(isTrue, typeof isTrue)

// undefined
let myUndefinedValue
console.log(myUndefinedValue, typeof myUndefinedValue)

// null
let myNullValue = null
console.log(myNullValue, typeof myNullValue)

// symbol
let mySymbol = Symbol("mysymbol")
console.log(mySymbol, typeof mySymbol)

// bigint
let myBigInt = 98347483723473728993338758n
console.log(myBigInt, typeof myBigInt)

// 4. Imprime por consola el valor de todas las variables
// ya se hizo

// 5. Imprime por consola el tipo de todas las variables
// ya se hizo

// 6. A continuación, modifica los valores de las variables por otros del mismo tipo
myName = "Alejandro"
entero = 3
flotante = 2.14
isTrue = false
// como reasignar un undefined value
// como reasignar un null value
mySymbol = Symbol("mysymbol2")
myBigInt = 98732498735928n

// 7. A continuación, modifica los valores de las variables por otros de distinto tipo
myName = 98732498735928n
entero = "Alejandro"
flotante = 3
isTrue = 2.14
// como reasignar un undefined value
// como reasignar un null value
mySymbol = false
myBigInt = Symbol("mysymbol2")

console.log(myName, typeof myName)
console.log(entero, typeof entero)
console.log(flotante, typeof flotante)
console.log(isTrue, typeof isTrue)
console.log(mySymbol, typeof mySymbol)
console.log(myBigInt, typeof myBigInt)


// 8. Declara constantes con valores asociados a todos los tipos de datos primitivos

const myName2 = "Ivan"
const entero2 = 2
const flotante2 = 3.14
const isTrue2 = true
//const myUndefinedValue2
const myNullValue2 = null
const mySymbol2 = Symbol("mysymbol")
const myBigInt2 = 98347483723473728993338758n


// 9. A continuación, modifica los valores de las constantes

//myName2 = "Alejandro"
//entero2 = 3
//flotante2 = 2.14
//isTrue2 = false
// como reasignar un undefined value
// como reasignar un null value
//mySymbol2 = Symbol("mysymbol2")
//myBigInt2 = 98732498735928n

// 10. Comenta las líneas que produzcan algún tipo de error al ejecutarse