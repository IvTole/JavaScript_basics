// Ejercicios Regex

// 1. Crea una RegEx que valide correos electrónicos
console.log("--Ejercicio 1--")

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
// La idea es que validar correos de las siguientes formas:
// user@domain.com, nombre.apellido@empresa.org, correo123@sub.dominio.com
// ^ comienzo de la cadena
// [^\s@]+ Uno o más caracteres que NO sean espacions (\s) ni @
// @ obligatorio para todos los correos
// [^\s@]+ Uno o más caracteres que no sean espacios ni @ (para el dominio)
// \. El punto antes de la extensión (que puede ser otro dominio o .com)
// [^\s@]+ Uno o más caracteres que no sean espacio ni @ (extensión del dominio)
// $ fin de la cadena

const emails = [
    "correo@example.com",
    "nombre.apellido@dominio.com.mx",
    "mal@correo",
    "@invalido.com",
    "correo@.com"
]

function validateEmail(email, regex) {
    return regex.test(email)
}

for (mail of emails) {
    console.log(`Correo: ${mail}, validación: ${validateEmail(mail, emailRegex)}`)
}

// 2. Crea una RegEx obtenga Hashtags de un Texto
console.log("--Ejercicio 2--")

const hashtagRegex = /#\w+/g
const text = "Hoy es un gran día para aprender #JavaScript y practicar #regex con ejemplos #útiles"

// # Tal cual el hashtag
// \w+ Uno o más caracteres alanuméricos o guión bajo, similar a [a-zA-Z0-9_]
// g global, para identificar cada uno

while ((match = hashtagRegex.exec(text)) !== null) {
    console.log(match)
}


// 3. Crea una RegEx que valide contraseñas seguras (mínimo 8 caracteres, al menos una letra y un número)
console.log("--Ejercicio 3--")

const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
// ^ inicio de la cadena
// (?=.*[A-Za-z]) Asegura que al menos haya una letraç
// (?=.*\d) Asegura que haya al menos un dígito
// [A-Za-z\d]{8,} Solo permite letras y dígitos, y debe haber mínimo 8 caracteres
// $ fin de la cadena

const passwords = [
    "abc12345",
    "12345678",
    "abcdefgh",
    "abc1",
    "abc123456",
]

function validatePassword(password, regex) {
    return regex.test(password)
}

for (password of passwords) {
    console.log(`Constraseña: ${password}, Válido: ${validatePassword(password, passwordRegex)}`)
}


// NOTA: Aplícalas utilizando diferentes operaciones