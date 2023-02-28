const express = require('express');
const { ctrl } = require('../../controllers/auth');
const {
    bodyValidat,
    auth,
    upload
} = require("../../middlewares");
const { controllerWrapper } = require('../../helpers');
const { schemas } = require("../../helpers/joiValidate");

const router = express.Router();

router.post("/register", bodyValidat(schemas.joiRegisterSchema), controllerWrapper(ctrl.register));
// router.post('/signup');

router.post('/login', bodyValidat(schemas.joiLoginSchema), controllerWrapper(ctrl.login));
// router.post("/signin");

router.post('/logout', auth, controllerWrapper(ctrl.logout));
// router.post("/signout");

router.get('/current', auth, controllerWrapper(ctrl.getCurrent));

router.patch('/avatars', auth, upload.single("avatar"), controllerWrapper(ctrl.updAvatar));

router.patch("/", auth, bodyValidat(schemas.joiUpdSubscriptionSchema), controllerWrapper(ctrl.updSubscription));

module.exports = router;