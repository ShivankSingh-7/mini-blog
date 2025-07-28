import { asyncHandler } from "../utils/asyncHandler.js";
import { Blog } from "../models/blog.model.js";
import { ApiError } from "../utils/ApiError.util.js";
import { ApiResponse } from "../utils/ApiResponse.util.js";


const createBlog = asyncHandler(async(req, res)=>{
    // get user details from frontend
    // validate that user sender all the information and its not empty


    const { title, content} = req.body

    if(
        [title, content].some((field)=>field?.trim()=="")
    ){
        throw new ApiError(400,"it can not be sent empty");
        
    }

    const blog = await Blog.create({
        title,
        content
    })

    const createdBlog = await Blog.findById(blog._id)

    if(!createdBlog){
        throw new ApiError(500, "something went wrong")
    }

    return res.status(201).json(
        new ApiResponse(200, createdBlog, "blog created successfully")
    )

})

export {createBlog}