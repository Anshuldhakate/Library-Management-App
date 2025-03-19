import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

const Login = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/login", credentials);
      alert("Login successful!");
      localStorage.setItem("username", response.data.user.username);
      localStorage.setItem("role", response.data.user.role); // Optional
      navigate("/dashboard");
    } catch (error) {
      alert(error.response?.data?.error || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2 className="login-title">Login</h2>
      <input
        type="text"
        placeholder="Username"
        className="login-input"
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        className="login-input"
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button className="login-button" onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
