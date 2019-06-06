const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const product = require('./routes/product.route');

// Imports routes for the products
const app = express();

const mongoDB = 'mongodb://listar:375477787aA@ds113871.mlab.com:13871/listardb';

mongoose.connect(mongoDB, (err) => {
  if (err) throw err;
  console.log('Successfully connected');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/products', product);

const port = 3000;

app.listen(port, () => {
  console.log(`Server is up and running on port numner ${port}`);
});
