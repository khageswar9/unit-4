const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
    likes:{type:String,required:false,default:0},
    coverImage: {type:String,required:true},
    content: {type:String,required:true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
        unique:true,
      },
    publicationID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "publication",
        required: true,
    },
    commentID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "comment",
        required: true,
    },
},{
    versionKey:false,
    timestamps:true,
},
);
const book = mongoose.model("book",bookSchema);
module.exports =  book;