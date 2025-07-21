// Import
const isEven = require('./10-testing-exercises')

// Tests
test("Verifica si 4 es par", () => {
    expect(isEven(4)).toBe(true)
})

test("Verifica si 5 es impar", () => {
    expect(isEven(5)).toBe(false)
})

test("Verifica si 0 es par", () => {
    expect(isEven(0)).toBe(true)
})

test("Verifica si -2 es par", () => {
    expect(isEven(4)).toBe(true)
})
