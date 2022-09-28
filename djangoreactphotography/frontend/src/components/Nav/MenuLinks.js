import React from 'react';
import { NavLink } from 'react-router-dom';

function MenuLinks() {
    return (
        <ul>
            <NavLink to="/about"><li>About</li></NavLink>
            <NavLink to="/contact"><li>Contact</li></NavLink>
            <a href="https://unsplash.com"><li>Download images from unsplash</li></a>
            <a href="https://github.com/DheerajDR"><li>Our Github</li></a>
        </ul>
    )
}
export default MenuLinks;