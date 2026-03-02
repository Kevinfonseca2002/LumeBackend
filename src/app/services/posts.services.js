import postModel from "../models/post.model.js";

const dbCreatePost = async (data) => {
    return await postModel.create(data);
}

const dbAllPost = async () => {
    return await postModel.find()
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
export {
        dbAllPost,
        dbCreatePost,
        dbDeletePost,
        dbPatchPost,
        dbPostById
    };