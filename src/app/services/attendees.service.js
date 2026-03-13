import attendanceModel from "../models/attendees.model.js";

const dbCreateAttendees = async (data) => {
    return await attendanceModel.create(data);
}

const dbAllAttendees = async () => {
    return await attendanceModel.find().populate(['userId', 'eventId'])
}

const dbDeleteAttendees = async (data) => {
    return await attendanceModel.findByIdAndDelete(data);
}
export {
        dbCreateAttendees,
        dbAllAttendees,
        dbDeleteAttendees
    };