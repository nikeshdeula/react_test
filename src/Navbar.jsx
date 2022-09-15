import React from 'react';

function Navbar() {
    return(
        <>
        <nav className='navbar'>
            <h3>Ancade</h3>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">All Movies</a></li>
                <li><a href="/">About Us</a></li>
                <li><a href="/">Contact Us</a></li>
                <a className='btn' href="/">Join Us</a>
            </ul>
        </nav>
        </>
    );   
}

export default Navbar;