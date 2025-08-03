import { Router } from "express"
import { createBlog, deleteBlog, getBlog, getBlogs} from "../controllers/blog.controller.js"


const router = Router()

router.route("/create").post(
    createBlog
)

router.route("/blogs").get(
    getBlogs
)

router.route("/blogs/:id").get(
    getBlog
)

router.route("/blogs/:id").delete(
    deleteBlog
)
export default router