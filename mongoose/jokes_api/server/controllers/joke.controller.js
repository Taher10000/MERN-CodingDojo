const jokeService = require('../services/joke.service');
const {createJoke, 
    getAllJokes,
    getJokeById,
    deleteJokeById,
    updateJokeById,
    getRandomJoke
} = require('../services/joke.service');

const handleCreateJoke = async (req,res) =>{
    console.log('controller: handleCreateJoke req.body:', req.body);

    try{
        const joke = await createJoke(req.body);
        return res.json(joke);
    }
    catch(error){
        return res.status(400).json(error);
    }

};
const handleGetAllJokes = async (req,res) =>{
    try{
        const jokes = await getAllJokes();
        return res.json(jokes);
    }
    catch(error){ 
        return res.status(400).json(error);
    }

};
const handleGetRandomJoke = async (req,res) =>{
    try{
        const jokes = await getRandomJoke();
        return res.json(jokes[0]);
    }

    catch(error){
        return res.status(400).json(error);
    }

};
const handleGetJokeById = async (req,res) =>{
    try{
        const joke = await getJokeById(req.params.id);
        return res.json(joke);
    }
    catch(error){
        return res.status(400).json(error);
    }

};
const handleDeleteJokeById = async (req,res) =>{
    try{
        const joke = await deleteJokeById(req.params.id);
        return res.json(joke);
    }
    catch(error){
        return res.status(400).json(error);
    }

};
const handleUpdateJokeById = async (req,res) =>{
    try{
        const joke = await updateJokeById(req.params.id, req.body);
        return res.json(joke);
    }
    catch(error){
        return res.status(400).json(error);
    }

};

module.exports = {
    handleCreateJoke:handleCreateJoke,
    handleGetAllJokes,
    handleGetJokeById,
    handleDeleteJokeById,
    handleUpdateJokeById,
    handleGetRandomJoke

};