const express = require("express");

const usercontroller = require("./controller/user.controller");
const bookcontroller = require("./controller/book.controller");
const commentcontroller = require("./controller/coment.controller");

const app = express();
app.use(express.json());

app.use("/user",usercontroller);
app.use("/book",bookcontroller);
app.use("/comment",commentcontroller);


module.exports = app;