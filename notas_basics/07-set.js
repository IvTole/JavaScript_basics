// set

// Declaracion
let mySet = new Set() // aquí si se recomienda esta sintaxis
//let mySet2 = {} Este no es un set vacio, es otro tipo de datos

// Inicializacion
mySet = new Set("Ivan", "Toledano", "VanoTole", 36, true)

console.log("El set es: ", mySet) // lo representa con llaves
// designa el numero de letras del primer elemento

// Inicializacion real
mySet = new Set(["Ivan", "Toledano", "VanoTole", 36, true])
console.log("El set es: ", mySet) // ahora si imprime los elementos correctos   

// Métodos comunes

// add
// añadir un dato al final
mySet.add("toledano.ivan@gmail.com")
console.log("El set después de método add: ", mySet)

// delete
// no borra el ultimo elemento, tenemos que indicarle cual elemento va a borrar
// pero no se indica por índice, se tiene que indicar el valor de dicho elemento
myDelete = mySet.delete("toledano.ivan@gmail.com")
console.log("El set después del método delete: ", mySet)
console.log("Lo que regresa delete: ", myDelete)
// el set no indexea como una lista, sino como un hash
// se tiene que referenciar el valor

// ejemplo de utilidad de que regrese true false en caso de eliminar la entrada
mySet = new Set(["Ivan", "Toledano", "VanoTole", 36, true])
if (mySet.delete("Ian")) {
    console.log("Se ha eliminado algo del set")
} else {
    console.log("No se ha eliminado nada del set")
}

// has
// verificar si se tiene un element
let has1 = mySet.has("Tole")
let has2 = mySet.has("Toledano")
console.log("Set contains 'Tole': ", has1)
console.log("Set contains 'Toledano': ", has2)

// size
// equivalente al lenght para arrays
// no funciona de la misma manera
console.log("Size del set: ", mySet.size)

// convertir un set a array
// se usa método from
let myArray = Array.from(mySet)
console.log("De set a array: ", myArray)

// convertir un array a set
mySet = new Set(myArray)
console.log("De array a set: ", mySet)

// El set solo permite valores únicos, no admite duplicados
// si admite elementos que cambian por algún caracter
mySet.add("Ivan")
console.log("Después de agregar 'Ivan': ", myArray)