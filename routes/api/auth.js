const express = require('express');
const { controllerWrapper, validatIdParam } = require('../../helpers'); 
const { auth: ctrl } = require("../../controllers");

const router = express.Router();

router.post('/register', controllerWrapper(ctrl.register));
// router.post('/signup');

module.exports = router;