import React, {useState, useEffect} from 'react'
import {Input, Textarea, Button} from "../index.js"
import { useNavigate } from 'react-router-dom'
import axios from "axios";

const PostForm = () => {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")

    const navigate = useNavigate()

    const handleSubmit = async(e)=>{
        e.preventDefault();
        setError('');
        setLoading(true);

        if(!title.trim() || !content.trim()){
            setError('All Fields are required');
            setLoading(false);
            return;
        }
        try {
            const res = await axios.post('http://localhost:8000/api/v1/create',{
                title,
                content
            });

            if(res.status==201 || res.status === 200){
                setTitle('');
                setContent('');
                navigate('/blogs',{state: { refresh : true} });
            }
        } catch (error) {
            setError(error.response?.data?.message || "something went wrong")
        }
        finally{
            setLoading(false);
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2 className='text-2xl mb-4 text-center text-white font-bold '>Create new Blog</h2>
        {error && <p>{error}</p>}
        <div className='flex flex-col items-center'>
            <Input
                placeholder = "Title"
                className='mb-4 rounded px-2 w-120 py-1 focus:outline-blue-500'
                value = {title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <Textarea
                placeholder="Enter your content here"
                className='mb-4 w-120 '
                value = {content}
                onChange={(e)=>setContent(e.target.value)}
                rows = {15}
            />

            <Button type='submit'>
                {loading? 'posting...' : 'submit'}
            </Button>
        </div>
    </form>
  )
}

export default PostForm
