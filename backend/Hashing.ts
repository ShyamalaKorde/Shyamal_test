import bcrypt, { hash } from "bcrypt";



//var bcrypt = require('bcrypt');
export default class Hashing {
    constructor() {
    }

    public async generateHash(password: string, saltRounds: number): Promise<any> {
        console.log('geneearte--')
        return new Promise((resolve, reject) => {
            console.log('geneearte--')
            bcrypt.hash(password, saltRounds, (err: any, hash: any) => {
                if (!err) {
                    console.log("hiii");
                    resolve(hash);
                }
                reject(err);
            });
        });
    }

    public async verifypassword(password: string, hashPassword: string): Promise<any> {
        return new Promise((resolve, reject) => {
            console.log('hash', password, hashPassword)
            bcrypt.compare(password, hashPassword, (err: any, hash: any) => {
                console.log('haspassword---', hashPassword, 'hash', hash, 'password', password)
                if (!err) {
                    console.log('password', hash)
                    console.log(" hash : ", hash, err)
                    resolve(hash);
                }
                reject(err);
            });
        });
    }

}