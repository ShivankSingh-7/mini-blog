import React from 'react'
import { Button, Container } from '../components'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="h-[90vh] bg-slate-950 flex flex-col items-center w-full">
        <div className='flex flex-col items-center'>
          <h1 className='text-4xl font-bold text-blue-500'>This is my Blog App Practice</h1>
          <p className='text-white text-center'>To see my all blogs please click below</p>

          <Link to="/blogs"><Button>See All blogs</Button></Link>
        </div>
    </div>
  )
}

export default Home
