const express = require("express");
const db = require("./db.js");
const routes = require("./routes");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: "http://localhost:3000", credentials: true }));

app.use("/api", routes);

const PORT = 3001;

db.sync({ force: false }).then(() =>
  app.listen(PORT, () => console.log(`Listening on port :${PORT}`))
);
