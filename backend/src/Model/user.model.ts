import con from '../../Config/dbConnection'

export default class userModel {
    constructor() {
        con.connect();
    }

    CreateData(first_name: any, email: any, password: any) {
        return new Promise((resolve, reject) => {
            con.query(`INSERT INTO user ( email, password,status) 
            VALUES (?,?,1)`, [email, password], (error: any, result: any) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(result);
                }
            });
        });
    }

    login(email: any) {
        return new Promise((resolve, reject) => {
            con.query(
                `SELECT id, status, password FROM user WHERE email = ?`,
                [email],
                (error: any, res: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    createCategory(Name: string, Description: string, status: any) {
        return new Promise((resolve, reject) => {
            con.query(
                `insert into category (name,Description,status) value(?,?,?)`,
                [Name, Description, status],
                (error: any, res: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    updateCategory(Name: string, Description: string, status: any, id: number) {
        return new Promise((resolve, reject) => {
            con.query(
                `UPDATE category SET name = ?, description = ?, status = ? WHERE id = ?`,
                [Name, Description, status, id],
                (error: any, res: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    fetchAllCategoryDeatils() {
        return new Promise((resolve, reject) => {
            con.query(
                `SELECT * FROM category  `,
                [],
                (error: any, res: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    deletecategory(id: number) {
        return new Promise((resolve, reject) => {
            con.query(
                `UPDATE category
                SET status = 0
                WHERE id = ?`,
                [id],
                (error: any, res: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    CreateProduct(id: number) {
        return new Promise((resolve, reject) => {
            con.query(
                `INSERT INTO product ( pack_size, MRP, status,image as image_path, category_name) VALUES (?, ?, ?, ?, ?)';
`
                [id],
                (error: any, res: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    fethProductDEatils() {
        return new Promise((resolve, reject) => {
            con.query(
                `SELECT  product.image, product.Pack_size, product.MRP, product.status, category.Name as Category
             FROM   product JOIN  category ON product.id = category.id`,
                [],
                (error: any, res: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    UpdateProductDetails(id: number) {
        return new Promise((resolve, reject) => {
            con.query(
                `UPDATE product SET Name = ?, Pack_size = ?, Category_name = ?,MRP=?,image=?,status = ? WHERE id = ?`,
                [id],
                (error: any, res: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

    DeleteProductDetails(id: number) {
        return new Promise((resolve, reject) => {
            con.query(
                `UPDATE product
                SET status = 0
                WHERE id = ?`,
                [id],
                (error: any, res: any) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(res);
                    }
                }
            );
        });
    }

}
