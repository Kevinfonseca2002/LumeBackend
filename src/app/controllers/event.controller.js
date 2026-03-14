import {
  dbCreateEvent,
  dbAllEvents,
  dbDeleteEvent,
  dbPatchEvent,
  dbEventById,
  dbGetEventsByStore,
  dbGetEventsByStatus,
  dbUpdateEventStatus,
  dbAddAttendee,
  dbRemoveAttendee,
} from "../services/events.service.js";
import { dbPatchUser } from "../services/users.service.js";

const createEvents = async (req, res) => {
  try {
    const storeId = req.params.storeId;

    const input = req.body;

    const createdEvent = await dbCreateEvent({ ...input, storeId });

    const updatedStore = await dbPatchUser(storeId,{ $push: { events: createdEvent._id } },
    );

    if (!updatedStore) {
      return res.status(404).json({
        message: "Store not found, event created but not linked",
      });
    }

    res.status(201).json({
      message: "Event created successfully",
      event: createdEvent,
      storeEvents: updatedStore.events,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error creating event",
      error: error,
    });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const allEvents = await dbAllEvents();

    res.status(201).json({
      message: `All events deployed`,
      allEvents,
    });
  } catch (error) {}
};

const getEventById = async (req, res) => {
  try {
    const data = req.params.id;
    const eventById = await dbEventById(data);

    res.status(201).json({
      message: `Event deployed`,
      eventById,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error getting event by ID, please try again",
      error: error,
    });
  }
};

const deleteEvent = async (req, res) => {
  try {
    const data = req.params.id;

    const eventDeleted = await dbDeleteEvent(data);

    res.status(200).json({
      message: "Event deleted successfully",
      eventDeleted,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error deleting event, please try again",
      error: error,
    });
  }
};

const patchEvent = async (req, res) => {
  try {
    const data = req.params.id;
    const input = req.body;

    const eventUpdated = await dbPatchEvent(data, input);

    res.status(200).json({
      message: "Event updated successfully",
      eventUpdated,
    });
  } catch (error) {
    res.status(500).json({
      message: "Error updating event, please try again",
      error: error,
    });
  }
};

const getStoreEvents = async (req, res) => {
  try {
    const { storeId } = req.params;

    const events = await dbGetEventsByStore(storeId);

    res.json({ success: true, events });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const getEventsByStatus = async (req, res) => {
    try {
        const { storeId, status } = req.params

        const events = await dbGetEventsByStatus(storeId, status)

        res.status(200).json({ message: "Events fetched successfully", events })
    } catch (error) {
        res.status(500).json({ message: "Error fetching events by status", error })
    }
}

const updateEventStatus = async (req, res) => {
    try {
        const { eventId } = req.params
        const { status } = req.body

        const updatedEvent = await dbUpdateEventStatus(eventId, status)

        res.status(200).json({ message: "Status updated successfully", event: updatedEvent })
    } catch (error) {
        res.status(500).json({ message: "Error updating status", error })
    }
}

const addAttendee = async (req, res) => {
    try {
        const { eventId } = req.params
        const { userId } = req.body

        const updatedEvent = await dbAddAttendee(eventId, userId)

        res.status(200).json({ message: "Attendee added successfully", event: updatedEvent })
    } catch (error) {
        res.status(500).json({ message: "Error adding attendee", error })
    }
}

const removeAttendee = async (req, res) => {
    try {
        const { eventId } = req.params
        const { userId } = req.body

        const updatedEvent = await dbRemoveAttendee(eventId, userId)

        res.status(200).json({ message: "Attendee removed successfully", event: updatedEvent })
    } catch (error) {
        res.status(500).json({ message: "Error removing attendee", error })
    }
}

export {
  createEvents,
  getAllEvents,
  deleteEvent,
  patchEvent,
  getEventById,
  getStoreEvents,
  getEventsByStatus,
  addAttendee,
  removeAttendee,
  updateEventStatus
};
