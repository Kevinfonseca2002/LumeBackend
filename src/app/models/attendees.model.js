import { Schema, model } from "mongoose"

const attendanceSchema = new Schema({
    userId:  { type: Schema.Types.ObjectId, ref: 'users', required: true },
    eventId: { type: Schema.Types.ObjectId, ref: 'events', required: true },
    registeredAt: { type: Date, default: Date.now }
}, { timestamps: true })

const attendanceModel = model("attendees", attendanceSchema)

export default attendanceModel