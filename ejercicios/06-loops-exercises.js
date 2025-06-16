// Ejercicios de Loops
// NOTA: Explora diferentes sintaxis de loops para resolver los ejercicios.

// 1. Crea un bucle que imprima los números del 1 al 20
console.log("--Ejercicio 1--")
for (let i=0; i<11; i++) {
    console.log(i)
}

// 2. Crea un bucle que sume todos los números del 1 al 100 y muestre el resultado
console.log("--Ejercicio 2--")
let lim_min = 1
let lim_max = 100
let counter = 0

for (let i=lim_min; i<(lim_max+1); i++) {
    counter += i
}
console.log("Resultado: ", counter)

// tambien podemos utilizar formula
console.log("Resultado: ", (lim_max * (lim_max+1))/2)

// 3. Crea un bucle que imprima todos los números pares entre 1 y 50
console.log("--Ejercicio 3--")
lim_min = 1
lim_max = 50

let i = lim_min
while(i<(lim_max+1)) {
    if (i%2 == 0) {
        console.log(i)
    }
    i += 1
}

// 4. Dado un array de nombres, usa un bucle para imprimir cada nombre en la consola
console.log("--Ejercicio 4--")
let arrayNames = ["Pepe", "Charlie", "Mario", "Julia", "Pascal"]

for (let valor of arrayNames) {
    console.log(valor)
}

// 5. Escribe un bucle que cuente el número de vocales en una cadena de texto
console.log("--Ejercicio 5--")
let arrayVocals = ['a', 'e', 'i', 'o', 'u']
let myString = "Altavista"
counter = 0

for (let character of myString.toLowerCase()) {
    if (arrayVocals.includes(character)) {
        counter += 1
    } else {
        continue
    }
}
console.log(`Numero de vocales en el string "${myString}" : ${counter}`)

// 6. Dado un array de números, usa un bucle para multiplicar todos los números y mostrar el producto
console.log("--Ejercicio 6--")
myArray = [1,3,5,7]
counter = 1

for (let valor of myArray) {
    counter *= valor
}
console.log("Resultado: ", counter)

// 7. Escribe un bucle que imprima la tabla de multiplicar del 5
console.log("--Ejercicio 7--")
let referenceValue = 5
myArray = [1,2,3,4,5,6,7,8,9,10]

for (let valor of myArray) {
    console.log(`${referenceValue} X ${valor} = ${referenceValue*valor}`)
}

// 8. Usa un bucle para invertir una cadena de texto
console.log("--Ejercicio 8--")

myString = "Ivan"
let outputString = ""

for (i = myString.length-1; i>-1; i--) {
    outputString += myString[i] 
}
console.log(`Invertir el string "${myString}": `, outputString)

// 9. Usa un bucle para generar los primeros 10 números de la secuencia de Fibonacci
console.log("--Ejercicio 9--")
let fibonnacciMax = 10
let fibonacciArray = [0,1]

i = 0
do {
    fibonacciArray.push(fibonacciArray[i+1] + fibonacciArray[i])
    i += 1
} while(fibonacciArray.length<fibonnacciMax)
console.log(`Fibonnacci hasta ${fibonnacciMax} números: `, fibonacciArray)


// 10. Dado un array de números, usa un bucle para crear un nuevo array que contenga solo los números mayores a 10
console.log("--Ejercicio 10--")
myArray = [5,6,9,10,12,15,34]
myArrayRes = []
referenceValue = 10

for (let valor of myArray) {
    if (valor > referenceValue) {
        myArrayRes.push(valor)
    }
}
console.log(`Original array: ${myArray}`)
console.log(`Only values above ${referenceValue}: ${myArrayRes}`)