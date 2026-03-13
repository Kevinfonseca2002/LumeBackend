import { Router } from "express";
import { createEvents, getAllEvents, deleteEvent, patchEvent, getEventById, getStoreEvents } from "../controllers/event.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";


const router = Router();

//Routes here

router.get("/", getAllEvents, [authenticationUser, authorizationUser(["store"])]);
router.post("/store/:storeId", createEvents, [authenticationUser, authorizationUser(["store"])])
router.delete("/:id", deleteEvent, [authenticationUser, authorizationUser(["store"])]);
router.patch("/:id",patchEvent, [authenticationUser, authorizationUser(["store"])])
router.get("/:id", getEventById, [authenticationUser, authorizationUser(["store","user"])])
router.get("/store/:storeId/events", getStoreEvents,[authenticationUser, authorizationUser(["store","user"])] )

export default router;