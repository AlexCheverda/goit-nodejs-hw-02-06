const Joi = require('joi');

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

module.exports = schemas;