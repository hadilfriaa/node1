const express = require('express');
const router = express.Router();
const category = require('../controllers/category.controller');


router.post('/category', category.create);
router.get('/categoryAll', category.getAllCategory);

module.exports = router;