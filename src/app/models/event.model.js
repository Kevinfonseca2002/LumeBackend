import { Schema, model } from "mongoose";

const eventSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required:true,
    },
    time:{
        type: Number,
        required: true
    },
    attendees:{
        type: Number,
        required: false,
        default: 0,
        minLenght: 0
    },
    participation:{
        type: Number,
        required: false,
        default: 0,
        minLenght: 0
    },

    surveyId:{
        type: Schema.Types.ObjectId,
        ref: 'surveys'
    }

},{timestamps:true})

const eventModel = model('events',eventSchema)

export default eventModel