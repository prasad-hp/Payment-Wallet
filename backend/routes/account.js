import express from "express"
import authMiddleware from "../middleware";
import { Account } from "../db";
import mongoose from "mongoose";

const router = express.Router()



router.get("/balance", authMiddleware, async(req, res)=>{
    try {
        const account = await Account.findOne({
            userId : req.userId
        });
        res.status(200).json(account.balance)
    } catch (error) {
        res.status(500).json(error.message)
    }
}) 

router.post("/transfer", authMiddleware, async(req, res)=>{
    try {
        const session = await mongoose.startSession()

        session.startTransaction()

        const sender = await Account.findOne({
            userId : req.userId
        })
        const receiver = req.body;
        const amount = receiver.amount;
        const receiverId = receiver.to;
        if(!sender || ! sender.balance < amount){
            await session.abortTransaction()
            return res.status(400).json({message: "Insufficient Funds"})
        }

        if(!receiver){
            await session.abortTransaction()
            return res.status(400).json({message:"Receiver not found/Invalid Receiver"})
        }

        await Account.updateOne({userId:req.userId}, { $inc: {balance : -amount}})
        await Account.updateOne({userId:receiverId}, {$inc:{balance: +amount}})
        session.commitTransaction()
        
    } catch (error) {
        res.status(500).json(error.message)
    }
})
export default router;