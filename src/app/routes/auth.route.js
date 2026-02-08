import { Router } from "express";
import { loginUser } from "../controllers/auth.controller.js";
import { createUser } from "../controllers/user.controller.js";

const router = Router();


router.post("/login",loginUser)
router.post("/register", createUser) 
// router.get("/renew-token",[authentication])

export default router 