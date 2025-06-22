// Ejercicio de manejo de errores

// 1. Captura una excepción utilizando try-catch
console.log("--Ejercicio 1--")

// creamos una clase
class Client {
    
    constructor(name, email, age, country, password) {
        this.name = name
        this.email = email
        this.age = age
        this.country = country
        this.password = password
    }

}

let myClient = new Client(name="Ivan", email="toledano.ivan@gmail.com")

// Creamos una excepcion
try {
    console.log(myClient.login()) // se intenta acceder a un método no especificado
} catch {
    console.log("Se ha producido un error")
}

// 2. Captura una excepción utilizando try-catch y finally
console.log("--Ejercicio 2--")

try {
    console.log(myClient.login()) // se intenta acceder a un método no especificado
} catch {
    console.log("Se ha producido un error")
} finally {
    console.log("Se intenta hacer un login")
}

// 3. Lanza una excepción genérica
console.log("--Ejercicio 3--")

class ClientWithLogin {
    
    constructor(name, email, age, country, password) {
        this.name = name
        this.email = email
        this.age = age
        this.country = country
        this.password = password
    }

    login(password) {
        if (this.password === undefined) {
            throw new Error("No se ha generado un password")
        }
        console("Login with password: ", this.password)
    }

}

let myClientWithLogin = new ClientWithLogin(name="Ivan", email="toledano.ivan@gmail.com")
try {
    myClientWithLogin.login()
} catch (error) {
    console.log("Se ha producido un error con mensaje: ", error.message)
}

// 4. Crea una excepción personalizada
console.log("--Ejercicio 4--")

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

class ClientWithLoginCheck {
    
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
        }
        console("Login with password: ", this.password)
    }

}

// 5. Lanza una excepción personalizada
console.log("--Ejercicio 5--")

let myClientWithLoginCheck = new ClientWithLoginCheck(name="Ivan", email="toledano.ivan@gmail.com")
try {
    myClientWithLoginCheck.login()
} catch (error) {
    console.log("Se ha producido un error con mensaje: ", error.message)
    error.printStored()
}

// 6. Lanza varias excepciones según una lógica definida
console.log("--Ejercicio 6--")

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
            console.log(`Password valido, bienvenido ${this.name}`)
        }
    }
}


// 7. Captura varias excepciones en un mismo try-catch
console.log("--Ejercicio 7--")

let myClientWithLoginCheckVerification = new ClientWithLoginCheckVerification(name="Ivan",
    email="toledano.ivan@gmail.com", age=36, country="Mexico", password="1234")

try {
    myClientWithLoginCheckVerification.login(123)
    //myClientWithLoginCheckVerification.login("123")
    //myClientWithLoginCheckVerification.login("1234")
} catch (error) {
    if (error instanceof TypeError) {
        console.log("Se ha producido un error de Type: ", error.message)
    } else if (error instanceof VerificationError) {
        console.log("Se ha producido un error de Verificacion: ", error.message)
    }
}


// 8. Crea un bucle que intente transformar a float cada valor y capture y muestre los errores
console.log("--Ejercicio 8--")

myClientWithLoginCheckVerification.alive = undefined

for (key in myClientWithLoginCheckVerification) {
    try {
        Number(myClientWithLoginCheckVerification[key]) 
    } catch (error) {
        console.log(`Tenemos el siguiente error al transformar la variable ${myClientWithLoginCheckVerification[key]} a Number: `)
        console.log(error.message)
    }
}

// 9. Crea una función que verifique si un objeto tiene una propiedad específica y lance una excepción personalizada
console.log("--Ejercicio 9--")

class GeographicError extends Error {
    
    constructor(message) {
        super(message)
    }
    
    printGeographicError() {
        console.log("Este contenido no se encuentra disponible en tu región")
    }
}

class ClientWithLoginCheckVerificationGeographic {
    
    constructor(name, email, age, country, password) {
        this.name = name
        this.email = email
        this.age = age
        this.country = country
        this.password = password
    }

    content() {
        let arrayCountries = ["USA", "Mexico", "Canada"]
        if (!arrayCountries.includes(this.country)) {
            throw new GeographicError("Este contenido no se encuentra disponible en tu región")
        }
        console.log("Contenido disponible en tu región.")
    }

    login(password) {
        
        if (this.password === undefined) {
            throw new VerificationError("No se ha generado un password")
        } else if (typeof password !== "string") {
            throw new TypeError("El password tiene que ser tipo string")  
        } else if (password !== this.password) {
            throw new VerificationError("Password invalido")
        } else {
            console.log(`Password valido, bienvenido ${this.name}`)
        }
    }
}

let myClientWithLoginCheckVerificationGeographic = new ClientWithLoginCheckVerificationGeographic(name="Ivan",
    email="toledano.ivan@gmail.com", age=36, country="Cuba", password="1234")

try {
    myClientWithLoginCheckVerificationGeographic.content()
} catch (error) {
    if (error instanceof GeographicError) {
        console.log("Se encontró un error geográfico: ", error.message)
    }
}


// 10. Crea una función que realice reintentos en caso de error hasta un máximo de 10console.log("--Ejercicio 1--")
console.log("--Ejercicio 10--")

function retry(func, ntries) {
    
    for (let i=1; i<=ntries; i++) {
        try {
            func()
        } catch(error) {
            console.log("Se encontró un error geográfico: ", error.message)
        }
        console.log(`Reintento ${i}...`)
    }
}

retry(() => myClientWithLoginCheckVerificationGeographic.content(), 3)
