import mongoose from "mongoose";

const Schema = mongoose.Schema({
    name:{
        type:String,
        default:'کاربر بوتونیکا'
    },
    phone:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:false
    },
    role:{
        type:String,
        default:"USER"
    },
    refreshToken:String
})

const model = mongoose.models.User || mongoose.model('User', Schema)
export default model