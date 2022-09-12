const express = require('express');
const {handleCreateJoke} = require('../controllers/joke.controller');

const router = express.Router();


router.post('/', handleCreateJoke);

module.exports = {jokeRouter : router};