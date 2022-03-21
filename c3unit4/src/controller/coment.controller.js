const express = require("express");

const comment = require("../model/comment.model")
const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const comments =  await comment.create(req.body);
        return res.status(200).send(comments);
    } catch (error) {
        console.log('error:', error)
    }
});
module.exports =  router;