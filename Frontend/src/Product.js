import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {
    const [products, setProducts] = useState([]);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [editFormData, setEditFormData] = useState({
        name: '',
        Pack_size: '',
        MRP: '',
        image: '',
        Status: '',
    });

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        try {
            const response = await axios.get('http://localhost:3001/product');
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/product/delete/${id}`);
            fetchProducts();
        } catch (error) {
            console.error('Error deleting product:', error);
        }
    };

    const handleEdit = (product) => {
        setSelectedProduct(product);
        setEditFormData({
            name: product.name,
            Pack_size: product.Pack_size,
            MRP: product.MRP,
            image: product.image,
            Status: product.Status,
        });
    };

    const handleInputChange = (e) => {
        setEditFormData({
            ...editFormData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3001/product/${selectedProduct.id}`, editFormData);
            fetchProducts();
            setSelectedProduct(null);
        } catch (error) {
            console.error('Error updating product:', error);
        }
    };

    const handleCreate = async () => {
        try {
            await axios.post('http://localhost:3001/product', editFormData);
            fetchProducts();
            setEditFormData({
                name: '',
                Pack_size: '',
                MRP: '',
                image: '',
                Status: '',
            });
        } catch (error) {
            console.error('Error creating product:', error);
        }
    };

    return (
        <div>
            <table style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead style={{
                    backgroundColor: "purple",
                    padding: "5px",
                    border: "1px",
                    height: "100px",
                    width: "500px"
                }}>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Pack_size</th>
                        <th>MRP</th>
                        <th>Image</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody style={{
                    backgroundColor: "white",
                    padding: "5px",
                    border: "1px",
                    height: "100px",
                    width: "500px"
                }}>
                    {products.map((product, id) => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.Pack_size}</td>
                            <td>{product.MRP}</td>
                            <td>{product.Image}</td>
                            <td>
                                <button onClick={() => handleEdit(product)}>Edit</button>
                                <button onClick={() => handleDelete(product.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Form */}
            {selectedProduct ? (
                <div>
                    <h2>Edit Product</h2>
                    <form>
                        <label>
                            Name:
                            <input type="text" name="name" value={editFormData.name} onChange={handleInputChange} />
                        </label>
                        <label>
                            Pack Size:
                            <input
                                type="text"
                                name="Pack_size"
                                value={editFormData.Pack_size}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            MRP:
                            <input type="text" name="MRP" value={editFormData.MRP} onChange={handleInputChange} />
                        </label>
                        <label>
                            Image:
                            <input
                                type="text"
                                name="image"
                                value={editFormData.image}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Status:
                            <input
                                type="text"
                                name="Status"
                                value={editFormData.Status}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button type="button" onClick={handleUpdate}>
                            Update
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <h2>Add Product</h2>
                    <form>
                        {/* ... */}
                        <button type="button" onClick={handleCreate}>
                            Create
                        </button>
                    </form>
                </div>
            )}
        </div>
    );
};

export default Product;
