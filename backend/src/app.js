import express from "express"
import cors from "cors"
import dotenv from "dotenv";

const app = express()
app.use(express.json());

dotenv.config();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}))

import BlogRouter from './routes/blog.route.js'

app.use("/api/v1",BlogRouter)

export {app}