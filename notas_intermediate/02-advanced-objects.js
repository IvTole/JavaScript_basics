// Objetos avanzados

// -Prototipos y Herencia

// Prototipos
// Ya no es tan habitual utilzar esto, antes eran importantes en js
// Los objetos puede heredar propiedades de otro objeto

let person = {
    name: "Ivan",
    age: 36,
    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}
console.log(person.__proto__)
// El prototipo es la base de propiedades, metodos, funciones

console.log(Object.getPrototypeOf(person))

// Le agregamos una funcion, o propiedad, método
person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}

console.log(person)
person.sayAge() // Vemos que sí tenemos acceso a crear una nueva función, accediendo a person

// Herencia 
// la base del proximo objeto es person

let programmer = Object.create(person)

person.name = "VanoTole"

programmer.language = "JavaScript"

console.log(programmer) // tengo algo vacío
console.log(programmer.name)
console.log(programmer.age)
console.log(person.language) // person no tiene lenguaje
programmer.greet() // pero sí tengo acceso a las propiedades
programmer.sayAge()
console.log(programmer.__proto__) // vemos que ahora el prototipo no está nulo, pero no estás accediendo a él
// Esta es una forma vieja de trabajar con herencias, prototipos

// Métodos estáticos y de instancia
// Los que definen en el prototipo de un objeto
// Al principio de JS no tenían clases
// Lo hacían con funciones

function Person(name, age) {
    this.name = name
    this.age = age
}
Person.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

let new_person = new Person("Ivan", 36)

console.log(Person.prototype)

console.log(new_person.__proto__)

// para que se comporte como un método estático, método de instancia
//new_person.greet() // no tiene acceso a la funcion de una funcion

// se agrega al prototype
Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

new_person.greet()

// En la especificación 6 se introducen clases
// Al final el objetivo era crear una entidad, clases mas legibles y mas fáciles de usar

// Métodos avanzados

// assign
// sirve para copiar las propiedades de uno o más objetos en un objeto destino
let person_core = {name:"Ivan"}
let person_details = {age:36, alias:"VanoTole"}

let fullPerson = Object.assign(person_core, person_details)
console.log(fullPerson) // tiene las tres propiedades

// keys, values, entries
//permiten obtener claves, valores, y pares clave-valor

console.log(Object.keys(fullPerson))
console.log(Object.values(fullPerson))
console.log(Object.entries(fullPerson)) // una lista de listas de pares clave-valor

