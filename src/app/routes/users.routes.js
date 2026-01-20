import { Router } from "express";
import { deleteAllUsers,getAllUsers,getUserById,createUser,patchUser,deleteUserById } from "../controllers/user.controller";


const router = Router();

//Routes here

router.get("/", getAllUsers)
router.post("/", createUser)
router.delete("/", deleteAllUsers)
router.delete("/:id", deleteUserById)
router.patch("/:id", patchUser)
router.get("/:id", getUserById)


export default router;