import { Router } from "express";
import { getAllPost, deletePost, createPost, patchPost, getPostById } from "../controllers/posts.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";


const router = Router()


router.get("/",getAllPost, [authenticationUser, authorizationUser(["user"])] );
router.post("/", createPost, [authenticationUser, authorizationUser(["user"])])
router.delete("/:id", deletePost, [authenticationUser, authorizationUser(["user"])]);
router.patch("/:id", patchPost, [authenticationUser, authorizationUser(["user"])])
router.get("/:id", getPostById, [authenticationUser, authorizationUser(["user"])])

export default router