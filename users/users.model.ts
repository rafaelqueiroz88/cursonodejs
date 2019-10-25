

const users = [
    {name: 'Peter Parker', email: 'homem@aranha.com'},
    {name: 'Tony Stark', email: 'homem@ferro.com'}
]

export class Users {
    static findAll(): Promise<any[]>{
        return Promise.resolve(users)
    }
}
