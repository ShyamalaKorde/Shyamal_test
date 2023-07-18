import { Router } from "express";
import user from '../Route/User/user.route'
import category from '../Route/Category/category.route';
import product from '../Route/Product/product.route'

const router = Router();

router.use('/user', user);
router.use('/category', category);
router.use('/product', product)

export default router;