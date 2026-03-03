import { Router } from "express";
import { deleteAllUsers,getAllUsers,getUserById,createUser,patchUser,deleteUserById } from "../controllers/user.controller.js";
import authorizationUser from "../middlewares/authorization.middleware.js";
import authenticationUser from "../middlewares/authentication.middleware.js";


const router = Router();

//Routes here

router.get("/", getAllUsers, [authenticationUser, authorizationUser(["store","user"])])
router.post("/", createUser,[authenticationUser, authorizationUser(["store","user"])]) 
router.delete("/", deleteAllUsers, [authenticationUser, authorizationUser(["store","user"])])
router.delete("/:id", deleteUserById, [authenticationUser, authorizationUser(["store","user"])])
router.patch("/:id", patchUser, [authenticationUser, authorizationUser(["store","user"])])
router.get("/:id", getUserById, [authenticationUser, authorizationUser(["store","user"])])


export default router;