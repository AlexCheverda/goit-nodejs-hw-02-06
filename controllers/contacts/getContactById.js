const Contact = require('../../models/contact');

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const contact = await Contact.findOne({ _id: contactId }, "-createdAt -updatedAt");
    if (!contact) {
        res.status(404).json({ code: 404, message: "Not found!" });
        return;
    }
    res.status(200).json(contact);
};

module.exports = getContactById;