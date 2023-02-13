const express = require('express');
const controller = require('../../controllers/contacts');
const createContactValidation = require('../../middlewares/validation');
const { controllerWrapper } = require('../../helpers'); 
const router = express.Router();

router.get('/', controllerWrapper(controller.getAllContacts));

router.get('/:contactId', controllerWrapper(controller.getContactById));

router.post('/', createContactValidation, controllerWrapper(controller.addContact));

router.delete('/:contactId', controllerWrapper(controller.removeContactById));

router.put('/:contactId', createContactValidation, controllerWrapper(controller.updateContactById));

module.exports = router;