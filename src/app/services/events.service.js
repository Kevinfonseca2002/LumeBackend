import eventModel from "../models/event.model.js";

const dbCreateEvent = async (data) => {
    return await eventModel.create(data);
}

const dbAllEvents = async () => {
    return await eventModel.find().populate(["surveyId", "storeId"])
}

const dbDeleteEvent = async (data) => {
    return await eventModel.findByIdAndDelete(data);
}

const dbPatchEvent = async (id, data) => {
    return await eventModel.findByIdAndUpdate(id, data, {new: true});
}

const dbEventById = async (data) => {
    return await eventModel.findById(data);
}

const dbGetEventsByStore = async (storeId)=>{
    return await eventModel.find({storeId})
}

const dbGetEventsByStatus = async (storeId, status) => {
    return await eventModel.find({ storeId, status }).sort({ date: 1 })
}

const dbUpdateEventStatus = async (eventId, status) => {
    return await eventModel.findByIdAndUpdate(
        eventId,
        { status },
        { new: true }
    )
}

const dbAddAttendee = async (eventId, userId) => {
    return await eventModel.findByIdAndUpdate(
        eventId,
        { $addToSet: { attendees: userId } },
        { new: true }
    )
}

const dbRemoveAttendee = async (eventId, userId) => {
    return await eventModel.findByIdAndUpdate(
        eventId,
        { $pull: { attendees: userId } },
        { new: true }
    )
}
export {
    dbCreateEvent,
    dbAllEvents,
    dbDeleteEvent,
    dbPatchEvent,
    dbEventById,
    dbGetEventsByStore,
    dbUpdateEventStatus,
    dbGetEventsByStatus,
    dbAddAttendee,
    dbRemoveAttendee
    };