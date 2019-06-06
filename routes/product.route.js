const express = require('express');
const productСontroller = require('../controllers/product.controller');

const router = express.Router();

router.get('/test', productСontroller.test);
router.post('/create', productСontroller.productCreate);
router.get('/:id', productСontroller.productDetails);
router.put('/:id/update', productСontroller.productUpdate);
router.delete('/:id/delete', productСontroller.productDelete);
module.exports = router;
