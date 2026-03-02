import { Schema, model } from "mongoose";

const postSchema = new Schema ({
    userImg: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    userName:{
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    eventName:{
        type: Schema.Types.ObjectId,
        ref: 'events'
    },
    comment:{
        type: String,
        required: false
    },
    postImg:{
        type: String

    }

},{timestamps: true})

const postModel = model("posts", postSchema)

export default postModel