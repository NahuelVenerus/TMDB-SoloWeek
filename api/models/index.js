const User = require("./User");
const Favorites = require("./Favorites");

Favorites.belongsTo(User, { as: "author" });

module.exports = { User, Favorites };
