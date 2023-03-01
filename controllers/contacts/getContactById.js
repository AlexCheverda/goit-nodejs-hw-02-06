const { NotFound } = require('http-errors');
const Contact = require('../../models/contact');

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findById(contactId);
    if (!result) {
        throw new NotFound();
    };
    res.json(result);
};

module.exports = getContactById;