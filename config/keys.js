require('dotenv').config();
const secret = `${process.env.DB_SECRET}`;

module.exports = {
    secretOrKey: secret
  };