"use strict";
// const fs = require('fs')
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
// Padrão es6
const fs = __importStar(require("fs"));
const yargs = __importStar(require("yargs"));
const argv = yargs
    .alias('f', 'filename')
    .alias('c', 'content')
    .demandOption('filename')
    .demandOption('content')
    .argv;
// @ts-ignore
fs.writeFile(argv.filename, argv.content, (error) => {
    if (error)
        throw error;
    console.log(`Arquivo ${argv.filename} salvo com sucesso`);
});
//# sourceMappingURL=file-save.js.map