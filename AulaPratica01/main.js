"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// const fatorial  = require ('./fatorial') // padrão node
const fatorial_1 = require("./fatorial"); // padrão ECMAScript 2015
console.log('n-fatorial');
// const num = parseInt(process.argv[2])
const argv = require('yargs').demandOption('num').argv;
const num = argv.num;
console.log(`O fatorial de ${num} é igual a ${fatorial_1.fatorial(num)}`);
console.log(module.paths);
