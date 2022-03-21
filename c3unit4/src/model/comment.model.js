const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    body: {type:String,required:true},
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
        required: true,
      },
},{
    versionKey:false,
    timestamps:true,
},
);
const comment = mongoose.model("comment",commentSchema);
module.exports =  comment;