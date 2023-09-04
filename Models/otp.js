const mongoose  = require('mongoose');

const OtpSchema = new mongoose.OtpSchema({
    Email:{
        type: String,
        required : true
    },
    otp:{
        type:String,
        required:true
    },
    expiresIn:{
        type:Number,
        required:true
    },
    },
    { timestamps: true },
)