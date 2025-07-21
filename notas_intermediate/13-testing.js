// Testing
// Es el proceso para validar/verificar que el codigo funcione correctamente
// Antes de produccion, antes que lo use la gente

// Tipos de testing

// Pruebas unitarias
// Nos sirven para evaluar una función o un módulo individual
// Funcionalidad concreta, funciona o no funciona

function sum(a,b) {
    return a + b
}
module.exports = sum

console.log(sum(3,5) === 8)

// Pruebas de integración
// Revisar la integridad entre diferentes módulos
// Para ver si interactúan bien entre ellos 

// Pruebas end-to-end (E2E)
// Son las de recorrido más largo
// Se está probando una interacción real de la aplicación (e.g., un proceso de compra)
// usuario entra a la plataforma, busca, carrito, compra, etc

// Existen herramientas para hacer este testing de forma más sencilla

// Utilizar JEST desde NODE
// npm init (en terminal)
// crea un package.json
// npm install --save-dev jest
// modificar package.json, en la parte de test, cambiar a jest
// npm test