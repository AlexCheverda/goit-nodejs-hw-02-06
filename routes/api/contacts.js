const express = require('express');
const controller = require('../../controllers/contacts');
const {
    validatIdParam,
    bodyValidat,
    auth
} = require("../../middlewares");
const { controllerWrapper } = require('../../helpers'); 
const { schemas } = require('../../models/contact');

const router = express.Router();

router.get('/', auth, controllerWrapper(controller.getAllContacts));

router.get('/:contactId', auth, validatIdParam, controllerWrapper(controller.getContactById));

router.post('/', auth, bodyValidat(schemas.addContactSchema, "missing required fields"), controllerWrapper(controller.addContact));

router.delete('/:contactId', auth, validatIdParam, controllerWrapper(controller.removeContactById));

router.put('/:contactId', auth, validatIdParam, bodyValidat(schemas.updateContactSchema), controllerWrapper(controller.updateContactById));

router.patch('/:contactId/favorite', auth, validatIdParam, bodyValidat(schemas.updateFavoriteSchema), controllerWrapper(controller.updateFavorite));

module.exports = router;