const { User } = require("../../models/user");
const { BadRequest } = require("http-errors");
const { PORT = 3000 } = process.env;

const resendVerify = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new BadRequest("Missing required field email");
    };
    if (user.verify) {
        throw new BadRequest("User already verify");
    };
    const mailVerify = {
        to: email,
        subject: "Email verification",
        html: `<a target="_blank" href="http://localhost:${PORT}/api/users/verify/${verificationToken}">Confirm your email</a>`,
    };
    await sendEmail(mailVerify);
    res.json({
        status: "success",
        code: 200,
        ResponseBody: {
            message: "Verification email resend",
        },        
    });
};

module.exports = resendVerify;