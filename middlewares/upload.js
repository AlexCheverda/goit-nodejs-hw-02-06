const multer = require('multer');
const path = require('path');

const tempDir = path.join(__dirname, "../", "temp");
// const contactsDir = path.join(__dirname, "public", "contacts");

const multerConfig = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, tempDir);
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
  limits: {
    fileSize: 2048
  }
});

const upload = multer({
  storage: multerConfig
});

// const avatars = [];

// app.post("/api/avatars", upload.single("image"), async (req, res) => {
//   const { path: tempUpload, originalname } = req.file;
//   const resultUpload = path.join(contactsDir, originalname);
//   try {
//     await fs.rename(tempUpload, resultUpload);
//   } catch (error) {
//     await fs.unlink(tempUpload);
//   }
// })

module.exports = upload;