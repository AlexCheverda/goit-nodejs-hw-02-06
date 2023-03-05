const { User } = require("../../models/user");
const NotFound = require("http-errors");

const verify = async (req, res) => {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });
    if (!user) {
        throw new NotFound("User not found");
    };
    await User.findByIdAndUpdate(user._id, {
        verify: true,
        verificationToken: null,
    });
    res.json({
        status: "success",
        code: 200,
        ResponseBody: {
            message: "Verification successful",
        },
    });
};

module.exports = verify;