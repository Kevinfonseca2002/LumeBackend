import { Schema, model } from "mongoose";

const userSchema = new Schema ({
    img:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    },
    location:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },


},{timestamps:true})

const userModel= model('users', userSchema)

export default userModel