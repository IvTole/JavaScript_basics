// tipos de datos nativos (no son objetos)

// strings (cadenas de texto)
// la variable name ya existe en js
let myname = "Ivan Toledano"
let alias = 'VanoTole'
let email = `toledano.ivan@gmail.com`

// number (números)
let age = 36 // entero
let height = 1.73 // flotante

// boolean (Booleanos)
let isStudent = false
let isTeacher = true

// undefined (no es usual, se declara pero no se asigna valor)
// lo imprimiría como undefined
// ejemplo, tenemos una propiedad que todavia no tiene valor, parece None de python
let undefinedValue
console.log(undefinedValue)

// null (valores nulos)
let nullValue = null
console.log(nullValue)

// symbol (ecmascript ES6, valores unicos que pueden ser utilizados como identificadores de propiedades, tambien para definir otros objetos)
let mySymbol = Symbol("mysymbol") // abrimos instancia
console.log(mySymbol)

// BigInt (representar numeros de mas de 64 bits, y utilizar en teoria toda la memoria)
// no pueden empezar con 0, si no es un octal
let myBigInt = BigInt(98098970897680763042345234534598723590342987432)
let myBigInt2 = 98098970897680763042345234534598723590342987432n
console.log(myBigInt)

// mostramos los tipos de datos
console.log(typeof myname)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

// sale el tipo como object
console.log(typeof nullValue)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)