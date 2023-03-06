const sgMail = require("@sendgrid/mail");
const { SENDGRID_API_KEY, SENDGRID_SENDER } = process.env;

sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
    const mailVerify = { ...data, from: `${SENDGRID_SENDER}` };
    await sgMail.send(mailVerify);
    return true;
};

module.exports = sendEmail;