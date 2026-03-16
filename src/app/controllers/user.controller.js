import { encryptedPassword } from "../helpers/bcrypt.helper.js";
import {
  dbDeleteAllUser,
  dbGetAllUsers,
  dbGetUserById,
  dbDeleteUserById,
  dbCreateUser,
  dbPatchUser,
  dbAddPostToUser,
  dbAddRegisteredEvent,
  dbGetRegisteredEvents
} from "../services/users.service.js";

const getAllUsers = async (req, res) => {
  try {
    const getUsers = await dbGetAllUsers();
    res.json({
      message: "All users retrieved successfully",
      getUsers,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "Could not retrieve users, Please try again",
    });
  }
};

const deleteAllUsers = async (req, res) => {
  try {
    const deletedUser = await dbDeleteAllUser();

    res.json({
      message: `Users were all deleted`,
      deletedUser,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "Users could not be deleted, Please try again",
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const data = req.params.id;

    const userById = await dbGetUserById(data);

    res.json({
      message: `Check response status`,
      userById,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "Could not retrieve user, Please try again",
    });
  }
};

const deleteUserById = async (req, res) => {
  try {
    const data = req.params.id;

    const deletedUserById = await dbDeleteUserById(data);

    res.json({
      message: `User deleted successfully`,
      deletedUserById,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "Could not delete user, Please try again",
    });
  }
};

const createUser = async (req, res) => {
  try {
    const input = req.body;

    if (req.file) {
      input.userImg = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    }

    input.password = await encryptedPassword(input.password);

    const newUser = await dbCreateUser(input);

    res.json({
      message: "New user created successfully",
      newUser,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "Could not create user, Please try again",
    });
  }
};

const patchUser = async (req, res) => {
  try {
    const data = req.params.id;
    const input = req.body;

    if (req.file) {
      input.userImg = `data:${req.file.mimetype};base64,${req.file.buffer.toString("base64")}`;
    }

    const patchUser = await dbPatchUser(data, input);

    res.json({
      message: `User patched successfully`,
      patchUser,
    });
  } catch (error) {
    console.error(error);
    res.json({
      message: "Could not update user, Please try again",
    });
  }
};

const addRegisteredEvent = async (req, res) => {
    try {
        const { userId } = req.params
        const { eventId } = req.body

        const updatedUser = await dbAddRegisteredEvent(userId, eventId)

        res.status(200).json({ 
            message: "Event registered successfully", 
            user: updatedUser 
        })
    } catch (error) {
        res.status(500).json({ message: "Error registering event", error })
    }
}

const getRegisteredEvents = async (req, res) => {
    try {
        const { userId } = req.params

        const user = await dbGetRegisteredEvents(userId)

        res.status(200).json({ 
            message: "Registered events fetched successfully", 
            registeredEvents: user.registeredEvents 
        })
    } catch (error) {
        res.status(500).json({ message: "Error fetching registered events", error })
    }
}

export {
  deleteAllUsers,
  getAllUsers,
  getUserById,
  deleteUserById,
  createUser,
  patchUser,
  addRegisteredEvent,
  getRegisteredEvents
};
