const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// dotenv.config({ path: ".env" });
const myconfig = require("../lib/config");
// console.log(MongoUrl);

mongoose.connect(myconfig.MongoUrl, {
  useNewUrlParser: true,
  // useCreateIndex: true,
});
