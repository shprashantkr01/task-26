import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return (
        <div id='container'>
            <div id="left"><h3>LOGO</h3></div>
            <div id="right"><ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Categories</a></li>
                <li><a href="#">About Us</a>
                </li>
            </ul></div>
        </div>
    )
}

export default Navbar
