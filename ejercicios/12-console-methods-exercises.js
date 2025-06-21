// Métodos de console ejercicios
var colors = require('colors')

// 1. Crea un función que utilice error correctamente
console.log("--Ejercicio 1--")

class VerificationError extends Error {

    constructor(message, password) {
        super(message)
        this.password = password
    }

    printStored() {
        console.log("No password stored. Try later.")
    }

    printVerification() {
        console.log("Invalid password. Try again.")
    }

}

class GeographicError extends Error {
    
    constructor(message) {
        super(message)
    }
    
    printGeographicError() {
        console.log("Este contenido no se encuentra disponible en tu región")
    }
}

class ClientWithLoginCheckVerification {
    
    constructor(name, email, age, country, password) {
        this.name = name
        this.email = email
        this.age = age
        this.country = country
        this.password = password
    }

    

    login(password) {
        
        if (this.password === undefined) {
            throw new VerificationError("No se ha generado un password")
        } else if (typeof password !== "string") {
            throw new TypeError("El password tiene que ser tipo string")  
        } else if (password !== this.password) {
            throw new VerificationError("Password invalido")
        } else {
            console.log(`Password válido, bienvenido ${this.name}`)
        }
    }

    content() {
        let arrayCountries = ["USA", "Mexico", "Canada"]
        if (!arrayCountries.includes(this.country)) {
            throw new GeographicError("Este contenido no se encuentra disponible en tu región")
        }
        console.log("Contenido disponible en tu región.")
    }
}

let myClientWithLoginCheckVerification = new ClientWithLoginCheckVerification(name="Ivan",
    email="toledano.ivan@gmail.com", age=36, country="Mexico", password="1234")

try {
    //myClientWithLoginCheckVerification.login(123)
    myClientWithLoginCheckVerification.login("123")
    //myClientWithLoginCheckVerification.login("1234")
} catch (error) {
    if (error instanceof TypeError) {
        console.error(`Se ha producido un error de Type: ${error.message}`.red)
    } else if (error instanceof VerificationError) {
        console.error(`Se ha producido un error de Verificación: ${error.message}`.red)
    }
}

// 2. Crea una función que utilice warn correctamente
console.log("--Ejercicio 2--")

myClientWithLoginCheckVerification = new ClientWithLoginCheckVerification(name="Ivan",
    email="toledano.ivan@gmail.com", age=36, country="Cuba", password="1234")

try {
    myClientWithLoginCheckVerification.content()
} catch (error) {
    if (error instanceof GeographicError) {
        console.warn(`Se ha producido un error de Geographic: ${error.message}`.yellow)
    } else if (error instanceof VerificationError) {
        console.error(`Se ha producido un error de Verificación: ${error.message}`.red)
    }
}

// 3. Crea una función que utilice info correctamente
console.log("--Ejercicio 3--")

myClientWithLoginCheckVerification = new ClientWithLoginCheckVerification(name="Ivan",
    email="toledano.ivan@gmail.com", age=36, country="Mexico", password="1234")

try {
    //myClientWithLoginCheckVerification.login(123)
    //myClientWithLoginCheckVerification.login("123")
    myClientWithLoginCheckVerification.login("1234")
} catch (error) {
    if (error instanceof TypeError) {
        console.error(`Se ha producido un error de Type: ${error.message}`.red)
    } else if (error instanceof VerificationError) {
        console.error(`Se ha producido un error de Verificación: ${error.message}`.red)
    }

} finally {
    console.info("Recuerda siempre tener una contraseña segura".blue)
}

// 4. Utiliza table
console.log("--Ejercicio 4--")

function fill_table(obj) {
    let data = []
    for (key in obj) {
        data.push([key, obj[key]])
    }
    return data
}

let data = fill_table(myClientWithLoginCheckVerification)

console.table(data)

// 5. Utiliza group
console.log("--Ejercicio 5--")

function print_group(obj) {
    console.group("Client:")
    for (key in obj) {
        console.log(`${key}: ${obj[key]}`)
    }
    console.groupEnd
}

print_group(myClientWithLoginCheckVerification)

// 6. Utiliza time
console.log("--Ejercicio 6--")

console.time("LoginTime")
try {
    myClientWithLoginCheckVerification.login("1234")
} catch (error) {
    if (error instanceof TypeError) {
        console.error(`Se ha producido un error de Type: ${error.message}`.red)
    } else if (error instanceof VerificationError) {
        console.error(`Se ha producido un error de Verificación: ${error.message}`.red)
    }

} finally {
    console.info("Recuerda siempre tener una contraseña segura".blue)
}
console.timeEnd("LoginTime")

// 7. Valida con assert si un número es positivo
console.log("--Ejercicio 7--")

myClientWithLoginCheckVerification = new ClientWithLoginCheckVerification(name="Ivan",
    email="toledano.ivan@gmail.com", age=17, country="Mexico", password="1234")

console.assert(myClientWithLoginCheckVerification.age >= 18, "El usuario debe ser mayor de edad".grey)


// 8. Utiliza count
console.log("--Ejercicio 8--")

for (let i=0; i<10; i++) {
    console.count("Clicks")
}
console.countReset("Clicks")

// 9. Utiliza trace
console.log("--Ejercicio 9--")

function funcA() {
    funcB()
}
function funcB() {
    console.trace("Seguimiento de la ejecución")
}

console.time("LoginTime")
try {
    myClientWithLoginCheckVerification.login("1234")
} catch (error) {
    if (error instanceof TypeError) {
        console.error(`Se ha producido un error de Type: ${error.message}`.red)
    } else if (error instanceof VerificationError) {
        console.error(`Se ha producido un error de Verificación: ${error.message}`.red)
    }
} finally {
    console.info("Recuerda siempre tener una contraseña segura".blue)
}
funcA()
console.timeEnd("LoginTime")


// 10. Utiliza clear
console.log("--Ejercicio 10--")
// console.clear()