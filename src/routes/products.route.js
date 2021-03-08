const express = require('express');
const router = express.Router();
const product = require('../controllers/product.controller');
const auth = require('../middlewares/authorizations');


router.post('/products', product.create);
router.get('/products/all', product.getAllProduct);
router.get('/products/:id', auth , product.getProduct);

module.exports = router;