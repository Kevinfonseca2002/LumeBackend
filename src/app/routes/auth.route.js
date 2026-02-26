import { Router } from "express";
import { loginUser, renewToken } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/user.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";

const router = Router();


router.post("/login",loginUser)
router.post("/register", createUser) 
router.get("/renew-token",[authenticationUser, authorizationUser(process.env.AUTHORIZED_ROLES)], renewToken)

export default router 