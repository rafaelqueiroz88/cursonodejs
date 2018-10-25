"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export a frente do objeto que deseja ser exportado para exportar no padrão ECMAScript 2015
exports.fatorial = (num) => {
    if (num === 0) {
        return 1;
    }
    return num * exports.fatorial(num - 1);
};
// module.exports = fatorial // padrão node
