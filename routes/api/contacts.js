const express = require('express');
const controller = require('../../controllers/contacts');
const {
    addContactValidation,
    updateFavoriteContactValidation,
    putContactValidation,
} = require('../../schema/validation');
const { controllerWrapper, validatIdParam } = require('../../helpers'); 
const router = express.Router();

router.get('/', controllerWrapper(controller.getAllContacts));

router.get('/:contactId', validatIdParam, controllerWrapper(controller.getContactById));

router.post('/', addContactValidation, controllerWrapper(controller.addContact));

router.delete('/:contactId', validatIdParam, controllerWrapper(controller.removeContactById));

router.put('/:contactId', putContactValidation, validatIdParam, controllerWrapper(controller.updateContactById));

router.patch('/:contactId/favorite', updateFavoriteContactValidation, validatIdParam, controllerWrapper(controller.updateFavorite));

module.exports = router;