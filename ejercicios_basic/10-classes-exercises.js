// Ejercicios de clases

// 1. Crea una clase que reciba dos propiedades
console.log("--Ejercicio 1--")

class Client {

    constructor(name, email) {
        this.name = name
        this.email = email
    }
}

let myClient = new Client(name="Ivan", email="toledano.ivan@gmail.com")
console.log(myClient)

// 2. Añade un método a la clase que utilice las propiedades
console.log("--Ejercicio 2--")

class Client2 {

    constructor(name, email) {
        this.name = name
        this.email = email
    }

    send() {
        console.log(`Se ha enviado un correo a ${this.email}`)
    }
}


// 3. Muestra los valores de las propiedades e invoca a la función
console.log("--Ejercicio 3--")

let myClient2 = new Client2(name="Ivan", email="toledano.ivan@gmail.com")

for (key in myClient2) {
    console.log(`${key}: ${myClient2[key]}`)
}
myClient2.send()

// 4. Añade un método estático a la primera clase
console.log("--Ejercicio 4--")

class Client3 {

    constructor(name, email) {
        this.name = name
        this.email = email
    }

    send() {
        console.log(`Se ha enviado un correo a ${this.email}`)
    }

    static login() {
        console.log(`Se hace login a la cuenta`)
    }
}

// 5. Haz uso del método estático
console.log("--Ejecicio 5--")

Client3.login()

// 6. Crea una clase que haga uso de herencia
console.log("--Ejercicio 6--")

class ClientWithAddress3 extends Client3 {

    constructor(name, email, street, number, city, country) {
        super(name, email)
        this.street = street
        this.number = number
        this.city = city
        this.country = country
    }
}

let myClient3 = new ClientWithAddress3(name="Ivan",
    email="toledano.ivan@gmail.com",
    street = "Av Vallarta",
    number = 123,
    city = "Guadalajara",
    country = "Mexico"
)

console.log(myClient3)

// 7. Crea una clase que haga uso de getters y setters
console.log("--Ejercicio 7--")
class ClientWithBank extends ClientWithAddress3 {

    #bank
    constructor(name, email, street, number, city, country, bank) {
        super(name, email, street, number, city, country)
        this.#bank = bank
    }

    get bank() {
        return this.#bank
    }

    set bank(newBank) {
        this.#bank = newBank 
    }

}

// 8. Modifica la clase con getters y setters para que use propiedades privadas
console.log("--Ejercicio 8--")
// ya se hizo en el ejercicio anterior

// 9. Utiliza los get y set y muestra sus valores
console.log("--Ejercicio 9--")

let myClientWithBank = new ClientWithBank(name="Ivan",
    email="toledano.ivan@gmail.com",
    street = "Av Vallarta",
    number = 123,
    city = "Guadalajara",
    country = "Mexico",
    bank = "IBAN3534"
)

console.log(myClientWithBank.bank)
myClientWithBank.bank = "IBANnew"
console.log(myClientWithBank.bank)

// 10. Sobrescribe un método de una clase que utilice herencia 

class ClientWithBank2 extends ClientWithAddress3 {

    #bank
    constructor(name, email, street, number, city, country, bank) {
        super(name, email, street, number, city, country)
        this.#bank = bank
    }

    get bank() {
        return this.#bank
    }

    set bank(newBank) {
        this.#bank = newBank 
    }

    send() {
        console.log(`Se ha enviado un correo a ${this.email} con bank ${this.bank}`)
    }

}

let myClientWithBank2 = new ClientWithBank2(name="Ivan",
    email="toledano.ivan@gmail.com",
    street = "Av Vallarta",
    number = 123,
    city = "Guadalajara",
    country = "Mexico",
    bank = "IBAN3534"
)

myClientWithBank2.send()