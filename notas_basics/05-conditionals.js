// Condicionales o estructuras de control
// if, else if, else

// if (se ejectuta codigo si una condicion es verdadera)
let age = 36

if (age == 36) {
    // Bloque de codigo
    console.log('La edad es 36')
}

// else (en caso de que no se cumpla la condicion)
age = 35
if (age == 36) {
    console.log("La edad es 36")
} else {
    console.log("La edad no es 36")
}

// else if (para hacer comprobaciones/condiciones intermedias)
age = 17
if (age == 36) {
    console.log("La edad es 36")
} else if (age < 18) {
    console.log("Es menor de edad")
} else {
    console.log("La edad no es 36 ni es menor de edad")
}

// Operadores ternarios
// Actúa como operador (forma mas compacta de escribir un condicional simple)
// El resultado de esta revision lo podemos sacar asignando a una variable
// se combina la parte de operadores y la parte de condicionales

age = 17

const message = age == 36 ? "La edad es 36" : "La edad no es 36"
console.log(message)

// Switch
// es una alternativa a anidar un if else
// util cuando tenemos varias condiciones pero comparadas con una unica variable
let day = 3 // representamos un dia por un número
let dayName

switch (day) {// cual es la variable que nosotros queremos inspeccionar
    case 0:
        dayName = "Lunes"
        break
    case 1:
        dayName = "Martes"
        break
    case 2:
        dayName = "Miercoles"
        break
    case 3:
        dayName = "Jueves"
        break
    case 4:
        dayName = "Viernes"
        break
    case 5:
        dayName = "Sabado"
        break
    case 6:
        dayName = "Domingo"
        break
    default: // el caso else
    dayName = "Número de día incorrecto"
    break // podríamos ignorar este break
}

console.log('El dia es: ', dayName)

// el switch es más legible en este tipo de casos
// aunque es menos flexible a la hora de tener condiciones mas complejas
// y que también es necesario meter el break en cada caso