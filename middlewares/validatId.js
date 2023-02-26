const { isValidObjectId } = require("mongoose");
const Joi = require('joi');

const validatIdParam = (req, res, next) => {
    const { contactId } = req.params;
    const result = isValidObjectId(contactId);
    if (!result) {
        res.status(404).json({ message: `${contactId} is not valid` });
    }
    next();
};

const joiRegisterSchema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required()
});

const joiLoginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required()
});

const joiUpdSubscriptionSchema = Joi.object({
    subscription: Joi.string().valid("starter", "pro", "business").required()
});

const schemas = {
    joiRegisterSchema,
    joiLoginSchema,
    joiUpdSubscriptionSchema
};

module.exports = {
    validatIdParam,
    schemas
};