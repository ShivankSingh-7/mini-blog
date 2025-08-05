import React, { useState, useEffect } from 'react'
import BlogCard from '../components/BlogCard'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    async function fetchBlogs() {
        try {
            const response = await axios.get('http://localhost:8000/api/v1/blogs')
            // console.log(response)
            const data = response.data.data
            setBlogs(data)
            // console.log(response.data.data)
        } catch (error) {
            console.log("getting error while fetching all blogs", error)
        }
    }

    useEffect(() => {
        fetchBlogs();
    }, []);


    console.log(blogs)    

    return (
        <div className='bg-purple-950 h-full flex gap-5 mt-5'>
            {blogs.length === 0 ? (
                <p className='text-3xl text-center font-bold text-red-500'>There is nothing to show</p>) :
                (blogs.map((blog) => {

                    return <BlogCard key={blog._id} blog={blog} />
                }))

            }
        </div>
    )
}

export default AllBlogs
