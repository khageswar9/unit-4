const mongoose = require("mongoose");

const publictionSchema = new mongoose.Schema({
    name: {type:String,required:true},
},{
    versionKey:false,
    timestamps:true,
},
);
const publiction = mongoose.model("publication",publictionSchema);
module.exports =  publiction;