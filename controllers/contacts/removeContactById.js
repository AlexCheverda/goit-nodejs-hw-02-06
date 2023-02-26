const { Contact } = require('../../models/contact');

const removeContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findByIdAndRemove(contactId);
    if (!result) {
        res.status(404).json({ message: 'Not Found!' });
        return;
    }
    res.status(200).json({ message: 'Contact deleted' });
};

module.exports = removeContactById;