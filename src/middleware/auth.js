const jwt = require("jsonwebtoken");
const User = require("../models/user");
const myconfig = require("../lib/config");

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, myconfig.JWT_SEC);
    const user = await User.findOne({
      _id: decoded._id,
      "tokens.token": token,
    });

    if (!user) {
      throw new Error();
    }

    req.token = token;
    req.user = user;

    next();
  } catch (e) {
    res.status(401).send({ error: "please Authenticate" });
  }
};

module.exports = auth;
