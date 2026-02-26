import { Router } from "express";
import { loginUser } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/user.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";

const router = Router();


router.post("/login",loginUser)
router.post("/register", createUser) 
router.get("/renew-token",[authenticationUser])

export default router 