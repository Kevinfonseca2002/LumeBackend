import express from "express" 

import dbConnection from "./src/app/config/mongo.config.js"
import userRoutes from "./src/app/routes/users.routes.js"
import eventRoutes from "./src/app/routes/events.routes.js"
import surveyRoutes from "./src/app/routes/surveys.routes.js"
import authRoute from "./src/app/routes/auth.route.js"
import cors from "cors";

const app = express()

const PORT=process.env.PORT

app.use(express.json());
app.use(cors());
dbConnection()


app.use("/users",userRoutes)
app.use("/events",eventRoutes)
app.use("/surveys",surveyRoutes)
app.use("/auth",authRoute)

app.listen( PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})