const { BadRequest, NotFound } = require('http-errors');
const Contact = require("../../models/contact");
const { schemas } = require('../../models/contact');

async function updateStatusContact(contactId, body) {
    const result = await Contact.findByIdAndUpdate(contactId, body, {
        new: true,
    });
    return result;
};

const updateFavorite = async (req, res) => {
    const { error } = schemas.updateFavoriteSchema.validate(req.body);
    if (error) {
      error.message = "missing field favorite";
      throw new BadRequest();
    }
    const { contactId } = req.params;
  
    const result = await updateStatusContact(contactId, req.body);
  
    if (!result) {
      throw new NotFound();
    }
    res.json(result);
  };

// const updateFavorite = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await updateStatusContact(contactId, req.body);
//     if (!result) {
//         res.status(404).json({ message: "Not found!" });
//         return;
//     };
//     res.json(result);
// };

module.exports = updateFavorite;