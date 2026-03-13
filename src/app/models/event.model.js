import { Schema, model } from "mongoose";

const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventDescription:{
        type: String,
        required:true
    },
    date:{
        type: Date,
        required:true,
    },
    time:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required:true
    },
    storeId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    category: {
        type: String,
        enum: ["music", "food", "sports", "art", "tech", "other"],
        default: "other"
    },
    isPublic: {
        type: Boolean,
        default: true
    },
    surveyId:{
        type: Schema.Types.ObjectId,
        ref: 'surveys'
    }

},{timestamps:true})

const eventModel = model('events',eventSchema)

export default eventModel