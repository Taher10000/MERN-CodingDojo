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
router.get('/:id', handleGetJokeById);
router.delete('/:id', handleDeleteJokeById);
router.put('/:id', handleUpdateJokeById);
router.get('/random', handleGetRandomJoke);


module.exports = {jokeRouter : router};