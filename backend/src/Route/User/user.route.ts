import express from 'express'
import userController from '../../Controller/user.controller'


const router = express.Router()
console.log('router---')


router.post(
    '/',
    userController.CreateData
)

router.post(
    '/login',
    userController.login
)

export default router;