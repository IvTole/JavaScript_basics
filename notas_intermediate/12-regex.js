// Regex, regular expressions
// Complejo, un patrón de búsqueda de texto, encontrar, validar, caracteres
// Sigue un estándar que permite generar un patrón de busqueda que podemos aplicar a los textos

// - Sintaxis
// Por convenio, va entre barras

const regex = /abc/
const regex2 = RegExp("abc")
const text = "Hola abc JavaScript"

// operacion test, hace una búsqueda y devuelve true/false si funciona
console.log(regex.test(text)) 
console.log(regex2.test(text))

const text2 = "Mi edad es 36"
const regex3 = /\d/ // busca cualquier dígito, + -> si lo encuentra uno o más veces
const regex4 = /[0-2]/ // un rango de dígitos
console.log(regex3.test(text2))
console.log(regex4.test(text2))


// Checar documentación
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions


// replace
// reemplaza el texto que coincide con el patrón

const regex5 = /JavaScript/
console.log("Hola JavaScript".replace("JavaScript", "JS"))
console.log("Hola JavaScript".replace(regex5, "JS"))
console.log("Estoy contando 1 2 3 4 5 6 7".replace(regex3,"[numero]")) // reemplaza el primera que cumple el regex

const regex6 = /\d/g // global, ahora sí es para cada vez que se cumpla
console.log("Estoy contando 1 2 3 4 5 6 7".replace(regex6,"[numero]")) // reemplaza el primera que cumple el regex

// regex101.com
// hay explicaciones para todas las expresiones

// exec
// retorna detalles de la coincidencia
const text3 = "Estoy contando 1 2 3 4 5 6 7"
console.log(regex3.exec(text3))

// por cada ejecución del exec, tengo un array
// ejecutar bucle mientras existan coincidencias
while ((match = regex6.exec(text3)) !== null) {
    console.log(match)
}