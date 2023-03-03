const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");

const { User } = require("../../models/user");


const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw new Conflict(`User with ${email} already exist`);
    };
    const hashPassword = await bcrypt.hash(password, 10);
    const avatarURL = gravatar.url(email);
    const result = await User.create({
        email,
        password: hashPassword,
        avatarURL
    });
    res.status(201).json({
        user: {
            email: result.email,
            subscription: result.subscription
        },
    });
};

module.exports = register;