// Structures exercises

// 1. Crea un array que almacene cinco animales
let myArray = ["Perro", "Gato", "Pato", "Cerdo", "Gallina"]
console.log("myArray: ", myArray)

// 2. Añade dos más. Uno al principio y otro al final
myArray.unshift("Perico") // agrega al principio
myArray.push("Oveja") // agrega al final
console.log("Después de agregar: ", myArray)

// 3. Elimina el que se encuentra en tercera posición
const myIndex = myArray.indexOf("Pato")
if (myIndex > -1) { // solo hace splice si realmente hay algo
    myArray.splice(myIndex, 1)
}
console.log("Quitamos el indice del Pato: ", myArray)

// 4. Crea un set que almacene cinco libros
let mySet = new Set()
mySet = new Set(["Harry Potter", "Lord of the Rings", "1986", "The Godfather", "Catcher in the Rye"])
console.log("mySet: ", mySet)

// 5. Añade dos más. Uno de ellos repetido
mySet.add("Animal Farm")
mySet.add("Harry Potter")
console.log("Agregar dos libros (uno repetido): ", mySet)

// 6. Elimina uno concreto a tu elección
mySet.delete("1986")
console.log("Eliminamos el libro 1986: ", mySet)

// 7. Crea un mapa que asocie el número del mes a su nombre
let myMap = new Map()
myMap = new Map([
    ["1", "Enero"],
    ["2", "Febrero"],
    ["3", "Marzo"],
    ["4", "Abril"],
    ["5", "Mayo"],
    ["6", "Junio"],
    ["7", "Julio"],
    ["8", "Agosto"],
    ["9", "Septiembre"],
    ["10", "Octubre"],
    ["11", "Noviembre"],
    ["12", "Diciembre"]
])
console.log("myMap: ", myMap)

// 8. Comprueba si el mes número 5 existe en el map e imprime su valor
if (myMap.has("5")) {
    console.log("Si existe mes 5, con valor: ", myMap.get("5"))
} else {
    console.log("No existe mes 5")
}

// 9. Añade al mapa una clave con un array que almacene los meses de verano
let arraySummerMonths = ["Junio", "Julio", "Agosto"]

myMap.set("SummerMonths",arraySummerMonths)
console.log(myMap)

// 10. Crea un Array, transfórmalo a un Set y almacénalo en un Map
let myArray2 = ["Ivan", "Toledano", 36]
console.log("myArray2: ", myArray2)
let mySet2 = new Set(myArray2)
console.log("mySet2: ", mySet2)

let myMap2 = new Map()
// añadir clave valor
myMap2.set("Nombre", myArray2[0])
myMap2.set("Apellido", myArray2[1])
myMap2.set("Edad", myArray2[2])

console.log("myMap2: ", myMap2)