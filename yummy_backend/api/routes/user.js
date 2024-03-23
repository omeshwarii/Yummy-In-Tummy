const express = require("express");
const router = express.Router();

const UserController = require('../controllers/user');

router.get("/menu", UserController.get_menu);
module.exports = router;
