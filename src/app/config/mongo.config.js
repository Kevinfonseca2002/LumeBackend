import mongoose from "mongoose";

const dbConnection = async () => {
    await mongoose.connect(process.env.DB_URI || "mongodb://localhost:27017/LumeDB")
        .then(()=>{
        console.log("Connected to MongoDB")
    })
    .catch((error)=>{
        console.error("Error connecting to MongoDB:", error)
    })
}

export default dbConnection;