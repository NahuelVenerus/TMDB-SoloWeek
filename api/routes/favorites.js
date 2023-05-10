const express = require("express");
const Favorites = require("../models/Favorites");
const router = express.Router();

router.get("/", (req, res) => {
  Favorites.findAll()
    .then((fav) => {
      res.status(200).send(fav);
    })
    .catch(console.error);
});

router.get("/:id", (req, res) => {
  Favorites.findOne({ where: { id: req.params.id } })
    .then((fav) => {
      res.status(201).send(fav);
    })
    .catch(console.error);
});

// router.post("/add", (req, res) => {
//   console.log("body", req.body);
//   const { id, original_title, name, poster_path } = req.body;
//   const title = original_title || name;
//   Favorites.create().then((fav) => res.status(201).send(fav));
// });

module.exports = router;
