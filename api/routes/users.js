const express = require("express");
const User = require("../models/User");
const {
  generateToken,
  validateToken,
  validateAuth,
} = require("../utils/token");
const router = express.Router();

router.get("/", (req, res) => {
  User.findAll()
    .then((users) => res.status(200).send(users))
    .catch(() => res.sendStatus(404));
});

// router.get("/user/:id", (req, res) => {
//   User.findOne({ where: { id: req.params.id } })
//     .then((user) => res.status(200).send(user))
//     .catch(() => res.sendStatus(404));
// });

router.post("/signup", (req, res) => {
  const { username } = req.body;
  User.findOrCreate({
    where: { username: username },
    defaults: req.body,
  })
    .then((user) => res.status(201).send(user))
    .catch((err) => {
      console.error(err);
      res.status(401).send("User already exists");
    });
});

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  User.findOne({ where: { username: username } }).then((user) => {
    if (!user) return res.sendStatus(403);
    user.validatePassword(password).then((isValid) => {
      if (!isValid) return res.sendStatus(402);
      const payload = {
        username: user.dataValues.username,
        password: user.dataValues.password,
      };
      const token = generateToken(payload);
      res.cookie("user", token);
      res.status(201).send(payload);
    });
  });
});

router.get("/secret", validateAuth, (req, res) => {
  console.log(req.cookies.user);
  res.send(validateToken(req.cookies.user));
});

router.get("/logout", (req, res) => {
  console.log("Hola");
  res.clearCookie("user");
  res.sendStatus(204);
});

router.get("/me", validateAuth, (req, res) => {
  res.send(req.user);
});

module.exports = router;
