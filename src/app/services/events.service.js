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
export {
    dbCreateEvent,
    dbAllEvents,
    dbDeleteEvent,
    dbPatchEvent,
    dbEventById,
    dbGetEventsByStore
    };