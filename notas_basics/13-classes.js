// Clases
// Crear plantillas de objetos, juntos con sus métodos, sin definir valores particulares
// Introducida hasta ESMA ES6

// Inicializacion
class Person {

    constructor(name, age, alias) { // funcion o metodo especial que nos permite definir propiedades iniciales
        this.name = name // this se refiere a la instancia
        this.age = age
        this.alias = alias
    } 
}

// Sintaxis
let person = new Person(name="Ivan", age=36, alias="VanoTole")

console.log(person)
console.log(typeof person) // marca objeto

// Valores por defecto
class defaultPerson {

    constructor(name='Default', age=0, alias='Sin alias') { // funcion o metodo especial que nos permite definir propiedades iniciales
        this.name = name // this se refiere a la instancia
        this.age = age
        this.alias = alias
    } 
}

// let person2 = new defaultPerson(alias="VanoTole") // los argumentos entran en orden
let person2 = new defaultPerson("Ivan", 36, "VanoTole")
console.log(person2)

// Acceso a propiedades
console.log(person2.alias)
console.log(person2["alias"])

// Reasignar atributos
person2.alias = "Vano"
console.log(person2)

// Funciones en clases
class PersonWithMethod {

    constructor(name='Default', age=0, alias='Sin alias') { // funcion o metodo especial que nos permite definir propiedades iniciales
        this.name = name // this se refiere a la instancia
        this.age = age
        this.alias = alias
    }
    
    walk() {
        console.log("La persona camina.")
    }
}

let person3 = new PersonWithMethod("Ivan", 36, "VanoTole")

person3.walk()

// Propiedades privadas
// Util para que no se vean propiedades (para no poder modificarlas)
class PrivatePerson {

    #bank

    constructor(name, age, alias, bank) {
        this.name = name
        this.age = age
        this.alias = alias
        this.#bank = bank
    }

}

let person4 = new PrivatePerson("Ivan", 36, "VanoTole", "IBAN129084")
console.log(person4.bank) // la propiedad bank es privada y marca undefined
// solo dentro de la clase podemos acceder a esta propiedad

person4.bank = "fdasñlidfas12"

console.log(person4) // ha creado una propiedad pública, un nuevo bank


// Getters y Setters

class GetSetPerson {

    #name
    #age
    #alias
    #bank

    constructor(name, age, alias, bank) { 
        this.#name = name 
        this.#age = age
        this.#alias = alias
        this.#bank = bank
    } 

    get name() {
        return this.#name // funcion que me retorna el valor de name, aunque sea privado
    }

    set bank(newBank) {
        this.#bank = newBank 
    }

    get bank() {
        return this.#bank // solo para ver si funciona el set
    }
}

let person5 = new GetSetPerson("Ivan", 36, "VanoTole", "IBAN312423")
console.log(person5) // no imprime nada pues todo es privado
console.log(person5.name) // esta propiedad es de lectura pero no de escritura
person5.bank = "new IBAN1235"
console.log(person5.bank) // si se ve el nuevo bank

// Herencia de clases
class Animal {

    constructor(name) {
        this.name = name
    }

    sound() {
        console.log("Emite un sonido genérico")
    }
}

class Dog extends Animal {

    sound() {
        console.log("Guau")
    }

    run() { // funcion adicional de un perro
        console.log("El perro corre")
    }
}

class Fish extends Animal {

    constructor(name, size) {
        super(name) // super hace una llamada a superclase
        this.size = size
    }

    swim() {
       console.log("El pez nada") 
    }
}

let myDog = new Dog("Scooby") // Dog necesita un nombre porque es un atributo de la clase parent
myDog.run()
myDog.sound() // sobreescribe la superclase

let myFish = new Fish("Nemo", size=12)
myFish.swim()
myFish.sound()

// Métodos estáticos
// No necesitamos instanciar la clase para acceder al método
class MathOperations {

    static sum(a,b) {
        return a+b
    }
}

//let myClass = new MathOperations()
// console.log(myClass.sum(5,10))

console.log(MathOperations.sum(5,10)) // no necitamos crear una intancia para esta clase