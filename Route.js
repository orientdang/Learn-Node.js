const product = require('./routes/product');
const express = require('express');
const app = express();

app.use('/product',product);

app.listen('3000');