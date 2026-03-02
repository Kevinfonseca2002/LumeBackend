import userModel from "../models/user.model.js";

const dbGetAllUsers = async ()=>{
    return await userModel.find()
}
const dbDeleteAllUser = async ()=>{
    return await userModel.deleteMany()
}
const dbGetUserById = async (data)=>{
    return await userModel.findById(data)
}
const dbDeleteUserById = async (data)=>{
    return await userModel.findByIdAndDelete(data)
}
const dbCreateUser = async (input)=>{
    return await userModel.create(input)
}
const dbPatchUser= async (data,input)=>{
    return await userModel.findByIdAndUpdate(data,input,{new:true})
}
const dbGetUserByEmail = async (email)=>{
    return await userModel.findOne({email})
}



export {
    dbGetUserByEmail,
    dbDeleteAllUser,
    dbGetAllUsers,
    dbGetUserById,
    dbDeleteUserById,
    dbCreateUser,
    dbPatchUser
}