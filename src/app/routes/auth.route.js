import { Router } from "express";
import { loginUser, renewToken } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/user.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";
import upload from "../middlewares/upload.middleware.js";

const router = Router();


router.post("/login",loginUser)
router.post("/register", upload.single('userImg'), createUser) 
router.get("/renew-token",[authenticationUser, authorizationUser(["store","user"])], renewToken)

export default router 