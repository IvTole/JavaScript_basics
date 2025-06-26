// Ejercicios de estructuras avanzadas

// 1. Utiliza map, filter y reduce para crear un ejemplo diferente al de la lección
console.log("--Ejercicio 1--")

let names = ["Juan", "Maria", "Pedro", "Pascal"]

// map
// que todos los elementos se pasen a mayusculas
let arrayNames = names.map(name => name.toUpperCase())
console.log(arrayNames)

// filter
// filtrar aquellos que empiezan por P
let arrayStartsWithP = names.filter(name => name.toUpperCase().startsWith("P"))
console.log(arrayStartsWithP)

// reduce
// que me regrese el numero de letras totales del array
let arraySum = names.reduce((previous, current) => previous + current.length, 0) 
console.log(`Numero de elementos str en el array: ${arraySum}`) 

// 2. Dado un array de números, crea uno nuevo con dichos números elevados al cubo y filtra sólo los números pares
console.log("--Ejercicio 2--")

let numbers = [1,2,3,4,5,6,7,8,9,10]
let arrayFilterEvenCubes = numbers.map(value => value**3.0).filter(value => value % 2 ===0)
console.log(arrayFilterEvenCubes)

// 3. Utiliza flat y flatMap para crear un ejemplo diferente al de la lección
console.log("--Ejercicio 3--")

const cast = [
  ["Leonardo DiCaprio", "Kate Winslet"],
  ["Robert De Niro"],
  ["Natalie Portman", "Mila Kunis"],
  ["Tom Hanks", "Robin Wright"],
  ["Emma Stone"],
  ["Brad Pitt", "Edward Norton"],
  ["Meryl Streep", "Anne Hathaway"],
  ["Keanu Reeves", "Carrie-Anne Moss"],
  ["Javier Bardem", "Penélope Cruz"],
  ["Viola Davis", "Denzel Washington"]
]

// flat
// array plano de actores
let castFlat = cast.flat(1)
console.log(castFlat)

// flatMap
// Array plano y separacion
let castFlatMap = castFlat.flatMap(name => name.split(" "))
console.log(castFlatMap)

// 4. Ordena un array de números de mayor a menor
console.log("--Ejercicio 4--")

numbers = [42, 7, 19, 3, 88, 12, 54, 33, 1, 76]
let sortedNumbers = numbers.sort((a,b) => a - b)
console.log(sortedNumbers)

// 5. Dados dos sets, encuentra la unión, intersección y diferencia de ellos
console.log("--Ejercicio 5--")

let setA = new Set([1,2,3,4,5])
let setB = new Set([4,5,6,7,8,8,8,9])

// union
let union = new Set([...setA, ...setB])
console.log(`Union : `, union)

// interseccion
let intersection = new Set([...setA].filter(value => setB.has(value)))
console.log('Interseccion: ', intersection)

// diferencia
let difference = new Set([...setA].filter(value => !setB.has(value)))
console.log('Diferencia: ', difference)

// 6. Itera los resultados del ejercicio anterior
console.log("--Ejercicio 6--")

intersection.forEach(value => console.log(value))

// 7. Crea un mapa que almacene información de usuarios (nombre, edad y email) e itera los datos
console.log("--Ejercicio 7--")

let myUsers = new Map([
  ["user1", { name: "Ana", email: "ana@email.com", age: 25 }],
  ["user2", { name: "Luis", email: "luis@email.com", age: 17 }],
  ["user3", { name: "Sofía", email: "sofia@email.com", age: 30 }]
])

myUsers.forEach((value, key) => console.log(`${key}: `, value))

// 8. Dado el mapa anterior, crea un array con los nombres
console.log("--Ejercicio 8--")

// convertir el array para usar el metodo map sobre los valores del objeto
let arrayClientNames = [...myUsers.values()].map(user => user.name)
console.log(arrayClientNames)

// 9. Dado el mapa anterior, obtén un array con los email de los usuarios mayores de edad y transfórmalo a un set
console.log("--Ejercicio 9--")

let arrayEmailsAdults = [...myUsers.values()].filter(user => user.age >= 18).map(user => user.email)
console.log(arrayEmailsAdults)

// 10. Transforma el mapa en un objeto, a continuación, transforma el objeto en un mapa con clave el email de cada usuario y como valor todos los datos del usuario
console.log("--Ejercicio 10--")

let myUsersObject = Object.fromEntries(myUsers)
console.log(myUsersObject)
let emailMap = new Map(Object.values(myUsersObject).map(user => [user.email, user]))
// Object.values() regresa un array de los valores
console.log(emailMap)

