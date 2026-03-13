import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
    const [open, setOpen] = useState(false);

    return (
        <nav className="navbar">

            <Link to="/" className="navbar-logo">
                <span className="flower">Flower</span>
                <span className="shop">Boom</span>
            </Link>

            <ul className="nav-links">
                <Link to="/" className="nav-link">Home</Link>
                <Link to="/gallery" className="nav-link">Gallery</Link>
                <Link to="/about" className="nav-link">About</Link>
                <Link to="/contact" className="nav-link">Contact</Link>
                <Link to="/signin" className="nav-link">Sign In</Link>
                <Link to="/signup" className="nav-link">Sign Up</Link>
            </ul>

            <div className="search-box">
                <input className="search-input" placeholder="Search" />
                <button className="search-btn">Search</button>
            </div>

        </nav>
    );
};

export default Navbar;