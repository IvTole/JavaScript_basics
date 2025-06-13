// Almacenar en memoria valores
// Escribimos tres formas para declarar valores
// utilizamos camelCase

// var, forma original para declarar variables en JS.
// Se recomienda no utilizar esta forma para declarar variables (hoisting, se declaran al principio del fichero aunque no estén ahí)
var helloWorld = "¡Hello, JS!"
console.log(helloWorld)
// reasigno el valor
helloWorld = "¡Hello again, JS!"
console.log(helloWorld)

// let (introducido en Ecmascript ES6, 2015, solo tienen efecto dentro de un bloque)
let helloWorld2 = "¡Hello, JS 2!"
console.log(helloWorld2)
// reasignamos
helloWorld2 = "¡Hello again, JS 2!"
console.log(helloWorld2)

// const (su valor es constante, en el momento de su declaracion, aunque sí puede si es una referencia de otro valor)
const helloWorld3 = "¡Hello, JS 3!"
console.log(helloWorld3)
// reasignamos
//helloWorld3 = "¡Hello again, JS 3!"
//console.log(helloWorld3)