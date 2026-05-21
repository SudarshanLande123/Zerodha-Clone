import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Signup() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3000/auth/register", formData)
      .then((res) => {

        window.location.href = `http://localhost:3001?token=${res.data.token}`;
      })
      .catch((err) => {
        setError(err.response?.data?.message || "Signup failed");
      });
  };



// Signup
return (
  <div className="auth-page">
    <div className="auth-card">
      <h1>Sign Up</h1>
      {error && <p className="auth-error">{error}</p>}
      <form className="auth-form" onSubmit={handleSubmit}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
        <button type="submit" className="auth-btn">Sign Up</button>
      </form>
      <p className="auth-footer">Already have an account? <a href="/login">Login</a></p>
    </div>
  </div>
);
}
export default Signup;