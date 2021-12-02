const sgMail = require("@sendgrid/mail");
const myconfig = require("../lib/config");

sgMail.setApiKey(myconfig.MYKEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "nalleengineer@gmail.com",
    subject: "Thanks for joining in!",
    text: `Welcome to the app, ${name}. Let me know how you get along with app`,
  });
};

const sendCancelEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "nalleengineer@gmail.com",
    subject: "Sorry to see you go",
    text: `GoodBye, ${name}. I hope to see you back sometime soon.`,
  });
};

module.exports = {
  sendWelcomeEmail,
  sendCancelEmail,
};
