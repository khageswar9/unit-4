const mongoose =require ("mongoose")

    const fixedAccountSchema=new mongoose.Schema({
        account_number:{
            type:Number,
            require:true
        },balance:{
            type:Number,
            require:true

        },
        interestRate:{
            type:Number,
            require:true

        },startDate:{
            type:Number,
            require:true
        },
        maturityDate:{
            type:Number,
            require:true
        },
        createdAt:{
            type:Date,
        require:true,
        Default:Date.now

        },updateAt:{
            type:Date,
        require:true,
        Default:Date.now

        },
        userId:{
            type: mongoose.Schema.Types.ObjectId,
            ref:"user",
            required:true,
        },

    })
    const fixedacc =mongoose.model("fixedacc",fixedAccountSchema)