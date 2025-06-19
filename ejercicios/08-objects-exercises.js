// Objetos Ejercicios

// 1. Crea un objeto con 3 propiedades
console.log("--Ejercicio 1--")

let client = {
    name: "José",
    age: 32,
    email: "pepe@gmail.com"
}

console.log(`Objeto cliente: `, client)

// 2. Accede y muestra su valor
console.log("--Ejercicio 2--")

for (key in client) {
    console.log(`${key}: ${client[key]}`)
}

// 3. Agrega una nueva propiedad
console.log("--Ejercicio 3--")

client.days = 230

console.log(`Objeto cliente con days: `, client)

// 4. Elimina una de las 3 primeras propiedades
console.log("--Ejercicio 4--")

delete client.email

console.log(`Objeto cliente sin email: `, client)

// 5. Agrega una función e invócala
console.log("--Ejercicio 5--")

let client2 = {
    name: "José",
    age: 32,
    email: "pepe@gmail.com",
    days: 230,
    active: function () {
        console.log("El cliente se encuentra activo")
    }
}

console.log(`Función activo: `)
client2.active()

// 6. Itera las propiedades del objeto
console.log("--Ejercicio 6--")

for (key in client2) {
    console.log(`${key}: ${client2[key]}`)
}

// 7. Crea un objeto anidado
console.log("--Ejercicio 7--")

let client3 = {
    name: "José",
    age: 32,
    email: "pepe@gmail.com",
    days: 230,
    active: function () {
        console.log("El cliente se encuentra activo")
    },
    adress: {
        street: "Av. Vallarta",
        number: 1243,
        city: "Guadalajara",
        state: "Jalisco"
    }
}

console.log(`Nuevo cliente: `)
console.log(client3)


// 8. Accede y muestra el valor de las propiedades anidadas
console.log("--Ejercicio 8--")

for (key in client3.adress) {
    console.log(`${key}: ${client3.adress[key]}`)
}

// 9. Comprueba si los dos objetos creados son iguales
console.log("--Ejercicio 9--")

let client4 = {
    name: "José",
    age: 32,
    email: "pepe@gmail.com",
    days: 230,
    active: function () {
        console.log("El cliente se encuentra activo")
    },
    adress: {
        street: "Av. Vallarta",
        number: 1243,
        city: "Guadalajara",
        state: "Jalisco"
    }
}

let client5 = {
    name: "José",
    age: 32,
    email: "pepe@gmail.com",
    days: 230,
    active: function () {
        console.log("El cliente se encuentra activo")
    },
    adress: {
        street: "Av. Vallarta",
        number: 1243,
        city: "Guadalajara",
        state: "Jalisco"
    }
}

console.log(`Comprobamos si dos clientes son iguales: `, client4 === client5)

// 10. Comprueba si dos propiedades diferentes son iguales
console.log("--Ejercicio 9--")

console.log(`Comprobamos si dos nombres son iguales: `, client.name === client5.name)
