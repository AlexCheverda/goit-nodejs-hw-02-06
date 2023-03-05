const { User } = require("../../models/user");
const { BadRequest, Conflict } = require("http-errors");

const resendVerify = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
        throw new BadRequest();
    };
    if (user.verify) {
        throw new Conflict();
    };
    const mailVerify = createVerifyEmail(email, user.verificationToken);
    await sendEmail(mailVerify);
    res.json({
        message: "Verification email resend",
    });
};

module.exports = resendVerify;