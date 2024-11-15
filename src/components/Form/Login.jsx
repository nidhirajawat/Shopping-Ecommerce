import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setIsAuthenticated }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (true) {
      localStorage.setItem("isAuthenticated", "true");
      setIsAuthenticated(true);
      navigate("/"); // Navigate to home page
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      {/* Form Container with border */}
      <div className="w-96 bg-white p-6 rounded shadow-lg border border-gray-300">
        <form onSubmit={handleLogin}>
          {/* Form Header */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Welcome Back</h2>
            <p className="text-gray-600">Login to continue</p>
          </div>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Email *</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Password *</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-500"
              placeholder="Enter your password"
            />
          </div>

          {/* Login Button */}
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Login
            </button>
          </div>

          {/* Form Options */}
          <div className="flex justify-between text-sm">
          <Link to="/register" className="text-blue-500 hover:text-blue-700 transition" >Create new account</Link>
            <Link
              to="/forget-password"
              className="text-blue-500 hover:text-blue-700 transition"
            >
              Forget Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

