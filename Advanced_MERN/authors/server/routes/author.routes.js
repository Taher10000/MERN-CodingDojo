const express = require('express');
const { handleCreateAuthor,
handleDeleteAuthorById,
handleGetAllAuthors,
handleGetAuthorById,
handleUpdateAuthorById } = require('../controllers/author.controller');

const router = express.Router();

router.post('/', handleCreateAuthor);
router.get('/', handleGetAllAuthors);
router.get('/:id', handleGetAuthorById);
router.delete('/:id', handleDeleteAuthorById);
router.put('/:id', handleUpdateAuthorById);


module.exports = {authorRouter : router};