const Product = require('../models/product.model');

const setStatusError = (err, res, next) => {
  if (err.name === 'ValidationError') {
    return res.status(422).send(err);
  }
  return next(err);
};

exports.test = (req, res) => {
  res.send('teeeest route');
};

exports.productCreate = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  product.save((err) => {
    if (err) setStatusError(err, res, next);
    res.send('Product Created successfully');
  });
};

exports.productDetails = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) setStatusError(err, res, next);
    res.send(product);
  });
};

exports.productUpdate = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err) setStatusError(err, res, next);
    res.send('Product udpated.');
  });
};

exports.productDelete = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, (err) => {
    if (err) setStatusError(err, res, next);
    res.send('Deleted successfully!');
  });
};
