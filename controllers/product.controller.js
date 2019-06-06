const Product = require('../models/product.model');

exports.test = (req, res) => {
  res.send('teeeest route');
};

exports.productCreate = (req, res, next) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
  });

  product.save((err) => {
    if (err) {
      if (err.name === 'ValidationError') {
        return res.status(422).send(err);
      }
      return next(err);
    }
    res.send('Product Created successfully');
  });
};

exports.productDetails = (req, res, next) => {
  Product.findById(req.params.id, (err, product) => {
    if (err) {
      if (err.name === 'ValidationError') {
        return res.status(422).send(err);
      }
      return next(err);
    }
    res.send(product);
  });
};

exports.productUpdate = (req, res, next) => {
  Product.findByIdAndUpdate(req.params.id, { $set: req.body }, (err) => {
    if (err) {
      if (err.name === 'ValidationError') {
        return res.status(422).send(err);
      }
      return next(err);
    }
    res.send('Product udpated.');
  });
};

exports.productDelete = (req, res, next) => {
  Product.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      if (err.name === 'ValidationError') {
        return res.status(422).send(err);
      }
      return next(err);
    }
    res.send('Deleted successfully!');
  });
};
