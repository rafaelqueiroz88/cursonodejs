"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Compilando o .ts para .js
// const fs = require('fs') // padrão node
const fs = require("fs"); // padrão ECMAScript 2015
const yargs = require("yargs");
const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv;
fs.writeFile(argv.filename, argv.content, (error) => {
    if (error)
        throw error;
    console.log(`Arquivo ${argv.filename} criado com sucesso!`);
});
//# sourceMappingURL=save-file.js.map