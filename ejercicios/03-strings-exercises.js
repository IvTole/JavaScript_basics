// 1. Concatena dos cadenas de texto
let first_name = "Ivan"
let last_name = "Toledano"

let full_name = first_name + " " + last_name
console.log("Nombre completo: ", full_name)

// 2. Muestra la longitud de una cadena de texto
console.log('Longitud: ', full_name.length)

// 3. Muestra el primer y último carácter de un string
console.log('Primer caracter: ', full_name[0])
console.log('Ultimo caracter: ', full_name.slice(-1))

// 4. Convierte a mayúsculas y minúsculas un string
console.log('Mayusculas: ', full_name.toUpperCase())
console.log('Minusculas: ', full_name.toLowerCase())

// 5. Crea una cadena de texto en varias líneas
let message = `Hola, estoy haciendo
el ejercicio 03 sobre metodos de strings`
console.log('Message: ', message)

// 6. Interpola el valor de una variable en un string
let message2 = `Hola, mi nombre es ${first_name}
 y mi apellido es ${last_name}`
 console.log('Message2: ', message2)

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log('Reemplazo de espacios por guiones: ', full_name.replace(" ", "-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log('full_name contiene la palabra "Toledano": ', full_name.includes("Toledano"))

// 9. Comprueba si dos strings son iguales
console.log('Nombre == Apellido: ', first_name == last_name)

// 10. Comprueba si dos strings tienen la misma longitud
console.log('length(nombre) == length(apellido): ', first_name.length == last_name.length)