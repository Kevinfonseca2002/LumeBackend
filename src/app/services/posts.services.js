import postModel from "../models/post.model.js";

const dbCreatePost = async (data) => {
    return await postModel.create(data);
}

const dbAllPost = async () => {
    return await postModel.find().populate(['userName', 'eventName'])
}

const dbDeletePost = async (data) => {
    return await postModel.findByIdAndDelete(data);
}

const dbPatchPost = async (id, data) => {
    return await postModel.findByIdAndUpdate(id, data, {new: true});
}

const dbPostById = async (data) => {
    return await postModel.findById(data);
}

const dbGetPostsByUser = async (userId) => {
    return await postModel.find({ userName: userId })
        .populate('userName', 'userName userImg')
        .populate('eventName', 'eventName eventDescription')
        .sort({ createdAt: -1 })
}
export {
        dbAllPost,
        dbCreatePost,
        dbDeletePost,
        dbPatchPost,
        dbPostById,
        dbGetPostsByUser
    };