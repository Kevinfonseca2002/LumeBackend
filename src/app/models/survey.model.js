import { Schema, model } from "mongoose";


const surveySchema = new Schema ({
    surveyId:{
    type: Number
    },
    rating:{
        type: Number,
        required: true,
        default: 5,
        minlenght: [0, "Rating can´t be lower than 0"],
        maxlength: [5, "Rating can´t be higher than 5"]
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