import React from 'react';
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <>
        <div className="navbar"> 
        <h2 className='logo'>Coding</h2>
        <div className="menu">
        <li><NavLink  to="/"><a>Home</a></NavLink></li>
        <li><NavLink to="/About/Nikesh/Deula"><a>About</a></NavLink></li>
        <li><NavLink to="/Contact/Call/Us"><a>Contact</a></NavLink></li>
        <li><NavLink to="/Search"><a>Search</a></NavLink></li>
        </div>
        </div>

        </>
    );
}

export default Header;