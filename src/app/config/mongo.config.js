import mongoose from "mongoose";

const dbConnection = mongoose.connect( "mongodb://localhost:27017/LumeDB",)
.then(()=>{
    console.log("Connected to MongoDB")
})
.catch((error)=>{
    console.error("Error connecting to MongoDB:", error)
})

export default dbConnection;