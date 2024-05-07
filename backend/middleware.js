import JWT_SECRET from "./config.js";
import jwt from "jsonwebtoken"

function authMiddleware(req, res, next){
    authHeaders = req.headers.authorization;

    if(!authHeaders || !authHeaders.startsWith("Bearer")){
        return res.status(403).json({})
    }

    const token = authHeaders.split(' ')[1]

    try {
        const decoded = jwt.verify(token, JWT_SECRET)
        req.userId = decoded.userId;
        next()
    } catch (error) {
        return res.status(403).json({})
    }

}

export default authMiddleware;