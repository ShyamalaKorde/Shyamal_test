import CategoryService from "../Service/Category.service";
import productService from "../Service/product.service";
import userService from "../Service/user.service";

const CreateProduct = (async (req: any, res: any) => {
    try {
        const product = await productService.CreateProduct(req)
        if (!product) {
            req.status(401).json({ error: 'invalid insert id' })
        } else {
            res.status(200).json(product)
        }
    } catch (e) {
        res.status(400).json({ eroor: 'error' })
    }

})

const fethProductDEatils = (async (req: any, res: any) => {
    try {
        const product = await productService.fethProductDEatils()
        if (!product) {
            req.status(401).json({ error: 'invalid insert id' })
        } else {
            res.status(200).json(product)
        }
    } catch (e) {
        res.status(400).json({ eroor: 'error' })
    }

})

const UpdateProductDetails = (async (req: any, res: any) => {
    try {
        const product = await productService.UpdateProductDetails(req)
        if (!product) {
            req.status(401).json({ error: 'invalid insert id' })
        } else {
            res.status(200).json(product)
        }
    } catch (e) {
        res.status(400).json({ eroor: 'error' })
    }

})

const DeleteProductDetails = (async (req: any, res: any) => {
    try {
        const product = await productService.DeleteProductDetails(req.body)
        if (!product) {
            req.status(401).json({ error: 'invalid insert id' })
        } else {
            res.status(200).json(product)
        }
    } catch (e) {
        res.status(400).json({ eroor: 'error' })
    }

})

export default {
    CreateProduct,
    fethProductDEatils,
    UpdateProductDetails,
    DeleteProductDetails
}