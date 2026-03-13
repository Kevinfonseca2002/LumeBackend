import { Router } from "express";
import { createAttendee, deleteAttendees, getAllAttendees } from "../controllers/attendees.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";


const router = Router();

//Routes here

router.get("/", getAllAttendees, [authenticationUser, authorizationUser(["store, user"])]);
router.post("/", createAttendee, [authenticationUser, authorizationUser(["store, user"])])
router.delete("/:id",deleteAttendees, [authenticationUser, authorizationUser(["store, user"])]);

export default router;