import { dbAllAttendees, dbCreateAttendees, dbDeleteAttendees } from "../services/attendees.service.js";

const createAttendee = async (req, res) => {
    try {
        const input = req.body;
    
        const createdAttendee =  await dbCreateAttendees(input);

        res.status(201).json({
            message: "Attendee created successfully",
            attendee: createdAttendee
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error creating attendee",
            error: error
        });
    }
}

const getAllAttendees = async (req, res) => {
    try {
        
        const allAttendees = await dbAllAttendees()

        res.status(201).json({
            message: `All attendees deployed`,
            allAttendees
        })
        
    } catch (error) {

        res.json({
            msg:"error with the attendee"
        })
        
    }
}

const deleteAttendees = async (req,res) => {
    try {
        const data = req.params.id
    
        const attendeetDeleted = await dbDeleteAttendees(data)
    
        res.status(200).json({
            message: "Attendee deleted successfully",
            attendeetDeleted
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error deleting Attendee, please try again",
            error: error
        })        
    }
}

export {
    createAttendee,
    getAllAttendees,
    deleteAttendees
}