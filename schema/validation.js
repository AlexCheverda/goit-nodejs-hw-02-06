const Joi = require('joi');

module.exports = {
    addContactValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string().alphanum().min(3).max(25).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            phone: Joi.number().min(7).max(14).required(),
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({
                code: 400,
                message: validationResult.error
            });
        }
        next();
    },
    putContactValidation: (req, res, next) => {
        const schema = Joi.object({
            name: Joi.string().alphanum().min(3).max(25).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).optional(),
            phone: Joi.number().optional(),
        }).min(1);
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({
                code: 400,
                message: 'Bad request'
            });
        }
        next();
    },
    updateFavoriteContactValidation: (req, res, next) => {
        const schema = Joi.object({
            favorite: Joi.boolean().required(),
        });
        const validationResult = schema.validate(req.body);
        if (validationResult.error) {
            return res.status(400).json({
                code: 400,
                message: validationResult.error
            });
        }
        next();
    },
};