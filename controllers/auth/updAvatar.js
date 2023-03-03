const fs = require("fs/promises");
const path = require("path");
const Jimp = require("jimp");
const { User } = require("../../models/user");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updAvatar = async (req, res) => {
    const { _id } = req.user;
    const { path: tempUpload, originalname } = req.file;
    const extension = originalname.split(".").pop();
    const imageName = `${_id}.${extension}`;
    const resultUpload = path.join(avatarDir, imageName);
    try {
        await fs.rename(tempUpload, resultUpload);
        Jimp.read(resultUpload).then((imageAvatar) => {
            return imageAvatar.resize(250, 250).write(resultUpload);
        }).catch((err) => {
            console.error(err);
        });
        const HOST = `http://localhost:${process.env.PORT}`;
        const avatarURL = `${HOST}/avatars/${imageName}`;
        await User.findByIdAndUpdate(_id, { avatarURL });
        res.json({ avatarURL });
    } catch (error) {
        await fs.unlink(tempUpload);
        throw error;
    };
};

module.exports = updAvatar;