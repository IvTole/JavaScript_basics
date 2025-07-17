// Programación asíncrona
// JS se ejecuta en el explorador web
// Utiliza las web APIs del navegador para dotarse de capacidad asíncrona
// En un backend o un servidor con node js

// Código sincrono

console.log("Inicio")

for (let i = 0; i < 1000000000; i++) {

}

console.log("Fin")

// Event Loop (bucle de eventos)
// Revisa constantemente la pila de llamadas (call stack) y la cola de tareas (callback queue)
// Así, cuando la pila está vacía, toma la siguiente tarea de la cola para ejecutarla

// Componentes del Event Loop
// 1. Call stack (pila de ejecución)
// 2. Web APIs (APIs del navegador) o Node.js
// 3. Task Queue (Cola de tareas) y MicrotaskQueue

// Flujo del Event Loop
// El loop sigue un orden para hacer comprobaciones
// 1. Ejecutar lo que tiene en el Call Stack
// 2. Operaciones asíncronas -> delegar a Web APIs o Node.js
// 3. Operacion termina -> lo coloca en la Task Queue o Microtast Queue
// 4. Si Call Stack vacío -> Mueve tareas del Microtask Queue o Task Queue al CallStack (para poder ejecutarlas)
// 5. El proceso se repite

// Callbacks
// Una función que recibe otra función como argumento
// Fue el primer mecanismo para manejar tareas asíncronas
// De manera nativa hay un callback nativo Timeout
// Necesita la funcion que acaba ejecutandose, y cuanto tiempo va a tardar en ejecutarse

console.log("Inicio")

setTimeout(() => {
    console.log("Esto se ejecuta después de 2 segundos")
}, 2000) // callback para ejecutar de manera asíncrona el contenido de una función
// Se ejecuta hasta que hay un callback vacío

console.log("Fin")

// - Problema: Callback Hell
// Si hacemos varias tareas asíncronas que se van a encadenar, el código se vuelve complicado de manejar

function step1(callback) {
    setTimeout(() => {
        console.log("Paso 1 completado")
        callback() // notificar a la funcion que se ha acabado
    }, 1000)
}
// Esta funcion asincrona acaba antes que la de 2 segundos

function step2(callback) {
    setTimeout(() => {
        console.log("Paso 2 completado")
        callback() 
    }, 1000)
}

function step3(callback) {
    setTimeout(() => {
        console.log("Paso 3 completado")
        callback()
    }, 1000)
}

// son asincronos pero si necesitamos orden para los pasos 1, 2, 3

step1(() => {
    step2(() => {
        step3(() => {
            console.log("Todos los pasos completados")
        })
    })
})

// Promesas
// Otro mecanismo de JS, para solucionar los problemas de Callback Hell
// Se desencadena una accion asincrona, que puede o no estar disponible después

// La promesa acaba desencandenando una funcion
// Resolve no deja de ser una callback
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const ok = true
        if (ok) {
            resolve("Operacion exitosa")
        } else {
            reject("Se ha producido un error")
        }
    }, 4000) // se cambia a 4000 para que sea lo ultimo que se ejecute
})

// métodos de promesas

// then, que tengamos un resultado de esa promesa
// si sale bien se ejecuta then, si sale mal se ejecuta catch
promise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(result)
    })
    .finally(() => {
        console.log("Este bloque se ejecuta siempre")
    })

    console.log("Fin del programa") // aparece antes de todas las operaciones asíncronas

// - Encadenamiento de promesas

function step1Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 1 con promesa completado")
            resolve()
        }, 1000)
    })
}
function step2Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 2 con promesa completado")
            resolve()
        }, 1000)
    })
}
function step3Promise() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Paso 3 con promesa completado")
            resolve()
        }, 1000)
    })
}

step1Promise()
    .then(step2Promise)
    .then(step3Promise)
    .then(() => console.log("Todos los pasos con promesa han sido completados"))

// Async/Await
// Esto es más común en otros lenguajes de programación

// se crea una función que simula la espera

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function process() {

    console.log("Inicio del proceso")
    
    await wait(5000)
    console.log("Proceso después de 5 segundos")

    await wait(2000)
    console.log("Proceso después de 2 segundos")

    console.log("Fin del proceso")
}

process()