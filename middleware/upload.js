const multer = require("multer");
const Storage = multer.diskStorage({
  destination: "assets/foodImages",
  filename: (req, file, cb) => {
    cb(null, `${file.fieldname}_${Date.now()}_${file.originalname}`);
  },
});
const upload = multer({
  storage: Storage,
});

module.exports = upload;
