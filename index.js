import express from "express" 

const app = express()

const PORT=3000

app.use(express.json())


app.use("/users",)
app.use("/events",)
app.use("/surveys")


app.listen( PORT, ()=>{
    console.log(`Server is running on port http://localhost:${PORT}`)
})