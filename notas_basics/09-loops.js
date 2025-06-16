// loops o bucles
// estructuras de control iterativas


// for
// se ejecuta codigo en cada iteracion según condiciones
// para la condicion, definimos variable, la condicion, y la forma en que itera al acabar la ejecucion

for (let i = 0; i < 5; i++) {
    console.log(`Saludos!: ${i}`)
}

// ejemplo, almacenando valores
const numbers = [1,2,3,4,5,6,7,8]

for (let i = 0; i < numbers.length; i++) {
    console.log(`Elemento: ${i}  Valor: ${numbers[i]}`)
}

// while
// evaluarse antes de cada iteracion
// en caso de falso, el bucle termina

let i = 0
while(i<5) {
    console.log(`Saludos: ${i}`)
    i += 1
}

// do while
// funciona muy parecido al while
// no se evalua al principio sino al final

i = 6
do {
    console.log(`Saludos: ${i}`)
    i += 1
} while(i<5)
// en este caso se espera al final al hacer la confirmacion

// for of
// recorrer valores de un iterador (estructura de datos)
let myArray = [1,2,3,4]

let mySet = new Set(["Ivan", "Toledano", "VanoTole", "toledano.ivan@gmail.com", 36, true])

let myMap = new Map([
    ["name", "Ivan"],
    ["email", "toledano.ivan@gmail.com"],
    ["age", 36]
])

for (let valor of myArray) {
    console.log(valor)
}
for (let valor of mySet) {
    console.log(valor)
}
for (let valor of myMap) {
    console.log(valor)
}

// otro ejemplo
let myString = "Hola soy Ivan Toledano"
for (let valor of myString) {
    console.log(valor)
}

// Buenas prácticas

// el uso del break y continue
// ignoramos el 5
for (let i = 0; i < 10; i++) {
    if (i ==5) {
        continue // se sale de esta iteracion y pasa a la siguiente
    }
    console.log(`Saludos!: ${i}`)
}

for (let i = 0; i < 10; i++) {
    if (i ==5) {
        break // se sale del loop
    }
    console.log(`Saludos!: ${i}`)
}