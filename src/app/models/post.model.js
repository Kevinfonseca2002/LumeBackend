import { Schema, model } from "mongoose";

const postSchema = new Schema ({
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
        required: true
    },
    postImg:{
        type: String

    }

},{timestamps: true})

const postModel = model("posts", postSchema)

export default postModel