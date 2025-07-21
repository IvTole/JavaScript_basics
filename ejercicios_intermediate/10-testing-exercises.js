// Ejercicios testing

// 1. Crea una función isEven(number) que devuelva true si el número es par y false si es impar

function isEven(number) {
    if (number % 2 === 0) {
        return true
    } else {
        return false
    }
}
module.exports = isEven

// 2. Escribe una prueba en Jest para verificar que la función funciona correctamente

// 3. Verifica que la prueba se ejecuta satisfactoriamente