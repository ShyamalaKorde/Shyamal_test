import userService from "../Service/user.service";

const CreateData = (async (req: any, res: any) => {
    try {
        const insert = await userService.CreateData(req.body)
        if (!insert) {
            req.status(401).json({ error: 'invalid insert id' })
        } else {
            res.status(200).json(insert)
        }
    } catch (e) {
        res.status(400).json({ eroor: 'error' })
    }

})

const login = async (req: any, res: any) => {
    try {
        console.log('req---', req.body)
        const user = await userService.login(req.body)
        console.log('user---11', req.body)
        if (!user) {
            res.status(401).json({
                error: ('user are not found')
            })
        } else {
            res.status(200).json(user)
        }
    } catch (e) {
        console.log("Exception----", e);
        res.status(400).json({ error: 'an error occured' })
        throw e;
    }

}


export default {
    login,
    CreateData
};