const express = require("express");
const { modelName } = require("../models/SavingsAccount.models");

const SavingsAccount = require("../models/SavingsAccount.models");

const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const item = await modelName.create(req.body);
        return res.status(201).send(item);
    } catch (error) {
        return res.status(500).send({message:error.message});
    }
})