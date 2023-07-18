import CategoryService from "../Service/Category.service";
import userService from "../Service/user.service";

const createCategory = (async (req: any, res: any) => {
    try {
        const category = await CategoryService.createCategory(req.body)
        if (!category) {
            req.status(401).json({ error: 'invalid insert id' })
        } else {
            res.status(200).json(category)
        }
    } catch (e) {
        res.status(400).json({ eroor: 'error' })
    }

})


const updateCategory = (async (req: any, res: any) => {
    try {
        const category = await CategoryService.updateCategory(req.body)
        if (!category) {
            req.status(401).json({ error: 'invalid insert id' })
        } else {
            res.status(200).json(category)
        }
    } catch (e) {
        res.status(400).json({ eroor: 'error' })
    }

})


const fetchAllCategoryDeatils = (async (req: any, res: any) => {
    try {
        const category = await CategoryService.fetchAllCategoryDeatils()
        if (!category) {
            req.status(401).json({ error: 'invalid insert id' })
        } else {
            res.status(200).json(category)
        }
    } catch (e) {
        res.status(400).json({ eroor: 'error' })
    }

})

const deletecategory = (async (req: any, res: any) => {
    try {
        const category = await CategoryService.deletecategory(req.body)
        if (!category) {
            req.status(401).json({ error: 'invalid insert id' })
        } else {
            res.status(200).json(category)
        }
    } catch (e) {
        res.status(400).json({ eroor: 'error' })
    }

})

export default {
    createCategory,
    updateCategory,
    fetchAllCategoryDeatils,
    deletecategory
}