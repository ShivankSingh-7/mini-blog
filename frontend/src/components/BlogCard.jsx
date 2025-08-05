import React from 'react';
import { Link } from 'react-router-dom';

const BlogCard = ({ blog }) => {
  return (
    <Link to={`/blogs/${blog._id}`} className="w-full sm:w-60">
      <div className="bg-blue-600 h-28 rounded-xl mb-5 p-3 flex flex-col justify-center items-center text-white shadow-md hover:scale-105 transition-transform duration-200">
        <h2 className="text-xl font-bold mb-1 text-center">{blog.title}</h2>
        <p className="text-sm text-center line-clamp-2">{blog.content}</p>
      </div>
    </Link>
  );
};

export default BlogCard;
