const { Unauthorized } = require("http-errors");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const { SECRET_KEY } = process.env;

const auth = async (req, res, next) => {
    try {
        const { auth = "" } = req.headers;
        const [bearer = "", token = ""] = auth.split(" ");
        if (bearer !== "Bearer" || !token) {
            next(new Unauthorized());
        };
        try {
            const { id } = jwt.verify(token, SECRET_KEY);
            const user = await User.findById(id);
            if (!user || !user.token || user.token !== token) {
                next(new Unauthorized());
            }
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