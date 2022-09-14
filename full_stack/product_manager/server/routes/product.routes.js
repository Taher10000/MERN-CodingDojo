const express = require('express');
const { handleCreateProduct } = require('../controllers/product.controller');

const router = express.Router();

router.post('/new', handleCreateProduct);


module.exports = {productRouter : router};