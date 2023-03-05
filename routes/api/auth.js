const express = require('express');
const controller = require('../../controllers/auth');
const { controllerWrapper } = require('../../helpers');
const {
    bodyValidat,
    auth,
    upload
} = require("../../middlewares");

const { schemas } = require("../../models/user");

const router = express.Router();

router.post("/register", bodyValidat(schemas.registerSchema), controllerWrapper(controller.register));
// router.post('/signup');

router.get("/users/verify/:verificationToken", controllerWrapper(controller.verify));
router.post("/users/verify", bodyValidat(schemas.verifyEmailSchema), controllerWrapper(controller.resendVerify));
// ('/verification);

router.post('/login', bodyValidat(schemas.loginSchema), controllerWrapper(controller.login));
// router.post("/signin");

router.get('/current', auth, controllerWrapper(controller.getCurrent));

router.post('/logout', auth, controllerWrapper(controller.logout));
// router.post("/signout");

router.patch('/users/avatars', auth, upload.single("avatar"), controllerWrapper(controller.updAvatar));

router.patch("/", auth, bodyValidat(schemas.updateSubscriptionSchema), controllerWrapper(controller.updSubscription));

module.exports = router;