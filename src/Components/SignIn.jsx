// SignIn.jsx
import React from "react";
import "./SignIn.css";

const SignIn = () => (
  <div className="signin-container">
    <h2>Sign In</h2>
    <form>
      <input type="email" placeholder="Email" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </form>
  </div>
);

export default SignIn;
