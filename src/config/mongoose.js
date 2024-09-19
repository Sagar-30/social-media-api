import mongoose from "mongoose";

export const connectToMongoose = async()=>{
    const URL = process.env.DB_PATH;
   try{
       await mongoose.connect(URL)
       console.log("Connected to mongoose database");
   }catch(err){
    console.log(err);
   }
}