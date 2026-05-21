import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";
function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.post(
      "http://localhost:3000/auth/login",
      formData
    );

    console.log("LOGIN RESPONSE:", res.data);

    const token = res.data.token;

    if (!token) {
      throw new Error("Token not received from backend");
    }

    localStorage.setItem("username", res.data.username || "");

    window.location.href = `http://localhost:3001?token=${res.data.token}`;
  } catch (err) {
    console.log("LOGIN ERROR:", err.response?.data || err.message);
    setError(err.response?.data?.message || "Login failed");
  }
};

  

// Login
return (
  <div className="auth-page">
    <div className="auth-card">
      <h1>Login</h1>
      {error && <p className="auth-error">{error}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit" className="auth-btn">Login</button>
      </form>
      <p className="auth-footer">Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  </div>
);


}

export default Login;