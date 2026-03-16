import { Router } from "express";
import { getAllPost, deletePost, createPost, patchPost, getPostById, getPostsByUser } from "../controllers/posts.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";
import upload from "../middlewares/upload.middleware.js";



const router = Router()


router.get("/",getAllPost, [authenticationUser, authorizationUser(["user"])] );
router.post("/", [authenticationUser, authorizationUser(["store","user"])], upload.single('postImg'), createPost)
router.delete("/:id", deletePost, [authenticationUser, authorizationUser(["user"])]);
router.patch("/:id", patchPost, [authenticationUser, authorizationUser(["user"])])
router.get("/:id", getPostById, [authenticationUser, authorizationUser(["user"])])
router.get('/user/:userId', [authenticationUser, authorizationUser(["store","user"])], getPostsByUser)

export default router