const express = require('express');

const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const productСontroller = require('../controllers/product.controller');

// a simple test url to check that all of our files are communicating correctly.
router.get('/test', productСontroller.test);
router.post('/create', productСontroller.productCreate);
router.get('/:id', productСontroller.productDetails);
router.put('/:id/update', productСontroller.productUpdate);
router.delete('/:id/delete', productСontroller.productDelete);
module.exports = router;
