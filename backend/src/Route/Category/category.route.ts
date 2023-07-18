import express from 'express'
import categoryController from '../../Controller/Category.controller'


const router = express.Router()

router.post(
    '/',
    categoryController.createCategory
)

router.put(
    '/',
    categoryController.updateCategory
)

router.get(
    '/',
    categoryController.fetchAllCategoryDeatils
)

router.put(
    '/delete',
    categoryController.deletecategory
)

export default router