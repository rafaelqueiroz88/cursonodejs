import * as restify from 'restify'
import {plugins} from 'restify';
import userAgentConnection = plugins.pre.userAgentConnection;

export class Server {

    application: restify.Server

    initRoutes(): Promise<any> {
        return new Promise((resolve, reject) => {

            try {
              this.application  = restify.createServer({
                  name: 'meat-api',
                  version: '1.0.0'
              })

              this.application.use(restify.plugins.queryParser())

              this.application.listen(3000, ()=>{
                  // console.log('Api funcionando em: http://localhost:3000')
                  resolve(this.application)
              })

              this.application.get('/info', [
                  (req, resp, next)=> {
                      if(req.userAgent() && req.userAgent().includes('MSIE 7.0')) {
                          // resp.status(400)
                          // resp.json({message: 'Please update your browser'})
                          let error: any = new Error()
                          error.ErrorCode = 400
                          error.message = 'Por favor, atualize o seu browser'
                          // return next(false)
                          return next(error)
                      }
                      return next()
                  },(req, resp, next)=> {
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

                      })
                      return next()
                  }
              ])

            }
            catch(error) {
                reject(error)
            }
        })
    }

    bootstrap(): Promise<Server> {
        return this.initRoutes().then(() => this)
    }
}
