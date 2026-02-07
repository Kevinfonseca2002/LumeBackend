import { Router } from "express";
import { createSurvey, patchSurvey, deleteSurvey, getSurveyById, getAllSurveys } from "../controllers/survey.controller.js";


const router = Router();

//Routes here

router.get("/",getAllSurveys)
router.post("/",createSurvey)
router.delete("/:id", deleteSurvey)
router.patch("/:id", patchSurvey)
router.get("/:id", getSurveyById)

export default router;