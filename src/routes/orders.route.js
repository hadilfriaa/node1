const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');
const authAdmin = require('../middlewares/adminAuth');
const { route } = require('./users.route');


router.post('/orders', order.create);
router.get('/order/:id', order.getOrder);

//Admin
router.get('/ordersAll', authAdmin,order.getAllOrder);
router.post('/order/update', order.modifyOrder);

module.exports = router;