import express from "express"
import { zodSignUp, zodLogIn, zodUpdate } from "./zodUser.js"
import {Account, User} from "../db.js";
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
        await Account.create({
            userId,
            balance: 1 + Math.floor(Math.random()*10000)
        })
        res.status(200).json({
            message:"User Created Successfully",
            token: token
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.post("/login", async(req, res)=>{
    try {
        const loginUser = req.body
        const parsedUserData = zodLogIn.safeParse(loginUser)

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
        await User.updateOne({_id: req.userId},req.body)
        res.status(200).json({message:"Details updated successfully"})
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.get("/bulk",authMiddleware, async(req, res)=>{
    try {
        const filter = req.query.filter || "";
        const users = await User.find({
            $or: [{
                    firstName: {
                        "$regex":filter,
                        "$options" : "i"
                    }
            },  {
                    lastName:{
                        "$regex": filter,
                        "$options" : "i"
                    }
                }
            ]
        })
        res.json({
            user: users.map(user=>({
                email:user.email,
                firstName:user.firstName,
                lastName:user.lastName,
                _id:user._id
            }))
        })
    } catch (error) {
        res.status(500).json(error.message)
    }
})

router.get("/dashboard", authMiddleware, async(req, res)=>{
    try {
        const {firstName, lastName, email} = await User.findOne({
            _id : req.userId
        })
        res.status(200).json({firstName, lastName, email})
    } catch (error) {
        res.status(500).json(error.message)
    }

})

export default router;