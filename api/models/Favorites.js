const Sequelize = require("sequelize");
const db = require("../db");
const noImg = require("../../src/assets/Image Not Found Placeholder.jpg");

class Favorites extends Sequelize.Model {}

Favorites.init(
  {
    title: { type: Sequelize.STRING, allowNull: false },
    poster: { type: Sequelize.STRING, defaultValue: noImg },
    user: { type: Sequelize.JSON, allowNull: false },
  },
  { sequelize: db, modelName: "favorites" }
);

module.exports = Favorites;
