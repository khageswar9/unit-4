const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName:{type:String,required:true},
    lastName: {type:String,required:false},
    age: {type:Number,required:true},
    email:{type:Number,required:true,unique:true},
    profileImages:{type:String,required:true,unique:true},
},{
    versionKey:false,
    timestamps:true,
},
);
const user = mongoose.model("user",userSchema);
module.exports =  user;