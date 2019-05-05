// const fatorial = require('./fatorial').fatorial
// const fatorial = require('./fatorial')

import {fatorial} from './fatorial'
import * as yargs from 'yargs'

console.log(' ============= n-fatorial ============ ')

const argv = require('yargs').demandOption('numero').argv

const num = argv.numero

console.log(`O fatorial de ${num} é ${fatorial(num)}`)
