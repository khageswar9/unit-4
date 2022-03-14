const mongoose = require("mongoose");

const BranchDetailSchema = new mongoose.Schema(
    {
        name:{type: String , required:true},
        address: {type: String , required:true},
        IFSC:{type: String , required:true},
        MICR:{type: Number , required:true},
        createdAt: { type: Date, required: true, default: Date.now },
        updatedAt:{ type: Date, required: true, default: Date.now },
    },
    {
        versionKey:false,
    }
);
const BranchDetail = mongoose.model("user", BranchDetailSchema);
module.exports = BranchDetail;
