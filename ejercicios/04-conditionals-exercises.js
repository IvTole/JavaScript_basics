// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = "Ivan"

if (myName == "Ivan") {
    console.log("Mi nombre es: ", myName)
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let userName = "VanoTole"
let password = "password123"

if ((userName == 'VanoTole') && (password == 'password123')) {
    console.log("Valid username and password")
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let myNumber = -3

if (myNumber == 0) {
    console.log("El número es cero")
} else if (myNumber > 0) {
    console.log("El número es positivo")
} else {
    console.log("El número es negativo")
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 18
let age_reference = 18
let age_difference

if (age < age_reference) {
    age_difference = age_reference - age
    console.log(`Es menor de edad y faltan ${age_difference} años para poder votar`)
} else {
    console.log(`Esta persona ya puede votar`)
}

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
age = 15
estado = age >= 18 ? "adulto" : "menor"
console.log('El usuario es un: ', estado)

// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"
let mes = 1
let monthName

switch (mes) {
    case 0:
        monthName = "Enero"
        break
    case 1:
        monthName = "Febrero"
        break
    case 2:
        monthName = "Marzo"
        break
    case 3:
        monthName = "Abril"
        break
    case 4:
        monthName = "Mayo"
        break
    case 5:
        monthName = "Junio"
        break
    case 6:
        monthName = "Julio"
        break
    case 7:
        monthName = "Agosto"
        break
    case 8:
        monthName = "Septiembre"
        break
    case 9:
        monthName = "Octubre"
        break
    case 10:
        monthName = "Noviembre"
        break
    case 11:
        monthName = "Diciembre"
        break
    default:
        monthName = "Número de mes incorrecto"
}
console.log('Mes: ', monthName)


// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior
let dayNumber

switch (monthName) {
    case "Enero":
        dayNumber = 31
        break
    case "Febrero":
        dayNumber = 28
        break
    case "Marzo":
        dayNumber = 31
        break
    case "Abril":
        dayNumber = 30
        break
    case "Mayo":
        dayNumber = 31
        break
    case "Junio":
        dayNumber = 30
        break
    case "Julio":
        dayNumber = 31
        break
    case "Agosto":
        dayNumber = 31
        break
    case "Septiembre":
        dayNumber = 30
        break
    case "Octubre":
        dayNumber = 31
        break
    case "Noviembre":
        dayNumber = 30
        break
    case "Diciembre":
        dayNumber = 31
        break
    default:
        dayNumber = "Número de mes incorrecto"
}
console.log('Días del mes: ', dayNumber)

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
let language = "Japanese"
let greeting

switch (language) {
    case "Spanish":
        greeting = "Hola, Mundo"
        break
    case "English":
        greeting = "Hello, World"
        break
    case "French":
        greeting = "Bonjour, le Monde"
        break
    case "German":
        greeting = "Hallo, Welt"
        break
    case "Japanese":
        greeting = "こんにちは、世界!"
        break
}
console.log('greeting: ', greeting)

// 9. Usa un switch para hacer de nuevo el ejercicio 6
// ya se había hecho así

// 10. Usa un switch para hacer de nuevo el ejercicio 7
// ya se había hecho así