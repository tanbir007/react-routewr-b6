import React from 'react';
import { Link } from 'react-router-dom';
import './SinglePost.css'
const SinglePost = ({user}) => {
    console.log(user);
    return (
        <div className='user'>
            <h2>{user.name}</h2>
 <Link to={`/blogs/${user.id}`}>{user.email}</Link>
        </div>
    );
};

export default SinglePost;