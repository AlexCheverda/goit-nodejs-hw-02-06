const contacts = require('../../models/contacts');
const { RequestError } = require('../../helpers');

const removeContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await contacts.removeContact(contactId);
    if (!result) {
        throw RequestError(404, 'Not Found');
    }
    res.json({ message: 'Contact removed' });
};

module.exports = removeContactById;