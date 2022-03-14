const mongoose=require("mongoose")

const masterSchema= new mongoose.Schema(
    {
    balance:{
        type:Number,
        require:true
    },
    createdAt:{
        type:Date,
        require:true,
        Default:Date.now

    },
    updateAt:{
        type:Date,
        require:true,
        Default:Date.now

    }
},
    {
        versionKey:false
    }

    )

    const masteracc =mongoose.model("masteracc",masterSchema)