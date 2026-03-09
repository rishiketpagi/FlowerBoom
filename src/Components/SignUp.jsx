// SignUp.jsx
import React from "react";
import { useState } from "react";
import "./SignUp.css";

const SignUp = () => {
    const [formdata, setFormdata] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    return (
        <div className="signup-container">
            <h2>Create Account</h2>
            <form>
                <input type="text" placeholder="FullName" required />
                <input type="email" placeholder="Email" required />
                <input type="password" placeholder="Password" required />
                <input type="password" placeholder="confirm-password" required />
                <button>Sign Up</button>
                <p className="auth-switch">Already have an account ?
                    <a href="/signin"> Sign In</a>
                </p>
            </form>
        </div>
    );
};
export default SignUp;
