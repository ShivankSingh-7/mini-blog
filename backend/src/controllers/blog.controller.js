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

const getBlogs = asyncHandler( async(req, res)=>{
    const blogs = await Blog.find().sort({ createdAt: -1});

    if(blogs.length === 0){
        throw new ApiError(404, "blogs not found")
    }

    return res.status(200)
    .json( new ApiResponse(200, blogs, "All blogs fetched"))
})

const getBlog = asyncHandler( async(req, res)=>{
    const blog = await Blog.findById(req.params.id)

    if(!blog){
        throw new ApiError(404, "Blog not found")
    }
     return res.status(200)
     .json( new ApiResponse(200, blog, "blog fetched successfully"))
})

const deleteBlog = asyncHandler (async(req, res)=>{
    const blog = await Blog.findById(req.params.id);

    if(!blog){
        throw new ApiError(404, "cant get the blog")
    }

    await Blog.findByIdAndDelete(req.params.id);

    return res.status(200)
    .json(new ApiResponse(200, null, "Post deleted successfully"))
})

export { createBlog, getBlogs, getBlog, deleteBlog }