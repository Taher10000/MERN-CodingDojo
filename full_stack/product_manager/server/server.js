const express = require('express');
const cors = require('cors');

const { productRouter } = require('./routes/product.routes');
const app = express();
const port = 8000;

require('./config/mongoose.config');


app.use(cors());
app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/api/products', productRouter);

app.listen(port, () => console.log(`Listening on port: ${port}`) );
