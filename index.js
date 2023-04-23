import express from "express"
import cors from "cors"
import "./DataConnect/ConnectData.js"
import UserRouter from "./Routes/Router.js"
import NoteRouter from "./Routes/NoteRoute.js"


const app = express()





app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended : true}))


app.use("/user" , UserRouter )

app.use("/note" , NoteRouter)
app.get("/" , (req,res)=>{
    res.send("hello")
})

app.listen( process.env.PORT || 8009 , ()=>{
    console.log(`server sucessfullt run at :${PORT}`)
})