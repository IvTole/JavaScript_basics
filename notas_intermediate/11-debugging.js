// Depuración, debugging

// console.log()

function sum(a, b) {
    console.log(":",a)
    console.log("typeof a:", typeof a)
    console.log("b:",b)
    console.log("typeof b:", typeof b)
    return a + b
}

console.log(sum(3,"5"))

// Depurador (profesional)
// VSCode tiene este modo de manera nativa, pero se supone que cualquier editor de código lo tienen 

function divide(a,b) {
    if (b === 0) {
        throw new Error("No se puede dividir por cero")
    }
    return a / b
}

console.log(divide(5,0))