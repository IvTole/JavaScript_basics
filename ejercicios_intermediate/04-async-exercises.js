// Ejercicios asincronía

// 1. Crea una función para saludar que reciba un nombre y un callback. 
//    El callback debe ejecutarse después de 2 segundos y mostrar en consola "Hola, [nombre]".
console.log("--Ejercicio 1--")

function greet(name, callback) {
    setTimeout(() => {
        console.log(`Hola, ${name}`)
        callback()
    }, 2000);
}

greet("Ivan", () => {
    console.log("Callback ejecutado")
})


// 2. Crea tres funciones task1(callback), task2(callback) y task3(callback). 
//    Cada función debe tardar 1 segundo en ejecutarse y luego llamar al callback.
console.log("--Ejercicio 2--")

function task1(callback) {
    setTimeout(() => {
        console.log("Task 1 completado")
        callback() // notificar a la funcion que se ha acabado
    }, 1000)
}
// Esta funcion asincrona acaba antes que la de 2 segundos

function task2(callback) {
    setTimeout(() => {
        console.log("Task 2 completado")
        callback() 
    }, 1000)
}

function task3(callback) {
    setTimeout(() => {
        console.log("Task 3 completado")
        callback()
    }, 1000)
}

task1(() => {
    task2(() => {
        task3(() => {
            console.log("Todos los task completados")
        })
    })
})

// 3. Crea una función para verificar un número que retorne una Promesa. 
//    Si el número es par, la promesa se resuelve con el mensaje "Número par". 
//    Si el número es impar, la promesa se rechaza con el mensaje "Número impar".
console.log("--Ejercicio 3--")

function verifyNumber(num) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (num % 2 === 0) {
                resolve("Número par")
            } else {
                reject("Número impar")
            }
        }, 5000);
    })
}

verifyNumber(3)
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    })


// 4. Crea tres funciones que devuelvan promesas:
//    firstTask(): tarda 1s y muestra "Primera tarea completada".
//    secondTask(): tarda 2s y muestra "Segunda tarea completada".
//    thirdTask(): tarda 1.5s y muestra "Tercera tarea completada".
console.log("--Ejercicio 4--")

function firstTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Primera tarea completada")
        }, 1000)
    })
}

function secondTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Segunda tarea completada")
        }, 2000)
    })
}

function thirdTask() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Tercera tarea completada")
        }, 1500)
    })
}

firstTask()
    .then((message) => {
        console.log(message)
        return secondTask()
    })
    .then((message) => {
        console.log(message)
        return thirdTask()
    })
    .then((message) => {
        console.log(message)
        console.log("Todas las tareas completadas")
    })


// 5. Transforma el ejercicio anterior de Promesas en una función async/await llamada executeTasks().
console.log("--Ejercicio 5--")

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function executeTasks() {
    await wait(1000)
    console.log("Primera tarea completada")
    await wait(2000)
    console.log("Segunda tarea completada")
    await wait(1500)
    console.log("Tercera tarea completada")
    console.log("Todas las tareas completadas")
}

executeTasks()

// 6. Crea una función getUser(id) que devuelva una promesa y simule una llamada a una API (que se demore 2s).
//    Si el id es menor a 5, la promesa se resuelve con { id, nombre: "Usuario " + id }.
//    Si el id es 5 o mayor, la promesa se rechaza con el mensaje "Usuario no encontrado".
//    Usa async/await para llamar a getUser(id) y maneja los errores con try/catch.
console.log("--Ejercicio 6--")

function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 5) {
                resolve({id, nombre: "Usuario " + id.toString()})
            } else {
                reject("Usuario no encontrado")
            }
        }, 2000);
    })
}

async function verifyUser(num) {
    try {
        const user = await getUser(num)
        console.log(`Usuario encontrado: ${user.nombre}`)
    } catch (error) {
        console.log("Se ha producido un error: ", error) // error es un string
    }
}

verifyUser(5)


// 7. Intenta predecir el resultado de este código antes de ejecutarlo en la consola:
//    console.log("Inicio")
//    setTimeout(() => console.log("setTimeout ejecutado"), 0)
//    Promise.resolve().then(() => console.log("Promesa resuelta"))
//    console.log("Fin")
console.log("--Ejercicio 7--")
console.log("Inicio")
setTimeout(() => console.log("setTimeout ejecutado"), 0)
Promise.resolve().then(() => console.log("Promesa resuelta"))
console.log("Fin")
// Inicio se ejecuta de inmediato
// Fin también se ejecuta de inmediato
// La microtask then se ejecuta justo después del código sincrónico
// setTimeOut se encola como macrotask, y se ejecuta después de las microtask, incluso si el tiempo es cero



// 8. Crea tres funciones que devuelvan promesas con tiempos de espera distintos.
//    A continuación, usa Promise.all() para ejecutarlas todas al mismo tiempo y mostrar "Todas las promesas resueltas" cuando terminen.
console.log("--Ejercicio 8--")

Promise.all([firstTask(), secondTask(), thirdTask()])
    .then((results) => {
        console.log("Todas las tareas resueltas")
        console.log("Resultados: ", results)
    })
    .catch(error => {
        console.log("Ocurrió un error: ", error)
    })

// 9. Crea una función waitSeconds(segundos) que use setTimeout dentro de una Promesa para esperar la cantidad de segundos indicada.
//    A continuación, usa async/await para que se espere 3 segundos antes de mostrar "Tiempo finalizado" en consola.
console.log("--Ejercicio 9--")

function waitSeconds(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Espera finalizada")
        }, segundos*1000)
    })
}

async function waitNow(segundos) {
    try {
        const waiting = await waitSeconds(segundos)
        console.log(`Tarea finalizada después de ${segundos} segundos`)
    } catch (error) {
        console.log("Se ha producido un error: ", error)
    }
}

waitNow(3)

// 10. Crea una simulación de un cajero automático usando asincronía.
//     - La función checkBalance() tarda 1s y devuelve un saldo de 500$.
//     - La función withdrawMoney(amount) tarda 2s y retira dinero si hay suficiente saldo, o devuelve un error si no hay fondos.
//     - Usa async/await para hacer que el usuario intente retirar 300$ y luego 300$ más.
//     
//     Posible salida esperada:
//     Saldo disponible: 500$
//     Retirando 300$...
//     Operación exitosa, saldo restante: 200$
//     Retirando 300$...
//     Error: Fondos insuficientes
console.log("--Ejercicio 10--")

let balance = 500 // balance inicial

function checkBalance() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log(`Tienes ${balance}$ en tu cuenta`)
            resolve(balance)
        }, 1000)
    })
}

function withdrawMoney(amount) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (amount <= balance) {
                balance -= amount
                console.log(`Se ha hecho un retiro de ${amount}$, saldo disponible: ${balance}$`)
                resolve(amount)
            } else {
                reject(`No hay fondos suficientes`)
            }
        }, 2000)
    })
}

async function asyncCheckBalance() {
    try {
        const check = await checkBalance()
    } catch (error) {
        console.log("Error: ", error)
    }
}
async function asyncWithdrawMoney(amount) {
    try {
        const withdraw = await withdrawMoney(amount)
    } catch (error) {
        console.log("Error: ", error)
    }
}

asyncCheckBalance()
asyncWithdrawMoney(300)
asyncWithdrawMoney(300)

// puede haber un error debido a que ambas operaciones withdraw se ejecutan en paralelo, y tienen que ser seriales
