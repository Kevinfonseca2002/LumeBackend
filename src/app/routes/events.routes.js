import { Router } from "express";
import { createEvents, getAllEvents, deleteEvent, patchEvent, getEventById, getStoreEvents, getEventsByStatus, updateEventStatus, addAttendee, removeAttendee } from "../controllers/event.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";
import upload from "../middlewares/upload.middleware.js";


const router = Router();

//Routes here

router.get("/", [authenticationUser, authorizationUser(["store"])],getAllEvents );
router.post("/store/:storeId", [authenticationUser, authorizationUser(["store"])], upload.single('eventImg'), createEvents)
router.delete("/:id", [authenticationUser, authorizationUser(["store"])],deleteEvent );
router.patch("/:id",[authenticationUser, authorizationUser(["store"])],patchEvent)
router.get("/:id", [authenticationUser, authorizationUser(["store","user"])], getEventById )
router.get("/store/:storeId", [authenticationUser, authorizationUser(["store","user"])],getStoreEvents )
router.get('/store/:storeId/:status', [authenticationUser, authorizationUser(["store","user"])],getEventsByStatus)
router.patch('/status/:eventId', [authenticationUser, authorizationUser(["store","user"])],updateEventStatus)
router.post('/attendee/:eventId', [authenticationUser, authorizationUser(["store","user"])],addAttendee)
router.delete('/attendee/:eventId', [authenticationUser, authorizationUser(["store","user"])], removeAttendee)


export default router;