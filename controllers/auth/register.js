const bcrypt = require("bcryptjs");
const { Conflict } = require("http-errors");
const gravatar = require("gravatar");
const { v4: uuidv4 } = require("uuid");
const { User } = require("../../models/user");


const register = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user) {
        throw new Conflict(`User with ${email} already exist`);
    };
    const hashPassword = await bcrypt.hash(password, 10);
    const verificationToken = uuidv4();
    const avatarURL = gravatar.url(email);
    const result = await User.create({
        email,
        password: hashPassword,
        avatarURL,
        verificationToken,
    });
    const mailVerify = {
        to: email,
        subject: "Email verification",
        html: `<a target="_blank" href="http://localhost:${PORT}/api/users/verify/${verificationToken}">Confirm your email</a>`,
    };
    await sendEmail(mailVerify);
    res.status(201).json({
        status: "success",
        code: 201,
        data: {
            user: {
                email: result.email,
                subscription: result.subscription,
                verificationToken: result.verificationToken,
            },
        },
    });
};

module.exports = register;