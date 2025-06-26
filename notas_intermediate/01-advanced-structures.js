// Estructuras avanzadas
// Array, lista, set, mapa

// Arrays avanzados
// - Métodos funcionales

// forEach
// Para ejecutar una función por cada elemento del array
let numbers = [1,2,3,4,5,6]

numbers.forEach(function (value) {
    console.log(value)
})

numbers.forEach(element => console.log(element))

// map
// crear un nuevo array pero aplicando una función a cada uno de los elementos del array
let arrayDoubled = numbers.map(element => element * 2) // que todos los elementos se multipliquen por ds
console.log(arrayDoubled)

// filter
// En este caso, se filtran elementos siguiendo esa misma condicion del map
let arrayEvens = numbers.filter(element => element % 2 === 0)
console.log(arrayEvens)

// reduce
// funcion reductora sobre cada uno de los elementos del array
// Lo que retorna es sólo un número
// util para sumas, combinaciones, etc
// los argumentos son valor previo, actual, y luego un acumulador inicial
let arraySum = numbers.reduce((previous, current) => previous + current, 0) // revisar documentacion
console.log(arraySum) // se imprime la suma de todos los elementos del array

// -Manipulación

// flat
let arrayNested = [1,[2,[3,[4]]]]
let arrayFlat = arrayNested.flat(1) // tenemos que definir la profundidad
console.log(arrayFlat)
arrayFlat = arrayNested.flat(3)
console.log(arrayFlat)

// flatMap
// aplana también pero también siguiendo un criterio de aplanamiento
// no es solo eliminar niveles
// flat por un lado y map por otro lado
let phrases = ["Hello World", "Bye World"]
let words = phrases.flatMap(phrase => phrase.split(" "))
console.log(words)

// -Ordenación

// sort
let unsorted = ["b", "a", "d", "c"]
let sorted = unsorted.sort() // es necesario poner el criterio de ordenación, por defecto lo hace en orden alfabetico
console.log(sorted)

unsorted = [3,4,1,6,10]
sorted = unsorted.sort((a,b) => a - b) // el último argumento es el criterio es el resultado de operar estos dos numeros para saber cual es el menor
console.log(sorted)

// reverse
sorted.reverse() // cuidado, aquí regresa el mismo array modificado
console.log(sorted)

// -Búsqueda

// includes
console.log(sorted.includes(4))
console.log(sorted.includes(5))

// find
// encuentra el primer elemento según una condición

// el primer elemento que sea par
console.log(sorted.find(element => element % 2 === 0)) // regresa el primer valor que se encuentre

// findIndex
// es un find pero aplicado a un índice
console.log(sorted.findIndex(element => element % 2 === 0)) // regresa el índice 0
console.log(sorted.findIndex(element => element === 2)) // no hay ningún 2 y regresa índice -1

// Sets avanzados
// Recordar que un set nos ayudaba a no admitir valores repetidos
// Ayuda a trabajar con conjuntos

// -Operaciones
let arrayNumbers = [1,2,2,3,4,5,6,6]
console.log(arrayNumbers)
let setNumbers = new Set(arrayNumbers)
console.log(setNumbers)

// pero que tal si lo que yo quiero es quitarle los repetidos al array original y quedarme con un array
// Eliminación de duplicados
arrayNumbers = [1,2,2,3,4,5,6,6]
let arrayNumbersUnique = [...new Set(arrayNumbers)]
console.log(arrayNumbersUnique)

// Unión
const setA = new Set([1,2,3])
const setB = new Set([2,3,4,5])
const union = new Set([...setA, ...setB]) // resulta en un nuevo set con la union sin duplicados
console.log(union)

// Intersección
const intersection = new Set([...setA].filter(element => setB.has(element)))
console.log(intersection)

// Diferencia
// Los elementos que estan en un set pero no están en el otro
const difference = new Set([...setA].filter(element => !setB.has(element)))
console.log(difference)

// Conversión de set a array
console.log([...setA])

// Iteraración sobre sets
setA.forEach(element => console.log(element))
// las otras iteraciones son propias de los arrays, así que hay que aplicarlas sobre éstos

// Maps avanzados
let myMap = new Map([
    ["name", "VanoTole"],
    ["age", 37]
])
console.log(myMap)

// iteración sobre mapas
myMap.forEach((value, key) => console.log(`${key}: ${value}`)) // aqui hay que acceder a la clave y al valor

// conversión de mapa a otros objetos
const arrayFromMap = Array.from(myMap)
console.log(arrayFromMap)

// conversión de mapa a un diccionario

const objectFromMap = Object.fromEntries(myMap)
console.log(objectFromMap)

// conversión de objeto a mapa
const mapFromObject = new Map(Object.entries(objectFromMap))
console.log(mapFromObject)