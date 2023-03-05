const { BASE_URL, SENDGRID_SENDER } = process.env;
const createVerifyEmail = (email, verificationToken) => {
    const mailVerify = {
        to: email,
        from: `${SENDGRID_SENDER}`,
        subject: "Email verification",
        html: `<a target="_blank" href="${BASE_URL}/api/auth/users/verify/${verificationToken}">Verify your email</a>`,
    };
    return mailVerify;
};

module.exports = createVerifyEmail;