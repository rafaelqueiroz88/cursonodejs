"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var server_1 = require("./server/server");
var server = new server_1.Server();
server.bootstrap().then(function (server) {
    console.log('Server running on: ', server.application.address());
}).catch(function (error) {
    console.log('Fail');
    console.error(error);
    process.exit(1);
});
//# sourceMappingURL=main.js.map