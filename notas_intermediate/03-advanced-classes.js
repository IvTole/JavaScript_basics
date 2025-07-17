// Clases avanzadas

class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }

    greet() {
        console.log(`Hola, soy ${this.name}`)
    }
}

//accedo a una instancia de esta persona
const person = new Person("Ivan",37)
person.greet()
console.log(person) // es una clase

// añadimos nueva funcion
person.sayAge = function () {
    console.log(`Tengo ${this.age} años`)
}
person.sayAge()

// Abstracción
// Clases abstractas, con herencia
// Una clase abstracta que no se puede instanciar directamente, solo de cara a utilizar sus funciones y propiedades base
// Crear otras clases que la estén especializando

//establecer la estructura de todos los animales
// new es para construir abstracción
class Animal {
    constructor(name) {
        if (new.target === Animal) {
            throw new Error("No se puede instanciar una clase abstracta")
        }
        this.name = name
    }

    makeSound() {
        throw new Error("Este método tiene que ser implementado por la subclase")
    }
}

//const animal = new Animal(name="Vano") // marca error porque lo intenta instanciar como Animal, que es abstracta 
//console.log(animal) // sí se puede instanciar, no es abstracta

// Polimorfismo
//Es una capacidad de las clases derivadas de una misma base abstracta
// implementar métodos con un mismo nombre pero con comportamientos diferentes

class Cat extends Animal {

    makeSound() {
        console.log("Miau!")
    }

}

class Dog extends Animal {

    makeSound() {
        console.log("Guau!")
    }

}

const cat = new Cat("VanoCat") // ahora sí estas son nuevas instancias, no marca error, y su constructor hereda una caracteristica name
const dog = new Dog("VanoDog")

console.log(cat)
console.log(dog)

cat.makeSound() // este método tiene que ser implementado por la subclase, si no marcaría error
dog.makeSound()

// Mixins
// Composición sobre la herencia
// No se suele ver en otros lenguajes
// JS tiene un tipado débil
// Es una técnica en JS para compartir funcionalidad en varias clases sin tener que usar la herencia
const FlyMixin =  { //capacidad de volar de un animal, es una especie de entidad
    fly() {
        console.log(`${this.name} está volando`)
    }
}

class Bird extends Animal {

}

class Dragon extends Animal {
    
}

Object.assign(Bird.prototype, FlyMixin) // los objetos como tal ya son prototipos
Object.assign(Dragon.prototype, FlyMixin)

const bird = new Bird("VanoBird")
const dragon = new Dragon("VanoDragon")

console.log(bird.name)
console.log(dragon.name)

bird.fly() // y la funcion fly puede acceder al name
dragon.fly()

// Patrones de diseño
// Partrón Singleton
// Son convecciones que podemos seguir para resolver problemas comunes
// Singleton -- asegurarse que solo se pueda instanciar una vez
// Por ejemplo, un login

class Session {

    constructor(name) {
        if(Session.instance) {
            return Session.instance
        }
        this.name = name
        Session.instance = this // hasta ahora se ejecuta la instancia
    }

}

const session1 = new Session("Ivan Toledano")
console.log(session1)

// accedemos desde otro sitio, otra sesion
const session2 = new Session() // no incluye nombre
console.log(session2) // pero aun asi te imprime el nombre, nos estamos asegurando que solo exista una instancia

console.log(session1 === session2) // el problema viene que se queda con la misma intancia
// no se reinicia al momento de instanciar otra

// Symbol
// Es un tipo de dato nativo, introducido en especificación 6
// Inmutable
// Para evitar colisiones con nombres de propiedades de objetos

const ID = Symbol("id") // 

class User {

    constructor(name) {
        this.name = name
        this[ID] = Math.random() // dentro de la instancia existe una propiedad como referencia a este symbol ID, como identificador único
    }

    getId() {
        return this[ID]
    }

}
// ID es una propiedad semi privada

const user = new User("Ivan")
console.log(user.name)
console.log(user.ID) // esto marca undefined
console.log(user[ID]) // así si puedo acceder a esta propiedad

//user[ID] = 12345 // y hasta también se podría redefinir
//console.log(user[ID])

// antes de 2020, symbol servía para hacer propiedades semi privadas en lugar de #, también porque es inmutable

user.getId()

// instanceof
// realizar comprobaciones de instancia

class Car {

}

const car = new Car()

console.log(car instanceof Car)

// create

const anotherCar = Object.create(Car.prototype)

console.log(anotherCar instanceof Car) // otra forma de crear un coche en base al prototipo

// proxy
// mecanismo dentro de las clases
// Para interceptar y personalizar el comportamiento de estas clases
// para seguridad o validaciones, por ejemplo

const proxy = {
    get(target, property) {
        console.log(`Se accede a la propiedad ${property}`)
        return target[property]
    },
    set(target, property, value) {
        if (property === "balance" && value < 0) {
            throw new Error("El saldo no puede ser negativo")
        }
        target[property] = value
    }
}

class BankAccount {
    constructor(balance) {
        this.balance = balance
    }
}

const account = new Proxy(new BankAccount(100), proxy) // segundo argumento proxy handler
console.log(account.balance)
// cada vez que se quiera acceder al balance, que mande una notificacion o algo
// en este caso, cada que quiera hacer una operacion de get, pues imprime get
// el proxy también tiene que tener acceso a la propiedad, para que no regrese undefined

account.balance = 50
console.log(account.balance)