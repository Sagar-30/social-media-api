import mongoose from "mongoose";

export default signupSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:[true,"Email is already registerd"]
    },
    mobile:{
        type:Number,
        required:[true,"Mobile is required"],
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
    },
    password:{
        type:String,
        required:true
    }
});