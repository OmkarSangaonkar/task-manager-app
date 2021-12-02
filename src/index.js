const express = require("express");
const app = express();
require("./db/mongoose");
const myconfig = require("./lib/config");

const userRouter = require("./routers/user");
const taskRouter = require("./routers/task");

const PORT = myconfig.Port;

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
