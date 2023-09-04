const Jwt = require("jsonwebtoken");
const secretKey = "secretkey";

const config = process.env;

const verifyTokens = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) {
    return res.status(403).send("A token is required for authentication");
  }
  try {
    const decoded = Jwt.verify(token, secretKey);
    req.user = decoded;
  } catch (err) {
    return res.status(401).send("Invalid Token");
  }
  return next();
};

module.exports = verifyTokens;
