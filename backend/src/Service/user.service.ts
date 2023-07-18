
import Encryption from '../../Encryption';
import Hashing from '../../hashing';
import userModel from '../Model/user.model';



const CreateData = (async (data: any) => {
    try {
        // @ts-ignore
        let hash = await new Hashing().generateHash(data.password, 10);
        console.log('hash--', hash)
        let insert = await new userModel().CreateData(data.first_name, data.email, hash)
        return insert;
    } catch (e) {
        console.log('Exception---', e)
        throw e

    }
})

const login = async (data: any) => {
    try {
        const user: any = await new userModel().login(data.email);

        if (user.length === 0) {
            throw new Error('User not found');
        }

        const match = await new Hashing().verifypassword(data.password, user[0].password);

        //if (!match) throw new Error("Invalid password");
        if (!match) {
            throw new Error('Invalid password');
        }

        if (user[0].status !== 1) {
            throw new Error('Your account is not active');
        }

        // Generate a JWT token
        const token = await Encryption.generateJwtToken({
            id: user[0].id,
        });
        console.log('hii', user[0].role_id)

        // Return the token and user data
        return {
            token,
            user,
        };
    } catch (e) {
        console.log('Exception:', e);
        throw e;
    }
};

export default {
    login,
    CreateData
};
