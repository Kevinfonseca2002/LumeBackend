import { Router } from "express";
import { getAllPost, deletePost, createPost, patchPost, getPostById, getPostsByUser } from "../controllers/posts.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";
import upload from "../middlewares/upload.middleware.js";



const router = Router()


router.get("/",[authenticationUser, authorizationUser(["user"])],getAllPost );
router.post("/", [authenticationUser, authorizationUser(["store","user"])], upload.single('postImg'), createPost)
router.delete("/:id",[authenticationUser, authorizationUser(["user"])] ,deletePost,);
router.patch("/:id",[authenticationUser, authorizationUser(["user"])] ,patchPost)
router.get("/:id",[authenticationUser, authorizationUser(["user"])] ,getPostById)
router.get('/user/:userId', [authenticationUser, authorizationUser(["store","user"])], getPostsByUser)

export default router