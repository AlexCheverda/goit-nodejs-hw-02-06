const { BadRequest } = require("http-errors");

const bodyValidat = (schema) => {
    const func = (req, res, next) => {
        const body = req.body;
        const { error } = schema.validate(body);
        if (error) {
            next(new BadRequest());
        };
        next();
    };
    return func;
};

module.exports = bodyValidat;