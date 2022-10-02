import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/products'>Products</Link>
            <Link to='/blogs'>Blogs</Link>
            <div className="">
                <h3>Common Header</h3>
            </div>
        </div>
    );
};

export default Header;