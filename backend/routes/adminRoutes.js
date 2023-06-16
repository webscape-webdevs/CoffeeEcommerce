const router = require("express").Router();
const adminController = require("../controllers/adminController");
const { isAuthenticated } = require("../middlewares/auth");

router.get("/adminFeaturedInfo", adminController.adminFeaturedInfo);

module.exports = router;
