const {createJoke} = require('../services/joke.service');

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

module.exports = {handleCreateJoke:handleCreateJoke};