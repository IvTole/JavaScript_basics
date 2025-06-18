// Ejercicios de funciones

// NOTA: Explora diferentes sintaxis de funciones para resolver los ejercicios

// 1. Crea una función que reciba dos números y devuelva su suma
console.log("--Ejercicio 1--")

function suma(a=0,b=0) {
    result = a + b
    return result
}

console.log('suma de 5 + 10', suma(5,10))

// 2. Crea una función que reciba un array de números y devuelva el mayor de ellos
console.log("--Ejercicio 2--")

let myArray = [1,2,3,4]

function maximo(array) {
    if (array.length == 0) {
        console.log("El array está vacío")
    } else{
        let maxCounter = array[0]
        for (i=1; i<array.length; i++) {
            if (array[i]>maxCounter) {
                maxCounter = array[i]
            }
        }
        return maxCounter
    }
    
}

console.log(`Maximo del array ${myArray} es: `, maximo(myArray))


// 3. Crea una función que reciba un string y devuelva el número de vocales que contiene
console.log("--Ejercicio 3--")
let myString = "Altavista"

function countVocals(str) {
    let counter = 0
    let arrayVocals = ['a', 'e', 'i', 'o', 'u']
    for (let character of str.toLowerCase()) {
        if (arrayVocals.includes(character)) {
            counter += 1
        } else {
            continue
        }
    }
    return counter
}

console.log(`Numero de vocales en el string "${myString}" : ${countVocals(myString)}`)



// 4. Crea una función que reciba un array de strings y devuelva un nuevo array con las strings en mayúsculas
console.log("--Ejercicio 4--")
myArray = ["Ivan", "Pepe", "Charlie", "Julia", "Mario", "Pascal"]

function toUpper(array) {
    if (array.length == 0) {
        console.log("El array de strings está vacío")
    } else {
        let myArrayDummy = array
        for (i=0; i<myArrayDummy.length; i++) {
            myArrayDummy[i] = myArrayDummy[i].toUpperCase()
        }
        return myArrayDummy
    }
    
}
console.log(myArray)
console.log(toUpper(myArray))

// 5. Crea una función que reciba un número y devuelva true si es primo, y false en caso contrario
console.log("--Ejercicio 5--")
let myNumber = 12

function isPrime(number) {
    if (number == 1 || number == 0) {
        return false // ni 0 ni 1 son números primos
    } else {
        for (let i=2, s=number**(0.5); i<=s; i++) { // itera hasta la raiz del valor
            if (number%i==0) {
                return false
            } 
        }
        return true
    }
}

console.log(`El número ${myNumber} es primo: ${isPrime(myNumber)}`)

// 6. Crea una función que reciba dos arrays y devuelva un nuevo array que contenga los elementos comunes entre ambos
console.log("--Ejercicio 5--")
let myArray1 = [1,"Pepe",3,4,] 
let myArray2 = [4,5,6,"Pepe"]

function commonElements(array1, array2) {
    let commonArray = []
    let set1 = new Set(array1)
    let set2 = new Set(array2) // Un set no contiene duplicados

    for (valor1 of set1) {
        for (valor2 of set2) {
            if (valor1 === valor2) {// operador identidad tipo/valor
                commonArray.push(valor1)
            }
        }
    }
    return commonArray
}

console.log(`Elementos en comun de ${myArray1} y ${myArray2} son: ${commonElements(myArray1,myArray2)}`)

// 7. Crea una función que reciba un array de números y devuelva la suma de todos los números pares
console.log("--Ejercicio 6--")
myArray = [1,2,3,4,6]

function isEven(number) {
    if (number%2 == 0) {
        return true
    } else {
        return false
    }
}

function sumEven(array) {
    let counter = 0.0
    for (valor of array) { // of para numeros, in para strings
        if (isEven(valor)) {
            counter += valor
        }
    }
    return counter
}

console.log(`La suma de pares del array ${myArray} es: ${sumEven(myArray)}`)

// 8. Crea una función que reciba un array de números y devuelva un nuevo array con cada número elevado al cuadrado
console.log("--Ejercicio 7--")
myArray = [1,2,3,4,6]

function mulArray(array) {
    let resArray = []
    for (valor of array) {
        resArray.push(valor**2.0)
    }
    return resArray
}

console.log(`Cuandrado del array ${myArray}: `, mulArray(myArray))

// 9. Crea una función que reciba una cadena de texto y devuelva la misma cadena con las palabras en orden inverso
console.log("--Ejercicio 9--")
myString = "Altavista"

function invertString(str) {
    let outputString = ""
    for (i=str.length-1; i>-1; i--) {
        outputString += str[i]
    }
    return outputString
}

console.log(`Invertir el string "${myString}": `, invertString(myString))


// 10. Crea una función que calcule el factorial de un número dado
console.log("--Ejercicio 10--")

myNumber = 6

function doFactorial(number) {
    let counter = 1
    for (i=number; i>=2; i--) {
        counter *= i
    }
    return counter
}

console.log(`El factorial de ${myNumber}: `, doFactorial(myNumber))