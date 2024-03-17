const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');

router.put("/signup", UserController.user_signup);

router.post("/login", UserController.user_login);

router.get("/menu", UserController.get_menu);
module.exports = router;
