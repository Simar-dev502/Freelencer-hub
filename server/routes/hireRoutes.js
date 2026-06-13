const express =
require("express");

const router =
express.Router();

const {
protect
}
=
require(
"../middleware/authMiddleware"
);

const {
hireFreelancer
}
=
require(
"../controllers/hireController"
);

router.post(
"/",
protect,
hireFreelancer
);

module.exports=
router;