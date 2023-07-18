import express from 'express'
import productController from '../../Controller/product.controller'


const router = express.Router()

router.post(
    '/',
    productController.CreateProduct
)

router.get(
    '/',
    productController.fethProductDEatils
)

router.put(
    '/',
    productController.UpdateProductDetails
)

router.put(
    '/delete',
    productController.DeleteProductDetails
)

export default router