import express from "express"
import zodUser from "./zodUser.js"
import User from "../db.js";
import jwt from "jsonwebtoken"
import JWT_SECRET from "../config.js";

const router = express.Router()


router.post("/signup", async(req, res)=>{
    try {
        const userData = req.body;  
        const parsedUserData = zodUser.safeParse(userData)

        if(!parsedUserData.success){
            return res.status(400).json({message: "Wrong Input"})
        }
        const existingUser = await User.findOne({
            email: req.body.email
        })
        if(existingUser){
            return res.status(400).json({message: "Email Already registered"})
        }
        const user = await User.create(userData)
        const userId = user._id
        const token = jwt.sign({
            userId
        },JWT_SECRET);
        res.status(200).json({
            message:"User Created Successfully",
            token: token
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

export default router;