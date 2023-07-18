// import { reject } from "";

const jwt = require('jsonwebtoken');
const config = require("./src/app");

//const jwt = require('jsonwebtoken');
const secretKey = 'your-secret-key';
let expiry = '5d'


export default class Encryption {
    constructor() {

    }

    public static async generateJwtToken(data: any) {
        console.log("before token", data)
        return await jwt.sign(data, secretKey, { expiresIn: expiry });
    }

    public async verifyJwtToken(token: string | string[]): Promise<any> {
        return new Promise((resolve, reject) => {
            jwt.verify(
                token,
                secretKey,
                (err: Error, decoded: any) => {
                    if (err) {
                        resolve(null);
                    } else {
                        resolve(decoded);
                    }
                },
            );
        });
    }
}
