const { User } = require("../../models/user");

const updSubscription = async (req, res) => {
    const { _id } = req.user;
    const { subscription } = req.body;
    const user = await User.findByIdAndUpdate(_id, { subscription }, { new: true });
    res.status(200).json({
        status: "OK",
        code: 200,
        data: {
            user: {
                email: user.email,
                subscription: user.subscription
            },
        },
    });
};

module.exports = updSubscription;