import express from "express"
import cors from "cors"

const app = express()
app.use(express.json());

app.use(cors({
    origin: process.env.CORS_ORIGIN,
}))

import BlogRouter from './routes/blog.route.js'

app.use("/api/v1",BlogRouter)

export {app}