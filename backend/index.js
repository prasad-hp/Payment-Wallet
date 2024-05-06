import express from "express"
import mainRouter from "./routes/index.js"
import cors from "cors"

const app = express()


app.use(cors(), {
    origin : "http://localhost:5173"
})
app.use(express.json())
// app.use(bodyparser.json())
app.use("/api/v1", mainRouter); 

