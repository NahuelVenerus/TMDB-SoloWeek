const Sequelize = require("sequelize");

const db = new Sequelize("tmdb", null, null, {
  host: "localhost",
  dialect: "postgres",
  logging: false,
});

// const db = new Sequelize(
//   "tmdb_0n1h",
//   "tmdb_0n1h_user",
//   "K9vgKaAYi0vdupc65yyrqCyhYj38i7Pf",
//   {
//     host: "dpg - ch9tflu7avjdl28nfo40 - a",
//     dialect: "postgres",
//     logging: false,
//   }
// );

module.exports = db;
