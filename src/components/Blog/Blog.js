import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';
import './Blog.css'
const Blog = () => {
    const user= useLoaderData()
   console.log(user);
    return (
        <div>
            <h2>{user.length}</h2>
            {
               user.map(d=><Post 
                    key={user.id} 
                    user={user}/>)
            }
        </div>
    );
};

export default Blog;