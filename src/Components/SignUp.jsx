import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
    const navigate = useNavigate();

    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");

    const handleChange = (e) => {
        setFormdata({ ...formdata, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setMessage("");

        try {
            const res = await fetch("http://localhost:5000/api/auth/signup", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formdata)
            });

            const data = await res.json();

            if (res.ok) {
                setMessage(data.message);
                setTimeout(() => {
                    window.location.href = "/gallery";
                }, 1000);
            } else {
                setError(data.message);
            }
        } catch (error) {
            setError("Something went wrong");
        }
    };

    return (
        <div className="signup-container">
            <h2>Create Account</h2>

            <form className="auth-form" onSubmit={handleSubmit}>
                {message && <div className="auth-success">{message}</div>}
                {error && <div className="auth-error">{error}</div>}

                <input
                    className="auth-input"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formdata.name}
                    onChange={handleChange}
                    required
                />

                <input
                    className="auth-input"
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formdata.email}
                    onChange={handleChange}
                    required
                />

                <input
                    className="auth-input"
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formdata.password}
                    onChange={handleChange}
                    required
                />

                <input
                    className="auth-input"
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formdata.confirmPassword}
                    onChange={handleChange}
                    required
                />

                <button className="auth-btn" type="submit">
                    Sign Up
                </button>

                <p className="auth-switch">
                    Already have an account? <Link to="/signin">Sign In</Link>
                </p>
            </form>
        </div>
    );
};

export default SignUp;