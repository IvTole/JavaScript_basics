// Es un fichero de test asociado a testing.js

//import { sum } from "13-testing.js"
const sum = require('./13-testing')

// Crear un test utilizando jest
test("Suma de 3 + 5 tiene que ser 8", () => {
    expect(sum(3,5)).toBe(8)
})

// revisar documentacion de jestjs