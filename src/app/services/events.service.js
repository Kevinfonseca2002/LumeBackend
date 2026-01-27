import eventModel from "../models/event.model.js";

const dbCreateEvent = async (data) => {
    return await eventModel.create(data);
}

const dbAllEvents = async () => {
    return await eventModel.find()
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
export {
    dbCreateEvent,
    dbAllEvents,
    dbDeleteEvent,
    dbPatchEvent,
    dbEventById
    };