const mongoose = require("mongoose");

const SavingsAccountSchema = new mongoose.Schema(
    {
        account_number: {type: Number , required:true,unique:true},
        balance:{type: Number , required:true},
        interestRate:{type: Number , required:true},
        createdAt: { type: Date, required: true, default: Date.now },
        updatedAt:{ type: Date, required: true, default: Date.now },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },
    },
    {
        versionKey:false,
    }

);
const SavingsAccount = mongoose.model("user", SavingsAccountSchema);
module.exports = SavingsAccount;

