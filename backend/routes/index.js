import express from "express";
import userRouter from "./user.js"

const router = express.router()

router.use("/user", userRouter)

export default router;