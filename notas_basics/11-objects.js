// Objetos
// todo lo que no es un tipo de datos primitivo/nativo de JS
// Un objeto es una coleccion de propiedades

// Sintaxis
// entre llaves
let person = {
    name: "Ivan",
    age: 36,
    alias: "VanoTole"
}

// Acceder a los atributos
// Notación punto
console.log("name: ", person.name)
console.log("age: ", person.age, typeof person.age)
console.log("alias: ", person.alias)

// Notación de corchetes
console.log("name: ", person["name"])
console.log("age: ", person["age"])
console.log("alias: ", person["alias"])

// Modificación de atributos
person.name = "Alejandro"
person.age = "36"
console.log("name: ", person.name)
console.log("age: ", person.age, typeof person.age)
console.log("alias: ", person.alias)

// Eliminar propiedades
delete person.age
console.log(person)

// Añadir propiedades@
person.email = "toledano.ivan@gmail.com"
person.age = 36
console.log(person)

// Métodos (funciones)
let person2 = {
    name: "Ivan",
    age: 36,
    alias: "VanoTole",
    walk : function () {
        console.log("La persona camina.")
    }
}

person2.walk()

// Anidación de objetos
 let person3 = {
    name: "Ivan",
    age: 36,
    alias: "VanoTole",
    walk : function () {
        console.log("La persona camina.")
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log("La persona trabaja.")
        }
    }
}

console.log(person3)
console.log(person3.job.name)
person3.job.work()

// similitud de un objeto de la realidad, posiblemente asociado a algo físico. Entidad

// Igualdad de objetos
let person4 = {
    name: "Ivan",
    age: 36,
    alias: "VanoTole"
}

let person5 = {
    name: "Ivan",
    age: 36,
    alias: "VanoTole"
}

console.log(person4)
console.log(person5)
console.log(person4 == person5) // da false esta comparación
console.log(person4 === person5) // da false esta comparación
// estos dos objetos tienen diferentes direcciones de memoria
// se tienen referencias a memoria
// se tienen que comparar propiedad a propiedad.
console.log(person4.name == person5.name) // Esto si da true
// podría recorrer estas propiedades

// Iteraciones
// Un objeto no es iterable
// En este caso se usa in y se accede a las claves
for (let key in person4) {
    console.log(`${key}: ${person4[key]}`) // aquí si se tienen que usar los corchetes
}

// Un poco de buenas practicas
// referencias a las propiedades que tenemos dentro con THIS
let person6 = {
    name: "Ivan",
    age: 36,
    alias: "VanoTole",
    walk : function () {
        console.log(`La persona camina.`)
    },
    job: {
        name: "Programador",
        exp: 15,
        work: function () {
            console.log(`La persona ${this.name} con años ${this.age} trabaja.`)
        }
    }
}
// solo se hacen referencias a this dentro del objeto que las llama
person6.job.work()

// Funciones como objectos
// Esto es un constructor
// Para crear multiples instancias
// NOTA: Esto realmente tendría que ser una clase
function Person(name, age) { // Debería ser una clase
    this.name = name
    this.age = age
}

let person7 = new Person("Ivan", 36)

console.log(person7)
console.log(typeof person6)
console.log(typeof person7) // tambien lo identifica como un objeto
