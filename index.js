import express from "express" 

import dbConnection from "./src/app/config/mongo.config.js"
import userRoutes from "./src/app/routes/users.routes.js"
import eventRoutes from "./src/app/routes/events.routes.js"
import surveyRoutes from "./src/app/routes/surveys.routes.js"
import authRoute from "./src/app/routes/auth.route.js"
import postsRoute from "./src/app/routes/posts.routes.js"
import attendeRoute from "./src/app/routes/attendees.routes.js"
import cors from "cors";

const app = express()

const PORT=process.env.PORT

app.use(express.json());
app.use(cors());
dbConnection()

app.get('/health', (req,res)=>{
    res.json({path: '/health', msg: 'Sirve Get Health '})
})

app.use("/users",userRoutes)
app.use("/events",eventRoutes)
app.use("/surveys",surveyRoutes)
app.use("/posts", postsRoute)
app.use("/auth",authRoute)
app.use("/attendee",attendeRoute)

app.listen( PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})