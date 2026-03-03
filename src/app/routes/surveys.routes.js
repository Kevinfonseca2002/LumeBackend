import { Router } from "express";
import { createSurvey, patchSurvey, deleteSurvey, getSurveyById, getAllSurveys } from "../controllers/survey.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";


const router = Router();

//Routes here

router.get("/",getAllSurveys, [authenticationUser, authorizationUser(["store"])])
router.post("/",createSurvey, [authenticationUser, authorizationUser(["store"])])
router.delete("/:id", deleteSurvey, [authenticationUser, authorizationUser(["store"])])
router.patch("/:id", patchSurvey, [authenticationUser, authorizationUser(["store"])])
router.get("/:id", getSurveyById, [authenticationUser, authorizationUser(["store"])])

export default router;