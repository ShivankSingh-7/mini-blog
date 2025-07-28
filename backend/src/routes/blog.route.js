import { Router } from "express"
import { createBlog } from "../controllers/blog.controller.js"


const router = Router()

router.route("/create").post(
    createBlog
)

export default router