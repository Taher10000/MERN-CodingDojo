const express = require('express');
const {handleCreateJoke,
handleDeleteJokeById,
handleGetAllJokes,
handleGetJokeById,
handleUpdateJokeById,
handleGetRandomJoke} = require('../controllers/joke.controller');

const router = express.Router();


router.post('/new', handleCreateJoke);
router.get('/', handleGetAllJokes);
router.get('/random', handleGetRandomJoke);
router.get('/:id', handleGetJokeById);
router.delete('/:id', handleDeleteJokeById);
router.put('/:id', handleUpdateJokeById);


module.exports = {jokeRouter : router};