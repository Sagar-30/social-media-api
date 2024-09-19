import dotenv from "dotenv";
dotenv.config();
import express from "express";
import { connectToMongoose } from "./src/config/mongoose.js";


const server = express();

server.get("/",(req,res)=>{
res.send("Welcome to my server");
});

server.listen(3000,()=>{
    console.log("Server is running at 3000");
    connectToMongoose();
})