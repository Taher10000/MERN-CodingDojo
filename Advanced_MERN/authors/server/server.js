const express = require('express');
const cors = require('cors');

const { authorRouter } = require('./routes/author.routes');
const app = express();
const port = 8000;

require('./config/mongoose.config');


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/authors', authorRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
