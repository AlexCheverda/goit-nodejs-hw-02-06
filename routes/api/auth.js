const express = require('express');
const { controllerWrapper } = require('../../helpers'); 
const { auth: ctrl } = require("../../controllers");
const { schemas } = require("../../models/user");
const { bodyValidat, auth } = require("../../middlewares")

const router = express.Router();

router.post('/register', bodyValidat(schemas.joiRegisterSchema), controllerWrapper(ctrl.register));
// router.post('/signup');

router.post('/login', bodyValidat(schemas.joiLoginSchema), controllerWrapper(ctrl.login));
// router.post("/signin");

router.post('/logout', auth, controllerWrapper(ctrl.logout));
// router.post("/signout");

router.get('/current', auth, controllerWrapper(ctrl.getCurrent));

router.patch("/", auth, bodyValidat(schemas.joiUpdSubscriptionSchema), controllerWrapper(ctrl.updSubscription));

module.exports = router;