// Ejercicios de objetos y clases avanzadas

// 1. Agregega una función al prototipo de un objeto
console.log("--Ejercicio 1--")

// Creamos funcion de referencia
function Person(name, age) {
    this.name = name
    this.age = age
}

// Se agrega método estatico, solo disponible en Person, pero no sus instancias
Person.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

console.log(Person.__proto__)

// Se instancia
let new_person = new Person("Ivan", 36)

console.log(new_person.__proto__)

// se agrega funcion al prototipo directamente
Person.prototype.greet = function () {
    console.log(`Hola, soy ${this.name}`)
}

new_person.greet()
console.log(new_person.__proto__) // el prototipo ya no está vacío

console.log(new_person.__proto__ === Person.prototype) // confirma que el __proto__ de la instancia es el mismo objeto que Person.prototype

// 2. Crea un objeto que herede de otro
console.log("--Ejercicio 2--")

// Vamos a crear un objeto ObjectClient que herede las caracteristicas de ObjectPerson
let ObjectPerson = {
    name: "Ivan",
    age: 36,
    greet() {
        console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`)
    }
}

let ObjectClient = Object.create(ObjectPerson)

ObjectClient.email = "toledano.ivan@gmail.com"
ObjectClient.phone = "+525536790341"

ObjectClient.greet()
console.log(ObjectClient.email)
console.log(ObjectClient.__proto__)

// 3. Define un método de instancia en un objeto
console.log("--Ejercicio 3--")

function Animal(name) {
    this.name = name
}

Animal.prototype.makeSound = function () {
    console.log(`El ${this.name} está haciendo un sonido:`)
}

let new_animal = new Animal("Perro")

console.log(Animal.prototype)
new_animal.makeSound()


// 4. Haz uso de get y set en un objeto
console.log("--Ejercicio 4--")

const ObjectPersonDetails = {
    first_name:"Ivan",
    last_name:"Toledano",
    age:36,
    email:"toledano.ivan@gmail.com",
    language:"Spanish",
    country:"Mexico",
    
    get fullName() {
        console.log(`${this.first_name} ${this.last_name}`)
    },
    set fullName(value) {
        const parts = value.split(" ")
        this.first_name = parts[0]
        this.last_name = parts[1]
    }
}

ObjectPersonDetails.fullName // Getter
ObjectPersonDetails.fullName = "Alejandro Juárez" // Setter
ObjectPersonDetails.fullName

// 5. Utiliza la operación assign en un objeto
console.log("--Ejercicio 5--")

let person_address = {street: "Avenida Vallarta", number:123}

// crear una copia nueva del objeto combinado
let full_person = Object.assign({}, ObjectPersonDetails, person_address)

console.log(full_person)


// 6. Crea una clase abstracta
console.log("--Ejercicio 6--")

class Book {
    constructor(name, isbn) {
        if (new.target === Book) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
        this.isbn = isbn 
    }

    sayISBN() {
        throw new Error("Este método tiene que ser implementado por la sublase")
    }
}


// 7. Utiliza polimorfismo en dos clases diferentes
console.log("--Ejercicio 7--")

class Novel extends Book {
    constructor(name, isbn, genre) {
        super(name, isbn)
        this.genre = genre
    }

    sayISBN() {
        console.log(`El ISBN de la novela ${this.name} es ${this.isbn}`)
    }
}

const novel = new Novel("Cien años de soledad", "978-3-16-148410-0")
novel.sayISBN()

// 8. Implementa un Mixin
console.log("--Ejercicio 8--")

const isPhysical = {
    state() {
        console.log(`El libro ${this.name} está disponible en formato físico.`)
    }
}
const isDigital = {
    state() {
        console.log(`El libro ${this.name} está disponible en formato digital.`)
    }
}

class pNovel extends Novel {

}
class eNovel extends Novel {

}

Object.assign(pNovel.prototype, isPhysical)
Object.assign(eNovel.prototype, isDigital)

const new_enovel = new eNovel("Superman 1")
const new_pnovel = new pNovel("Superman Bio")

new_enovel.state()
new_pnovel.state()

// 9. Crea un Singleton
console.log("--Ejercicio 9--")

class Login {
    constructor(email) {
        if(Login.instance) {
            return Login.instance
        }
        this.email = email
        Login.instance = this
    }
}

const login1 = new Login("toledano.ivan@gmail.com")
console.log(login1)
const login2 = new Login("toledano.ivan77@gmail.com")
console.log(login2)
console.log(login2 === login1)


// 10. Desarrolla un Proxy
console.log("--Ejercicio 10--")



const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "age" && value < 18) {
            throw new Error("No puede haber usuarios menores de edad.")
        }
        target[property] = value
    }
}

class User {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
}

const new_user = new Proxy(new User("Ivan", 36), proxy)

console.log(new_user.age)

try {
    new_user.age = 17
} catch (e) {
    console.warn(e.message)
}