import express from "express" 
import dbConnection from "./src/app/config/mongo.config.js"
import userRoutes from "./src/app/routes/users.routes.js"
import eventRoutes from "./src/app/routes/events.routes.js"
import surveyRoutes from "./src/app/routes/surveys.routes.js"

const app = express()

const PORT=3000

app.use(express.json())
dbConnection()

app.use("/users",userRoutes)
app.use("/events",eventRoutes)
app.use("/surveys",surveyRoutes)

app.listen( PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})