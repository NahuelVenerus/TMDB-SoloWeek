const express = require("express");
const users = require("./users");
const favorites = require("./favorites");
const router = express.Router();

router.use("/users", users);
router.use("/favorites", favorites);

module.exports = router;
