import { Router } from "express";
import { createAttendee, deleteAttendees, getAllAttendees } from "../controllers/attendees.controller.js";
import authenticationUser from "../middlewares/authentication.middleware.js";
import authorizationUser from "../middlewares/authorization.middleware.js";


const router = Router();

//Routes here

router.get("/",[authenticationUser, authorizationUser(["store, user"])] ,getAllAttendees );
router.post("/", [authenticationUser, authorizationUser(["store, user"])],createAttendee)
router.delete("/:id",[authenticationUser, authorizationUser(["store, user"])],deleteAttendees);

export default router;