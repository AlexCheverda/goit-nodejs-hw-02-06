const Joi = require('joi');

const contactCard = Joi.object({
    name: Joi.string().min(3).max(25).required(),
    email: Joi.string().email({ minDomainSegments: 2, }).required(),
    phone: Joi.string().min(7).max(14).required(),
});

const createContactValidation = () => {
    return (req, res, next) => {
        const { error } = contactCard.validate(req.body);
        if (error) {
            error.status = 400;
            next(error);
        };
        next();
    };
};

module.exports = {
    contactCard,
    createContactValidation
};