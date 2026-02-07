import { Schema, model } from "mongoose";

const userSchema = new Schema ({
    img:{
        type:String,
    },
    role: {
        type: String,
        enum: ["store","user"],
        required: [true, 'Rol is required']
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
    facebookLink:{
        type: String,
        required: false
    },
    instagramLink:{
        type: String,
        required: false
    },
    xLink:{
        type:String,
        required: false
    },
    tiktokLink:{
        type:String,
        required: false
    }


},{timestamps:true})

const userModel= model('users', userSchema)

export default userModel