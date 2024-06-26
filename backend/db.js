import dotenv from "dotenv"
dotenv.config()
import mongoose from "mongoose";

mongoose.connect(process.env.MONGODB)

const userSchema = mongoose.Schema({
    firstName: {
        type:String
    },
    lastName: {
        type:String,
        required: false
    },
    email: {
        type:String,
        required: true
    },
    password:{
        type:String,
        required: true
    }
})

export const User = mongoose.model("User", userSchema)

const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true

    },
    balance: {
        type: Number,
        required: true
    }
})

export const Account = mongoose.model("Account", accountSchema)