const User = require("./User");
const Fav = require("./Favorites");

User.belongsTo(Fav, { as: "user" });

module.exports = { User, Fav };
