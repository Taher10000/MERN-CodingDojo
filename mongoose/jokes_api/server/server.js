const express = require('express');
const cors = require('cors');

const port = 8000;
const  {jokeRouter} = require('./routes/joke.routes');

require('./config/mongoose.config');

const app = express()

app.use(cors());

app.use(express.json());

app.use('/api/jokes', jokeRouter);

app.listen(port, () =>
console.log(`listening on port ${port}`)
);

