import { Router } from "express";
import { deleteAllUsers,getAllUsers,getUserById,createUser,patchUser,deleteUserById } from "../controllers/user.controller.js";
import authorizationUser from "../middlewares/authorization.middleware.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import upload from "../middlewares/upload.middleware.js";


const router = Router();

//Routes here

router.get("/",      [authenticationUser, authorizationUser(["store","user"])], getAllUsers)
router.post("/",     [authenticationUser, authorizationUser(["store","user"])], createUser)
router.delete("/",   [authenticationUser, authorizationUser(["store","user"])], deleteAllUsers)
router.delete("/:id",[authenticationUser, authorizationUser(["store","user"])], deleteUserById)
router.patch("/:id", [authenticationUser, authorizationUser(["store","user"])], upload.single('userImg'), patchUser)
router.get("/:id",   [authenticationUser, authorizationUser(["store","user"])], getUserById)


export default router;