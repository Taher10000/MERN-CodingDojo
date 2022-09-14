const {Product} = require('../models/product.model');

const createProduct = async (data) => {
    console.log('service create product');
    const product = await Product.create(data);
    return product;
}


module.exports = {
    createProduct:createProduct
}