"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var restify = require("restify");
var Server = /** @class */ (function () {
    function Server() {
    }
    Server.prototype.initRoutes = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            try {
                _this.application = restify.createServer({
                    name: 'meat-api',
                    version: '1.0.0'
                });
                _this.application.use(restify.plugins.queryParser());
                _this.application.listen(3000, function () {
                    // console.log('Api funcionando em: http://localhost:3000')
                    resolve(_this.application);
                });
                _this.application.get('/info', [
                    function (req, resp, next) {
                        if (req.userAgent() && req.userAgent().includes('MSIE 7.0')) {
                            // resp.status(400)
                            // resp.json({message: 'Please update your browser'})
                            var error = new Error();
                            error.ErrorCode = 400;
                            error.message = 'Por favor, atualize o seu browser';
                            // return next(false)
                            return next(error);
                        }
                        return next();
                    }, function (req, resp, next) {
                        // Possibilidades
                        // resp.contentType = 'application/json'
                        // resp.json({message: 'Hello'})
                        // resp.status(400)
                        // resp.setHeader('Content-Type', 'application/json')
                        // resp.send({message: 'Hello'})
                        resp.json({
                            browser: req.userAgent(),
                            method: req.method,
                            url: req.href(),
                            path: req.path(),
                            query: req.query
                        });
                        return next();
                    }
                ]);
            }
            catch (error) {
                reject(error);
            }
        });
    };
    Server.prototype.bootstrap = function () {
        var _this = this;
        return this.initRoutes().then(function () { return _this; });
    };
    return Server;
}());
exports.Server = Server;
//# sourceMappingURL=server.js.map