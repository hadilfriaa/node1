const express = require('express');
const router = express.Router();
const order = require('../controllers/order.controller');
const authAdmin = require('../middlewares/adminAuth');
const { route } = require('./users.route');


router.post('/orders', order.create);

//Admin
//router.get('/ordersAll', authAdmin,order.getAllOrder);
router.get('/ordersAll',authAdmin, order.getAllOrder);
router.get('/order/:id', order.getOrder);

router.post('/order/update/:id', order.modifyOrder);

module.exports = router;