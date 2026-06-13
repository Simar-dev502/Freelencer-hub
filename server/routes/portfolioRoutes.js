const express =
require("express");

const router =
express.Router();

const upload =
require(
"../middleware/uploadMiddleware"
);

const {
protect
}
=
require(
"../middleware/authMiddleware"
);

const {
uploadProfileImage,
uploadResume
}
=
require(
"../controllers/portfolioController"
);

router.post(
"/profile-image",
protect,
upload.single("image"),
uploadProfileImage
);

router.post(
"/resume",
protect,
upload.single("resume"),
uploadResume
);

module.exports =
router;