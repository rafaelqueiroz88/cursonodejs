"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-ignore
exports.fatorial = (num) => {
    if (num === 0) {
        return 1;
    }
    return num * exports.fatorial(num - 1);
};
// exports.fatorial = fatorial
// module.exports = fatorial // ou...
// module.exports = {
//     fatorial
// }
