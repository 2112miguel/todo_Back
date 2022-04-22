const jwt = require("jsonwebtoken");
const config = require("./config");

const sing = async (playload) => {
  return await jwt.sign(playload, config.app.jwt, { expiresIn: "1h" });
};

const verify = async (token) => {
  return await jwt.verify(token, config.app.jwt);
};

module.exports = {
  sing,
  verify,
};
