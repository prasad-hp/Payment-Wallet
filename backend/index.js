import express from "express"
import mainRouter from "./routes/index.js"
import cors from "cors"

const port = 3000;
const app = express()


app.use(cors({
    origin : "http://localhost:5173"
}))
app.use(express.json())

app.use("/api/v1", mainRouter); 


app.listen(port, ()=>{
    console.log(`Port is Running Successfully at Port ${port}`)
})