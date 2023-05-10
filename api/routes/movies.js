const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  Movie.findAll()
    .then((movies) => {
      console.log(movies);
      res.status(200).send(movies);
    })
    .catch(console.error);
});

router.get("/:id", (req, res) => {
  Movie.findOne({ where: { id: req.params.id } })
    .then((movie) => {
      console.log(movie);
      res.status(201).send(movie);
    })
    .catch(console.error);
});

module.exports = router;
