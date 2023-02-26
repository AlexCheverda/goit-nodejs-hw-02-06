const { User } = require("../../models");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const updAvatar = async (req, res) => {
    const { path: tempUpload, originalname } = req.file;
    const { _id: id } = req.user;
    const extension = originalname.split(".").pop();
    const imageName = `${id}_${extension}`;
    const resultUpload = path.join(avatarsDir, imageName);
    try {   
        await fs.rename(tempUpload, resultUpload);
        Jimp.read(resultUpload).then((imageAvatar) => {
            return imageAvatar.resize(256, 256).write(resultUpload);
        })
            .catch((err) => {
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