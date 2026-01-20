import userModel from "../models/user.model";

const dbGetAllUsers = async ()=>{
    return await userModel.find()
}
const dbDeleteAllUser = async ()=>{
    return await userModel.deleteMany()
}
const dbGetUserById = async (data)=>{
    return await userModel.findOne({data})
}
const dbDeleteUserById = async (data)=>{
    return await userModel.deleteOne({data})
}
const dbCreateUser = async (input)=>{
    return await userModel.create(input)
}
const dbPatchUser= async (data,input)=>{
    return await userModel.updateOne({data},input,{new:true})
}



export {
    dbDeleteAllUser,
    dbGetAllUsers,
    dbGetUserById,
    dbDeleteUserById,
    dbCreateUser,
    dbPatchUser
}