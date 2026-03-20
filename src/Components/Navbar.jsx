import React, { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
        navigate("/signin");
    };

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo">
                    <span className="flower">Flower</span>
                    <span className="shop">Boom</span>
                </Link>

                <button
                    className="menu-btn"
                    onClick={() => setOpen(!open)}
                    aria-label="Toggle menu"
                >
                    {open ? "✕" : "☰"}
                </button>

                <ul className={`nav-links ${open ? "open" : ""}`}>
                    <li>
                        <NavLink to="/" className="nav-link" onClick={() => setOpen(false)}>
                            Home
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/gallery" className="nav-link" onClick={() => setOpen(false)}>
                            Gallery
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/about" className="nav-link" onClick={() => setOpen(false)}>
                            About
                        </NavLink>
                    </li>

                    <li>
                        <NavLink to="/contact" className="nav-link" onClick={() => setOpen(false)}>
                            Contact
                        </NavLink>
                    </li>

                    {!user ? (
                        <>
                            <li>
                                <NavLink to="/signin" className="nav-link" onClick={() => setOpen(false)}>
                                    Sign In
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to="/signup" className="nav-link signup-link" onClick={() => setOpen(false)}>
                                    Sign Up
                                </NavLink>
                            </li>
                        </>
                    ) : (
                        <>
                            <li className="nav-user">
                                Hi, {user.name}
                            </li>

                            <li>
                                <button className="logout-btn" onClick={handleLogout}>
                                    Logout
                                </button>
                            </li>
                        </>
                    )}
                </ul>

                <div className="search-box">
                    <input className="search-input" placeholder="Search flowers..." />
                    <button className="search-btn">Search</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;