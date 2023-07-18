import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Category = () => {
    const [category, setCategory] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [editCategoryData, setEditCategoryData] = useState({
        id: '',
        name: '',
        description: '',
        status: '',
    });

    useEffect(() => {
        fetchCategories();
    }, []);

    const fetchCategories = async () => {
        try {
            const response = await axios.get('http://localhost:3001/category');
            setCategory(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:3001/category/${id}`);
            fetchCategories();
        } catch (error) {
            console.error('Error deleting category:', error);
        }
    };

    const handleEdit = (category) => {
        setEditMode(true);
        setEditCategoryData({
            id: category.id,
            name: category.name,
            description: category.description,
            status: category.status,
        });
    };

    const handleInputChange = (e) => {
        setEditCategoryData({
            ...editCategoryData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:3001/category/${editCategoryData.id}`, editCategoryData);
            setEditMode(false);
            fetchCategories();
        } catch (error) {
            console.error('Error updating category:', error);
        }
    };

    const handleCreate = async () => {
        try {
            await axios.post('http://localhost:3001/category', editCategoryData);
            fetchCategories();
            setEditMode(false);
            setEditCategoryData({
                id: '',
                name: '',
                description: '',
                status: '',
            });
        } catch (error) {
            console.error('Error creating category:', error);
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
                        <th>Description</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody
                    style={{
                        backgroundColor: "white",
                        padding: "5px",
                        border: "1px",
                        height: "100px",
                        width: "500px"
                    }}>
                    {category.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.description}</td>
                            <td>{item.status}</td>
                            <td>
                                <button onClick={() => handleEdit(item)}>Edit</button>
                                <button onClick={() => handleDelete(item.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {editMode ? (
                <div>
                    <h2>{editCategoryData.id ? 'Edit Category' : 'Add Category'}</h2>
                    <form>
                        <label>
                            Name:
                            <input
                                type="text"
                                name="name"
                                value={editCategoryData.name}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Description:
                            <input
                                type="text"
                                name="description"
                                value={editCategoryData.description}
                                onChange={handleInputChange}
                            />
                        </label>
                        <label>
                            Status:
                            <input
                                type="text"
                                name="status"
                                value={editCategoryData.status}
                                onChange={handleInputChange}
                            />
                        </label>
                        <button type="button" onClick={editCategoryData.id ? handleUpdate : handleCreate}>
                            {editCategoryData.id ? 'Update' : 'Create'}
                        </button>
                        <button type="button" onClick={() => setEditMode(false)}>
                            Cancel
                        </button>
                    </form>
                </div>
            ) : (
                <div>
                    <button onClick={() => setEditMode(true)}>Add Category</button>
                </div>
            )}
        </div>
    );
};

export default Category;
