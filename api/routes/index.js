const express = require("express");
const users = require("./users");
const movies = require("./movies");
const router = express.Router();

router.use("/users", users);
router.use("/movies", movies);

module.exports = router;
