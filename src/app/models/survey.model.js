import { Schema, model } from "mongoose";


const surveySchema = new Schema ({
    surveyId:{
    type: Number
    },
    rating:{
        type: Number,
        required: true,
        default: 5
    },
    title:{
        type: String,
        required: false
    },
    comment:{
        type: String,
        required: false
    }
})

const surveyModel = model ('surveys', surveySchema)

export default surveyModel