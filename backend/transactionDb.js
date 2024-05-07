import mongoose from "mongoose";
import { Account } from "./db";

async function transferFunds(fromAccountId, toAccountId, amount){
    try {
        await Account.findByIdAndUpdate(fromAccountId, {$inc:{balance:-amount}})
        await Account.findByIdAndUpdate(toAccountId, {$inc: {balance:+amount}})
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export default transferFunds;