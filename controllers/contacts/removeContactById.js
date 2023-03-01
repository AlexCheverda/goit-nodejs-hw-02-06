const { NotFound } = require('http-errors');
const Contact = require('../../models/contact');

const removeContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
        throw new NotFound();
    };
    res.json({ message: 'Contact deleted' });
};

module.exports = removeContactById;