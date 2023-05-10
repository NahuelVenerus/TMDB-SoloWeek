const Sequelize = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");

class User extends Sequelize.Model {
  hash = (password, salt) => bcrypt.hash(password, salt);

  validatePassword(password) {
    return this.hash(password, this.salt).then(
      (hash) => hash === this.password
    );
  }
}

User.init(
  {
    name: { type: Sequelize.STRING, allowNull: false },
    lastname: { type: Sequelize.STRING, allowNull: false },
    username: { type: Sequelize.STRING, allowNull: false, unique: true },
    password: { type: Sequelize.STRING, allowNull: false },
    salt: { type: Sequelize.STRING },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
      validate: { isEmail: true },
    },
  },
  { sequelize: db, modelName: "user" }
);

User.addHook("beforeValidate", (user) => {
  user.salt = bcrypt.genSaltSync(8);
  return user
    .hash(user.password, user.salt)
    .then((hash) => (user.password = hash));
});

module.exports = User;
