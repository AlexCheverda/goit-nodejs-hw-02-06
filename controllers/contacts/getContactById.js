const Contact = require('../../models/contact');

const getContactById = async (req, res) => {
    const { contactId } = req.params;
    const result = await Contact.findOne({ _id: contactId }, "-createdAt -updatedAt");
    if (!result) {
        res.status(404).json({ code: 404, message: "Not Found" });
        return;
    };
    res.status(200).json(result);
};

module.exports = getContactById;