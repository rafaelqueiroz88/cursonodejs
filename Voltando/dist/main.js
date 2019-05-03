"use strict";
// const fatorial = require('./fatorial').fatorial
// const fatorial = require('./fatorial')
Object.defineProperty(exports, "__esModule", { value: true });
const fatorial_1 = require("./fatorial");
console.log(' ============= n-fatorial ============ ');
const argv = require('yargs').demandOption('numero').argv;
const num = argv.numero;
console.log(`O fatorial de ${num} é ${fatorial_1.fatorial(num)}`);
