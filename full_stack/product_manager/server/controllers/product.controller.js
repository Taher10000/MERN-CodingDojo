const { createProduct } = require('../services/product.service');
const productService = require('../services/product.service');

const handleCreateProduct = async (req,res) => {
    console.log('controller: handleCreateProduct: req.body:', req.body);

    try{
        const product = await createProduct(req.body);
        return res.json(product);
    }
    catch(error){
        return res.status(400).json(error);
    }
};

module.exports = {handleCreateProduct:handleCreateProduct}