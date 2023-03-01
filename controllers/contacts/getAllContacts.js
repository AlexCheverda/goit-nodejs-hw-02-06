const { Contact } = require('../../models/contact');

const getAllContacts = async (req, res) => {
    const { _id: owner } = req.user;
    const { page = 1, limit = 10 } = req.query;
    const skip = (page - 1) * limit;
    let contacts;
    const { favorite } = req.query;
    if (!favorite) {
        contacts = await Contact.find({ owner }, "-createdAt -updatedAt", {
            skip,
            limit
        }).populate("owner", "name email");
    } else {
        const parsedFavorite = JSON.parse(favorite);
        contacts = await Contact.find({
            $and: [{ owner },
            { favorite: parsedFavorite }]
        }, "-createdAt -updatedAt",
            { skip, limit }).populatr("owner", "name email");
    }
    res.json(contacts);
};

module.exports = getAllContacts;