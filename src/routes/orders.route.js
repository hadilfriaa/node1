const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');
const authAdmin = require('../middlewares/adminAuth');


router.post('/orders', order.create);
router.get('/order/:id', order.getOrder);

//Admin
router.get('/ordersAll', authAdmin,order.getAllOrder);

module.exports = router;