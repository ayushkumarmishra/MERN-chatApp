const express = require("express");
const { registerUser, authUser } = require("../controllers/userControllers");

const router = express.Router();

// router.route("/").post(registerUser);
// router.route("/login").post(registerUser);

//In both the format we can write for the routes.

router.post("/", registerUser);
router.post("/login", authUser);
// These authUser or  registerUser are all put inside the controller called as the userController.

module.exports = router;
