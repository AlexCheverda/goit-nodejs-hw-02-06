// const { BadRequest } = require("http-errors");

const bodyValidat = (schema) => {
    return (req, res, next) => {
        const { error } = schema.validate(req.body);
        if (error) {
            return res.status(400).json({
                code: 400,
                message: error
            });
        };
        next();
    };
};

module.exports = bodyValidat;