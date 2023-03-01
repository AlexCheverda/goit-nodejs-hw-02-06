const { BadRequest, NotFound } = require('http-errors');
const { Contact, contactSchema } = require('../../models/contact');

const updateContactById = async (req, res) => {
    const { error } = contactSchema.validate(req.body);
    if (error) {
      throw new BadRequest();
    }
    const { contactId } = req.params;
    const result = await Contact.findByIdAndUpdate(contactId, req.body, {
      new: true,
    });
    if (!result) {
      throw NotFound();
    }
    res.json(result);
  };
// const updateContactById = async (req, res) => {
//     const { contactId } = req.params;
//     const result = await Contact.findByIdAndUpdate(contactId, req.body, {
//         new: true,
//     });
//     if (!result) {
//         res.status(404).json({
//             code: 404,
//             message: "Not found!"
//         });
//         return;
//     };
//     res.json(result);
// };

module.exports = updateContactById;