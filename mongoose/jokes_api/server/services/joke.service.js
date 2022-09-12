const {Joke} = require('../models/joke.model');

const createJoke = async (data) => {
    console.log('service:createJoke');

    const joke = await Joke.create(data);
    return joke;
}

module.exports = {createJoke:createJoke};