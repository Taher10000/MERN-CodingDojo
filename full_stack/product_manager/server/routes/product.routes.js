const express = require('express');
const { handleCreateProduct,
handleDeleteProductById,
handleGetAllProducts,
handleGetProductById,
handleUpdateProductById } = require('../controllers/product.controller');

const router = express.Router();

router.post('/new', handleCreateProduct);
router.get('/', handleGetAllProducts);
router.get('/:id', handleGetProductById);
router.delete('/:id', handleDeleteProductById);
router.put('/:id', handleUpdateProductById);


module.exports = {productRouter : router};