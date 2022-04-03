import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <nav className='nav-container'>
            <CustomLink className='link'  to="/home">HOME </CustomLink>
            <CustomLink className='link' to="/reviews"> REVIEWS</CustomLink>
            <CustomLink className='link' to="/dashboard"> DASHBOARD</CustomLink>
            <CustomLink className='link' to="/blogs"> BLOGS</CustomLink>
            <CustomLink className='link' to="/about"> ABOUT</CustomLink>
        </nav>
    );
};

export default Header;