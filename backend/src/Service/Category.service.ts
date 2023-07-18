import userModel from "../Model/user.model";

const createCategory = (async (data: any) => {
    try {
        const category: any = await new userModel().createCategory(data.Name, data.Description, data.status)
        if (category.length == 0) throw new Error('category not found')
        return category
    }
    catch (e) {
        console.log('Exception--', e)
        throw e
    }

})

const updateCategory = (async (data: any) => {
    try {
        const category: any = await new userModel().updateCategory(data.Name, data.Description, data.status, data.id)
        if (category.length == 0) throw new Error('category not found')
        return category
    }
    catch (e) {
        console.log('Exception--', e)
        throw e
    }

})

const fetchAllCategoryDeatils = (async () => {
    try {
        const category: any = await new userModel().fetchAllCategoryDeatils();
        if (category.length == 0) throw new Error('category not found')
        return category
    }
    catch (e) {
        console.log('Exception--', e)
        throw e
    }

})
const deletecategory = (async (data: any) => {
    try {
        const category: any = await new userModel().deletecategory(data.id)
        if (category.length == 0) throw new Error('category not found')
        return category
    }
    catch (e) {
        console.log('Exception--', e)
        throw e
    }

})

export default {
    createCategory,
    updateCategory,
    fetchAllCategoryDeatils,
    deletecategory
}