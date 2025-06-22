// Importar modulos externos
// Para ejecutar esto en node, el archivo tiene que tener terminación .cjs

const os = require("os")

console.log(os.platform())
console.log(os.arch())
console.log(os.totalmem()/10240000)
console.log(os.freemem()/10240000)
