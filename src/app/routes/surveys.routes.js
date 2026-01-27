import { Router } from "express";
import { createSurvey, patchSurvey, deleteSurvey, getSurveyById, getAllSurveys } from "../controllers/survey.controller.js";


const router = Router();

//Routes here

router.get("/",(req, res),getAllSurveys)
router.post("/",(req, res),createSurvey)
router.delete("/:id",(req, res), deleteSurvey)
router.patch("/:id",(req, res), patchSurvey)
router.get("/:id",(req, res), getSurveyById)

export default router;