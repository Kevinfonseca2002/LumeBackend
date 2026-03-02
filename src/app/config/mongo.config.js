import mongoose from "mongoose";

const DB_URI = process.env.DB_URI || "mongodb://localhost:27017/LumeDB";

const dbConnection = async () => {

    try {
        await mongoose.connect(DB_URI)
        console.log("Connected to MongoDB " + DB_URI)
        
    } catch (error) {
        console.error("Error connecting to MongoDB:", error)        
    }
}

export default dbConnection;