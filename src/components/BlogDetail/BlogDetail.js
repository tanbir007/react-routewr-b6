import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './BlogDetail.css'
const BlogDetail = () => {
    const detail =useLoaderData()
    console.log(detail);
    return (
        <div className='detail'>
            <h2>This is user Detail</h2>
            <p>{detail.name}</p>
            <p>{detail.phone}</p>
            <p>{detail.website}</p>
            <p>{detail.email}</p>
        </div>
    );
};

export default BlogDetail;