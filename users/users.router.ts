import {Router} from '../common/router'
import * as restify from 'restify'
import {Users} from './users.model'

class UsersRouter extends Router {
    applyRoutes(application: restify.Server) {
        application.get('/users', (req, res, next) => {
            Users.findAll().then(users=>{
                res.json(users)
                return next()
            })
        })
    }
}

export const usersRouters = new UsersRouter()
