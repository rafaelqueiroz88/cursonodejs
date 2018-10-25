// Compilando o .ts para .js
// const fs = require('fs') // padrão node
import * as fs from 'fs' // padrão ECMAScript 2015
import * as yargs from 'yargs'

const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv

fs.writeFile(argv.filename, argv.content, (error)=>{
  if(error) throw error
  console.log(`Arquivo ${argv.filename} criado com sucesso!`)
})
