import surveyModel from "../models/survey.model.js";

const dbCreateSurvey = async (data) => {
    return await surveyModel.create(data);
}

const dbDeleteSurvey = async (id) => {
    return await surveyModel.findByIdAndDelete(id);
}

const dbGetAllSurveys = async () => {
    return await surveyModel.find();
}

const dbGetSurveyById = async (id) => {
    return await surveyModel.findById(id);
}

const dbUpdateSurvey = async (id, data) => {
    return await surveyModel.findByIdAndUpdate(id, data, { new: true });
}


export {
    dbCreateSurvey,
    dbDeleteSurvey,
    dbGetAllSurveys,
    dbGetSurveyById,
    dbUpdateSurvey
}