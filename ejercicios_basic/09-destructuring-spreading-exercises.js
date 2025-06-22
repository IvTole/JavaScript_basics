// Ejercicios de destructuración y propagación

// 1. Usa desestructuración para extraer los dos primeros elementos de un array
console.log("--Ejercicio 1--")
let myArray1 = [1,2,3,4]

let [myValue1, myValue2] = myArray1

console.log(`Extraer los dos primeros elementos del array ${myArray1}: `)
console.log(myValue1, myValue2)

// 2. Usa desestructuración en un array y asigna un valor predeterminado a una variable
console.log("--Ejercicio 2--")

let [myValue3, myValue4, myValue5, myValue6, myValue7=1] = myArray1

console.log(`Agregar valor predeterminado al array ${myArray1}: `)
console.log(myValue3, myValue4, myValue5, myValue6, myValue7)


// 3. Usa desestructuración para extraer dos propiedades de un objeto
console.log("--Ejercicio 3--")

let person = {
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

let {name, age} = person

console.log(`Extraer los dos primeros elementos del objeto ${person}: `)
console.log(name, age)


// 4. Usa desestructuración para extraer dos propiedades de un objeto y asígnalas
//    a nuevas variables con nombres diferentes
console.log("--Ejercicio 4--")
let {name:name2, age:age2} = person

console.log(name2, age2)

// 5. Usa desestructuración para extraer dos propiedades de un objeto anidado
console.log("--Ejercicio 5--")

let {alias:myAlias, job:{exp:myExp}} = person

console.log(myAlias, myExp)

// 6. Usa propagación para combinar dos arrays en uno nuevo
console.log("--Ejercicio 6--")

let myArray2 = ["Pepe", 32]
let myArray3 = ["Pascal", 3]

let myArray4 = [...myArray2, ...myArray3]

console.log(myArray4)

// 7. Usa propagación para crear una copia de un array
console.log("--Ejercicio 7--")

let myArray5 = [ ...myArray4 ]

console.log(myArray5)

// 8. Usa propagación para combinar dos objetos en uno nuevo
console.log("--Ejercicio 8--")

let client = {
    name: "Jose",
    age: 37
} 
let adress = {
    street: "Av. Vallarta",
    number: 1423
}

let myClient = {...client, ...adress}

console.log(myClient)

// 9. Usa propagación para crear una copia de un objeto
console.log("--Ejercicio 9--")

let myClient2 = { ...myClient }

console.log(myClient2)

// 10. Combina desestructuración y propagación
console.log("--Ejercicio 10--")


let {name:nombre, age:edad, ...domicilio} = myClient2 // se propaga lo demas que resta

console.log(nombre)
console.log(edad)
console.log(domicilio)

