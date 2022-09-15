const {Product} = require('../models/product.model');

const createProduct = async (data) => {
    console.log('service create product');
    const product = await Product.create(data);
    return product;
}
const getAllProducts = async () => {
    const product = await Product.find();
    return product;
}


const getProductById = async (id) => {
    const product = await Product.findById(id);
    return product;
}
const deleteProductById = async (id) => {
    const product = await Product.findByIdAndDelete(id);
    return product;

}
const updateProductById = async (id, data) => {
    const product = await Product.findByIdAndUpdate(id, data, {
        runValidators: true,
        new: true
    });
    return product;
}

module.exports = {
    createProduct:createProduct,
    getAllProducts,
    getProductById,
    deleteProductById,
    updateProductById
}