import { dbCreateEvent, dbAllEvents, dbDeleteEvent, dbPatchEvent, dbEventById } from "../services/events.service.js";

const createEvents = async (req, res) => {
    try {
        const input = req.body;
    
        const createdEvent =  await dbCreateEvent(input);

        res.status(201).json({
            message: "Event created successfully",
            event: createdEvent
        });
        
    } catch (error) {
        res.status(500).json({
            message: "Error creating event",
            error: error
        });
    }
}

 const getAllEvents = async (req, res) => {
    try {
        
        const allEvents = await dbAllEvents()

        res.status(201).json({
            message: `All events deployed`,
            allEvents
        })
        
    } catch (error) {
        
    }
}

const getEventById = async (req, res) => {
    try {

        const data = req.params.id
        const eventById = await dbEventById(data)

        res.status(201).json({
            message: `Event deployed`,
            eventById
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error getting event by ID, please try again",
            error: error
        })
        
    }
}

const deleteEvent = async (req,res) => {
    try {
        const data = req.params.id
    
        const eventDeleted = await dbDeleteEvent(data)
    
        res.status(200).json({
            message: "Event deleted successfully",
            eventDeleted
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Error deleting event, please try again",
            error: error
        })        
    }
}

const patchEvent = async (req, res) => {
 try {
     const data = req.params.id
     const input = req.body
 
     const eventUpdated = await dbPatchEvent(data, input)
 
     res.status(200).json({
         message: "Event updated successfully",
         eventUpdated
     })
    
 } catch (error) {
    res.status(500).json({
        message: "Error updating event, please try again",
        error: error
    })    
 }

    
}

export {
    createEvents,
    getAllEvents,
    deleteEvent,
    patchEvent,
    getEventById

}