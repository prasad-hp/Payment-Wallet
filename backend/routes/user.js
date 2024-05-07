import express from "express"
import { zodSignUp, zodSignIn, zodUpdate } from "./zodUser.js"
import User from "../db.js";
import jwt from "jsonwebtoken"
import JWT_SECRET from "../config.js";
import authMiddleware from "../middleware.js";

const router = express.Router()


router.post("/signup", async(req, res)=>{
    try {
        const userData = req.body;  
        const parsedUserData = zodSignUp.safeParse(userData)

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

router.post("/signin", async(req, res)=>{
    try {
        const loginUser = req.body
        const parsedUserData = zodSignIn.safeParse(loginUser)

        if(!parsedUserData.success){
            return res.status(400).json({message:"Invalid Inputs"})
        }
        const existingUser = await User.findOne({
            email: loginUser.email,
            password: loginUser.password
        })

        if(!existingUser){
            return res.status(400).json({message:"user Not found"})
        }

        const userId = existingUser._id
        const token = jwt.sign({
            userId
        }, JWT_SECRET)
        
        res.status(200).json({
            message: "User LoggedIn  successfully",
            token: token
        })

    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.put("/", authMiddleware, async(req, res)=>{
    try {
        const updateUser = req.body;
        const parsedUpdateUser = zodUpdate.safeParse(updateUser)
        if(!parsedUpdateUser.success){
            return res.status(400).json({message:"Please provide valid inputs"})
        }
        await User.findOne(req.body,{
            id: req.userId
        })
        res.status(200).json({message:"Details updated successfully"})
    } catch (error) {
        res.status(500).json(error.message)
    }
})


export default router;