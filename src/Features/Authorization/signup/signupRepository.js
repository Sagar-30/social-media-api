import mongoose from "mongoose";
import bcrypt from "bcrypt"
import signupSchema from "./signupSchema.js";

const signupModel = mongoose.model("User", signupSchema);

export default class signupRepository {

    async signup(user) {
        try {
            const { name, email, password } = user;
            const hashPassword = bcrypt.hash(password,12)
            const newUser = signupModel({
                name:name,
                email:email,
                mobile:mobile,
                age:age,
                password:hashPassword
            });
            await newUser.save()
        } catch (err) {
            throw new Error("Something went wrong while signup")
        }


    }
}