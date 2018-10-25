"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restify = require("restify");
const server = restify.createServer({
    name: 'API',
    version: '1.0.0'
});
server.get('/hello', (req, resp, next) => {
    resp.json({
        message: 'hello'
    });
    return next();
});
server.listen(3000, () => {
    console.log('API funcionando em 3000');
});
