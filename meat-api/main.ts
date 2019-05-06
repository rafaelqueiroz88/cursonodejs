import {Server} from './server/server'

const server = new Server()
server.bootstrap().then(server => {
    console.log('Server running on: ', server.application.address())
}).catch(error => {
    console.log('Fail')
    console.error(error)
    process.exit(1)
})
