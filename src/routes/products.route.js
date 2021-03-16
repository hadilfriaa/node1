const express = require('express');
const router = express.Router();
const product = require('../controllers/product.controller');
const auth = require('../middlewares/authorizations');



router.get('/products/:id', product.getProduct);

//Admin

router.post('/products', product.create);
router.get('/products/all', product.getAllProduct);
router.post('/products/update/:id', product.modifyProduct);
router.get('/products/delete/:id', product.deleteProduct);


module.exports = router;