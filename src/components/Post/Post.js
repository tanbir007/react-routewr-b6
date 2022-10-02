import React from 'react';
import SinglePost from '../SinglePost/SinglePost';
import './Post.css'
const Post = ({user}) => {
    console.log(user);
const {name} =user;
console.log(name);
    return (
        <div>
            <h2>Title:{user.length}</h2>
            <div className="post">
            {
                user.map(user =><SinglePost user={user}></SinglePost>)
            }
            </div>
    
        </div>
    );
};

export default Post;