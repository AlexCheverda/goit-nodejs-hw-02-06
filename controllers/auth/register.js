const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");
const { User } = require("../../models/user");
const gravatar = require("gravatar");

const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw new Conflict(`User with ${email} already exist`);
    };
    const avatarURL = gravatar.url(email);
    const hashPassword = await bcrypt.hash(password, 10);
    const result = await User.create({ email, password: hashPassword, avatarURL });
    res.status(201).json({
        user: {
            email: result.email,
            subscription: result.subscription,
            avatarURL
        },
    });
};

module.exports = register;