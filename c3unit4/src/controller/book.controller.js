const express = require("express");

const book = require("../model/books.model")
const router = express.Router();

router.post("", async(req,res)=>{
    try {
        const book =  await book.create(req.body);
        return res.status(200).send(book);
    } catch (error) {
        console.log('error:', error)
    }
});
router.get("", async(req,res)=>{
    try {
        const page = req.query.page || 1;
        const pagesize = req.query.pagesize || 10;
        const skip = (page - 1) * pagesize;
        const book =  await book.find()
        .skip(skip)
      .limit(pagesize)
      .lean()
      .exec();
      return res.status(200).send(book);
    } catch (error) {
        console.log('error:', error)
    }
});
module.exports =  router;