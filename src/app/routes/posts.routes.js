import { Router } from "express";
import { getAllPost, deletePost, createPost, patchPost, getPostById } from "../controllers/posts.controller.js";


const router = Router()


router.get("/",getAllPost );
router.post("/", createPost)
router.delete("/:id", deletePost);
router.patch("/:id", patchPost)
router.get("/:id", getPostById)

export default router