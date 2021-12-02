const dotenv = require("dotenv");

const path = require("path");
const mypath = path.join(__dirname, "../config/.env");
// require("../config/.env")
dotenv.config({ path: mypath });

const myconfig = {
  Port: process.env.PORT,
  MongoUrl: process.env.MONGODB_URI,
  MYKEY: process.env.SENDGRID_API_KEY,
  JWT_SEC: process.env.JWT_SECRET,
};

module.exports = myconfig;
