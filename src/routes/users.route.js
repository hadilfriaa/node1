const express = require('express');
const router = express.Router();
const user = require('../controllers/users.controller');
const auth = require('../middlewares/authorizations');
const userValidation = require ('../middlewares/validation/userValidation');
const authAdmin = require('../middlewares/adminAuth');

router.post('/users', userValidation, user.create);
//router.get('/users/:id', auth , user.getUser);
router.post('/users/login', user.login);

//Admin

    //router.post('/users/update/:id', authAdmin, user.modifyUser);
    //router.get('/users/delete/:id', authAdmin,user.deleteUser);
    //router.get('/usersall',authAdmin, user.getAllUser);

// Route pour les test
router.post('/users/update/:id', user.modifyUser);
router.get('/users/delete/:id',user.deleteUser);
router.get('/usersall', user.getAllUser);
router.get('/users/:id' ,  user.getUser);
module.exports = router;