import mongoose from "mongoose";

const Schema= mongoose.Schema({
    phone:{
        type:String,
        default:'کاربر بوتونیکا'
    },
    code:{
        type:String,
        required:true
    },
    expTime:{
        type:Number,
        required:true
    },
    times:{
        type:Number,
        default:0
    }
})
const model = mongoose.models.Otp || mongoose.model('Otp', Schema)
export default model