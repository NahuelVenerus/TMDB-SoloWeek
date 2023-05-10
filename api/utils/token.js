const jwt = require("jsonwebtoken");

const SECRET = "I am so secret";

function generateToken(payload) {
  return (token = jwt.sign({ user: payload }, SECRET, {
    expiresIn: "1h",
  }));
}

const validateToken = (token) => {
  return jwt.verify(token, SECRET);
};

function validateAuth(req, res, next) {
  const token = req.cookies.user;

  console.log("token", token);
  const { user } = validateToken(token);
  console.log("user", user);
  req.user = user;
  if (user) return next();
  else res.sendStatus(401);
}

module.exports = { generateToken, validateToken, validateAuth };
