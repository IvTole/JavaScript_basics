// Arrays
// Estructuras de datos
// almacenar varios valores en una sola variable

let myArray = [] // se recomienda más esta sintaxis
let myArray2 = new Array()

console.log(myArray)
console.log(myArray2)

// Inicialización
// le agregamos valores
myArray= [1,2,3,4]
myArray2 = new Array(3) 
/* vemos que no se comporta igual al imprimir en consola, 
solo se está reservando un hueco en memoria esperando a ser rellenados */

console.log(myArray)
console.log(myArray2)

// otro caso
myArray= [1,2,3,4]
myArray2 = new Array(1,2,3,4) // incluso así, ahora ya se comporta como queriamos
console.log(myArray)
console.log(myArray2)

// otro caso con strings, puede guardar valores de otro tipo
myArray= [1,"Ivan",3,"Toledano"]
myArray2 = new Array("Ivan",2,"Toledano",true) // incluso así, ahora ya se comporta como queriamos
console.log(myArray)
console.log(myArray2)

// podemos llamar y reasignar valores de acuerdo a su indice
// ir añadiendo valores 
// reservamos un array de 3 espacios
// de hecho, aunque metamos mas elementos automaticamente se redimensiona
myArray2 = new Array(3)
myArray2[0] = "Ivan" 
myArray2[1] = "Toledano" 
myArray2[2] = "VanoTole" 
console.log('Array creado: ', myArray2)

// ahora que tal para el primer array
myArray = []
myArray[2] = "Ivan" // los elementos no creados los toma como vacíos
console.log("Array creado: ", myArray)

// Métodos comunes de arrays
myArray = []

// push (añadiendo elementos al final del array)
myArray.push("Ivan")
myArray.push("Toledano")
myArray.push("VanoTole")
console.log('Array creado con metodo push: ', myArray)

// pop (elimina el último elemento del array y lo devuelve)
let lastElement = myArray.pop()
console.log("Array después de método pop: ", myArray)
console.log("Ultimo elemento: ", lastElement)

// shift
// elimina el primer elemento del array y lo devuelve
let firstElement = myArray.shift()
console.log("Array después de método shift: ", myArray)
console.log("Primer elemento: ", firstElement)

// unshift
// agrega uno o más elementos al principio del array
myArray.unshift("Ivan", "VanoTole")
console.log("Array después de método unshift: ", myArray)

// length
// es una propiedad/atributo, que contiene la longitud del array
console.log("Longitud del array: ", myArray.length)

// clear
// borrar el contenido del array
// myArray = [] // inicializar a vacío
myArray.length = 0 // forma alternativa
console.log("Array después de hacer length 0: ", myArray)

// slice
// devolver una copia superficial de una porción del array
myArray = ["Ivan", "Toledano", "VanoTole", "36"]
let slicedArray = myArray.slice(1,3)
console.log("Slice del array entre 1 y 3: ", slicedArray)

// splice
// eliminar elementos haciendo slicing
// aquí si se tiene en cuenta el último indice que se le indica
myArray = ["Ivan", "Toledano", "VanoTole", "36"]
let slicedElements = myArray.splice(1,3)
console.log("Array después de hacer splice(1,3): ", myArray)
console.log("Elementos eliminados del array: ", slicedElements)
// splice tambien agrega nuevas entradas
myArray = ["Ivan", "Toledano", "VanoTole", "36"]
slicedElements = myArray.splice(1,3, "Nueva entrada")
console.log("Array después de hacer splice(1,3, 'Nueva entrada'): ", myArray)
console.log("Elementos eliminados del array: ", slicedElements)