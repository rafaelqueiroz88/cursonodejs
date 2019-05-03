// const fs = require('fs')

// Padrão es6
import * as fs from 'fs'
import * as yargs from 'yargs'

const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv

// @ts-ignore
fs.writeFile(argv.filename, argv.content, (error: any) => {
    if(error) throw error
    console.log(`Arquivo ${argv.filename} salvo com sucesso`)
})
