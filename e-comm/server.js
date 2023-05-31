import express from "express";
import dotenv from "dotenv"

const app = express()

dotenv.config()

app.get("/", (req, res)=>{
    res.send("<h1>Ecomm</h1>")
})

const PORT = process.env.PORT || 8080;

app.listen(PORT, ()=>{
    console.log("sever is running")
})