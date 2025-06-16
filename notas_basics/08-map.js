// map
// sería el equivalente a diccionarios en python, aunque con algunas diferencias
// como por ejemplo, que éste no es inmutable
// no puede haber repetidos en clave


// Declaración
let myMap = new Map()
console.log('Declaracion de map: ', myMap)

// Inicializacion
myMap = new Map([
    ["name", "Ivan"],
    ["email", "toledano.ivan@gmail.com"],
    ["age", 36]
])
console.log("Inicializacion de un map: ", myMap)

// Métodos y propiedades

// set
// para actualizar un elemento o para agregarlo
myMap.set("alias", "VanoTole") // agregamos un nuevo par clave valor
myMap.set("name", "Ivan Toledano") // actualizamos una clave valor
console.log("Despues de agregar con set: ", myMap)

// get
// recuperar el valor
let myName = myMap.get("name")
let mySurname = myMap.get("surname")
console.log("Get name: ", myName)
console.log("Get surname: ", mySurname)

// has
// comprobar si existe o no
let hasName = myMap.has("name")
let hasSurname = myMap.has("surname")
console.log("Has name: ", hasName)
console.log("Has surname: ", hasSurname)

// delete
// borra el par clave valor, por clave
myMap.delete("email")
console.log("Delete email: ", myMap)

// clear
// borrar todo el mapa
myMap.clear()
console.log("Clear map: ", myMap)

// keys
// regresa un iterador de claves
myMap = new Map([
    ["name", "Ivan"],
    ["email", "toledano.ivan@gmail.com"],
    ["age", 36]
])
console.log("Keys: ", myMap.keys())

// values
// regresa un iterador de valores
console.log("Values: ", myMap.values())

// size
console.log("Size: ", myMap.size)

// entries
// regresa todas las claves y valroes
console.log("Entries: ", myMap.entries())