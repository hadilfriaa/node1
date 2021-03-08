const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller');
const auth = require('../middlewares/authorizations');
const userValidation = require ('../middlewares/validation/userValidation')

router.post('/users', userValidation, user.create);
router.get('/users/:id', auth , user.getUser);
router.post('/login', user.login);
module.exports = router;