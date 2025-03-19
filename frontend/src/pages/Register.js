import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css"; 

const Register = () => {
  const [user, setUser] = useState({ username: "", password: "", role: "user" });
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      await axios.post("https://library-backend-hyf7.onrender.com/api/register", user);
      alert("User registered successfully!");
      navigate("/login");
    } catch (error) {
      alert(error.response?.data?.error || "Registration failed");
    }
  };

  return (
    <div className="register">
    <h1>Welcome to Library Management App</h1>
    <div className="register-container">
        
      <h2 className="register-title">Register</h2>
      <input
        type="text"
        placeholder="Username"
        className="register-input"
        onChange={(e) => setUser({ ...user, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="register-input"
        onChange={(e) => setUser({ ...user, password: e.target.value })}
      />
      <select
        className="register-select"
        onChange={(e) => setUser({ ...user, role: e.target.value })}
      >
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <button className="register-button" onClick={handleRegister}>
        Register
      </button>
    </div>
    </div>
  );
};

export default Register;
