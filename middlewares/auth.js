const jwt = require("jsonwebtoken");
const { Unauthorized } = require("http-errors");
const { User } = require("../models/user");

const auth = async (req, res, next) => {
    const { SECRET_KEY } = process.env;
    try {
        const { authorization = "" } = req.headers;
        const [bearer = "", token = ""] = authorization.split(" ");
        if (bearer !== "Bearer" || !token) {
            next(new Unauthorized());
        };
        try {
            const { id } = jwt.verify(token, SECRET_KEY);
            const user = await User.findById(id);
            if (!user || !user.token || user.token !== token) {
                next(new Unauthorized());
            };
            req.user = user;
            next();
        } catch (error) {
            throw new Unauthorized();
        }
    } catch (error) {
        next(error);
    };
};

module.exports = auth;