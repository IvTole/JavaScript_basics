// Importación de módulos
import { add, pi, myName, Circle} from "./16a-export-modules.js"
// para node, los dos archivos tienen que tener terminacion .mjs
// recordar que el entorno node es para poder ejecutar código fuera de un navegador
// agregar "type": "module" al archivo package.json permite tener nuestro proyecto modular
import resta from "./16a-export-modules.js" // se refiere a las cosas que esten marcadas por defecto, ignorando las demas
// cuando solo tenemos una funcion a exportar

// Funciones importadas
console.log(add(5,10))

// Variables importadas
console.log(pi)
console.log(myName)

// Importación por defecto
// Sólo es valido para funciones, clases
console.log(resta(10,5)) // funciona aunque no haya una funcion explicitamente de resta en el modulo externo

// Clases importadas

let myCircle = new Circle(1)

console.log(`Área del círculo: ${myCircle.area().toFixed(2)}`)
console.log(`Perímetro del círculo: ${myCircle.perimeter().toFixed(2)}`)

// Módulos externos
// Esta forma no funciona cuando se trabaja como modulos 

//const os = require("os")