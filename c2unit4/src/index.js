const express = require("express");
const mastercontroller = require("./controllers/masteraccunt");
const SavingsAccount = require("./controllers/savingaccount");


const app = express();
app.use(express.json());
app.use("/SavingsAccount", SavingsAccount);
app.use("/MasterAccount", mastercontroller);

module.exports = app;