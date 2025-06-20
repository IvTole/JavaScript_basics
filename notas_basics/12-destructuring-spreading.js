// Destructuración y propagación

let myArray = [1,2,3,4]

let person = {
    name: "Ivan",
    age: 36,
    alias: "VanoTole"
}

let myValue = myArray[1]
console.log(myValue)

let myName = person.name
console.log(myName)

// Destructuración
// Sintaxis que permite extraer valores de arrays u objetos y asignarlos a variables

// sintaxis en arrays
let [myValue0, myValue1, myValue2, myValue3, myValue4] = myArray // guardo los primeros valores

console.log(myValue0, myValue1, myValue2, myValue3, myValue4)

// sintaxis arrays con valores predeterminados

// variables ya declaradas no puedo predeterminarlas
//[myValue0 = 0, myValue1, myValue2, myValue3, myValue4] = myArray

// tienen que ser creadas desde cero
// la ultima ya no muestra undefined
// solo son valores por defecto, si ya estaban declarados así se quedan
let [myValue5, myValue6, myValue7, myValue8, myValue9=0] = myArray

console.log(myValue5 , myValue6, myValue7, myValue8, myValue9)

// ignorar elementos del array
let [myValue10, , , , myValue14=0] = myArray

console.log(myValue10, myValue14)

// sintaxis de objetos

// la sintaxis de array no funciona
//let [name, age, alias] = person
// se tiene que usar las llaves para objetos
let {name, age, alias} = person

console.log(name, age, alias)

// sintaxis objetos con valores predeterminados

// tampoco sirve la sintaxis como si fuera array, salen undefined
let {name2, age2, alias2, email2 = "toledano.ivan@gmail.com"} = person
// los nombres tienen que coincidir, es el nombre que tenga la clave

console.log(name2, age2, alias2, email2)

// sintaxis objetos con nuevos nombres de variables
let {name:name3, age:age3, alias:alias3, email3 = "toledano.ivan@gmail.com"} = person

console.log(name3, age3, alias3, email3)

// destructuración con objetos anidados
// se puede desestructurar a diferentes niveles
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

let {name:name4, job:{name:jobName}} = person3

console.log(name4, jobName)

// Propagación o spreading
// Este operador (...) permite expandir elementos de un array u objeto a otro array u objeto
let myArray2 = [...myArray] // esto también se usa para hacer copias, y no referencias

console.log(myArray2)

// propagar los valores junto a otros valores
let myArray3 = [...myArray, 5, 6]

console.log(myArray3)

// Combinación de arrays
let myArray4 = [...myArray2, ...myArray3]

console.log(myArray4)

// Sintaxis de propagacion para objetos
let person4 = {...person, email:"toledano.ivan@gmail.com"}

console.log(person4)

// Copia de objetos
let person5 = { ...person }

console.log(person5)