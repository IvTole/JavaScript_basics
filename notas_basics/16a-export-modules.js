// Exportación de módulos


// Funciones exportadas

export function add(a,b) {
    return a + b
}

console.log(add(5,10))

// Variables exportadas

export const pi = 3.1416
export let myName = "VanoTole"

// Exportación por defecto
export default function substract(a,b) {
    return a - b
}

// Clases exportadas

export class Circle {

        constructor(radius) {
            this.radius = radius
        }
    
        area() {
            return Math.PI * Math.pow(this.radius, 2) // clase ya está en js
        }

        perimeter() {
            return 2.0 * Math.PI * this.radius
        }
}