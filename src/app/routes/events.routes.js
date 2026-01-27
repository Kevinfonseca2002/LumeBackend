import { Router } from "express";
import { createEvents, getAllEvents, deleteEvent, patchEvent, getEventById } from "../controllers/event.controller.js";


const router = Router();

//Routes here

router.get("/", getAllEvents);
router.post("/", createEvents)
router.delete("/:id", deleteEvent);
router.patch("/:id",patchEvent)
router.get("/:id", getEventById)

export default router;