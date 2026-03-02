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
    attendees:{
        type: String,
        required:false
    },
    surveyId:{
        type: Schema.Types.ObjectId,
        ref: 'surveys'
    }

},{timestamps:true})

const eventModel = model('events',eventSchema)

export default eventModel