import userModel from "../Model/user.model";

const CreateProduct = (async (data: any) => {
    try {
        const product: any = await new userModel().CreateProduct(data.Name)
        if (product.length == 0) throw new Error('category not found')
        return product
    }
    catch (e) {
        console.log('Exception--', e)
        throw e
    }

})

const fethProductDEatils = (async () => {
    try {
        const product: any = await new userModel().fethProductDEatils()
        //if (category.length == 0) throw new Error('category not found')
        return product
    }
    catch (e) {
        console.log('Exception--', e)
        throw e
    }

})

const UpdateProductDetails = (async (data: any) => {
    try {
        const product: any = await new userModel().UpdateProductDetails(data.Name)
        if (product.length == 0) throw new Error('category not found')
        return product
    }
    catch (e) {
        console.log('Exception--', e)
        throw e
    }

})

const DeleteProductDetails = (async (data: any) => {
    try {
        const category: any = await new userModel().DeleteProductDetails(data.id)
        if (category.length == 0) throw new Error('category not found')
        return category
    }
    catch (e) {
        console.log('Exception--', e)
        throw e
    }

})

export default {
    CreateProduct,
    fethProductDEatils,
    UpdateProductDetails,
    DeleteProductDetails
}