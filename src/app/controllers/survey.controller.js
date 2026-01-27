
import { dbCreateSurvey, dbDeleteSurvey, dbGetAllSurveys, dbGetSurveyById, dbUpdateSurvey } from "../services/surveys.service.js";

const createSurvey = async (req,res)=>{

    try {
        const input = req.body;
    
        const newSurvey = await dbCreateSurvey (input);
    
        res.status(201).json({
            message: "Survey created successfully",
            survey: newSurvey
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error creating survey",
            error: error.message
        });
        
    }


}

const deleteSurvey = async (req,res)=>{
    try {
        const data = req.params.id;

        await dbDeleteSurvey(data);

        res.status(200).json({
            message: "Survey deleted successfully"
        })
    } catch (error) {
        
        res.status(500).json({
            message: "Error deleting survey",
            error: error.message
        });
    }

}

const getAllSurveys = async (req,res)=>{
    try {
        
        const surveys = await dbGetAllSurveys();

        res.status(200).json({
            message: "Surveys retrieved successfully",
            surveys: surveys
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error retrieving surveys",
            error: error.message
        });
    }
}

const getSurveyById = async (req,res)=>{
  try {
    const id = req.params.id;

    const survey = await dbGetSurveyById(id);

    res.status(200).json({
        message: "Survey retrieved successfully",
        survey: survey
    })
    
  } catch (error) {

    res.status(500).json({
        message: "Error retrieving survey",
        error: error.message
    });
    
  }
}

const patchSurvey = async (req,res)=>{
    try {
        const id = req.params.id;
        const input = req.body;

        const updatedSurvey = await dbUpdateSurvey(id, input);

        res.status(200).json({
            message: "Survey updated successfully",
            survey: updatedSurvey
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error updating survey",
            error: error.message
        });
        
    }
}

export {
    createSurvey,
    deleteSurvey,
    getAllSurveys,
    getSurveyById,
    patchSurvey


}