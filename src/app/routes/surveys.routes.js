import { Router } from "express";
import { createSurvey, patchSurvey, deleteSurvey, getSurveyById, getAllSurveys } from "../controllers/survey.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";


const router = Router();

//Routes here

router.get("/",[authenticationUser, authorizationUser(["store"])],getAllSurveys, )
router.post("/",[authenticationUser, authorizationUser(["store"])],createSurvey, )
router.delete("/:id",[authenticationUser, authorizationUser(["store"])], deleteSurvey, )
router.patch("/:id",[authenticationUser, authorizationUser(["store"])], patchSurvey, )
router.get("/:id", [authenticationUser, authorizationUser(["store"])],getSurveyById, )

export default router;