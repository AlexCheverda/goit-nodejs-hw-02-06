const express = require('express');
const { controllerWrapper, validatIdParam } = require('../../helpers'); 
const { auth: ctrl } = require("../../controllers");
const { joiRegisterSchema, joiLoginSchema } = require("../../models/user");

const router = express.Router();

router.post('/register', validatIdParam(joiRegisterSchema), controllerWrapper(ctrl.register));
// router.post('/signup');

router.post('/login', validatIdParam(joiLoginSchema), controllerWrapper(ctrl.login));
// router.post("/signin");

module.exports = router;