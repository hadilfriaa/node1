const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');

router.post('/orders', order.create);
router.get('/order/:id', order.getOrder);
router.get('/ordersAll', order.getAllOrder);
module.exports = router;