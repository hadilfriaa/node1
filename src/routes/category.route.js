const express = require('express');
const router = express.Router();
const category = require('../controllers/category.controller');


router.post('/category', category.create);
router.get('/categoryAll', category.getAllCategory);
router.get('/category/:id', category.getProductInCategory);
router.get('/category/delete/:id', category.deleteCategory);
router.post('/category/update/:id', category.modifyCategory);

module.exports = router;
