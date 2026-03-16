import { Router } from "express";
import { createEvents, getAllEvents, deleteEvent, patchEvent, getEventById, getStoreEvents, getEventsByStatus, updateEventStatus, addAttendee, removeAttendee } from "../controllers/event.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";
import upload from "../middlewares/upload.middleware.js";


const router = Router();

//Routes here

router.get("/", getAllEvents, [authenticationUser, authorizationUser(["store"])]);
router.post("/store/:storeId", [authenticationUser, authorizationUser(["store"])], upload.single('eventImg'), createEvents)
router.delete("/:id", deleteEvent, [authenticationUser, authorizationUser(["store"])]);
router.patch("/:id",patchEvent, [authenticationUser, authorizationUser(["store"])])
router.get("/:id", getEventById, [authenticationUser, authorizationUser(["store","user"])])
router.get("/store/:storeId", getStoreEvents,[authenticationUser, authorizationUser(["store","user"])] )
router.get('/store/:storeId/:status', getEventsByStatus,[authenticationUser, authorizationUser(["store","user"])])
router.patch('/status/:eventId', updateEventStatus,[authenticationUser, authorizationUser(["store","user"])])
router.post('/attendee/:eventId', addAttendee,[authenticationUser, authorizationUser(["store","user"])])
router.delete('/attendee/:eventId', removeAttendee,[authenticationUser, authorizationUser(["store","user"])])


export default router;