const bcrypt = require("bcrypt");
var { expressjwt: jwt } = require("express-jwt");

const hashPassword = (password) => {
  return bcrypt.hashSync(password, 10);
};

const comparePassword = (password, hashed) => {
  return bcrypt.compare(password, hashed);
};

const authorizedUser = jwt({
  secret: process.env.JWT_SECRET,
  algorithms: ["HS256"],
});

// Export the middleware directly
module.exports = {
  hashPassword,
  comparePassword,
  authorizedUser,
};