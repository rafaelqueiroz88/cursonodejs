const fatorial  = require ('./fatorial')

console.log('n-fatorial')

// const num = parseInt(process.argv[2])

const argv = require('yargs').demandOption('num').argv

const num = argv.num

console.log(`O fatorial de ${num} é igual a ${fatorial(num)}`)

console.log(module.paths)
