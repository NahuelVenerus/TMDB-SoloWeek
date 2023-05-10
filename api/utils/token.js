const jwt = require("jsonwebtoken");

const SECRET = "Iamsosecret";

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
  const { user } = validateToken(token);
  req.user = user;
  if (user) return next();
  else res.sendStatus(401);
}

module.exports = { generateToken, validateToken, validateAuth };
