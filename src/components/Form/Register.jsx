import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate for redirection

  const handleRegister = (e) => {
    e.preventDefault();

    // Mock registration process (replace with actual logic later)
    console.log("Registered with email:", email);

    // Redirect to login page after successful registration
    alert("Registration successful! Please log in.");
    navigate("/login"); // Navigate to login page
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-6 rounded shadow-lg border border-gray-300">
        <form onSubmit={handleRegister}>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Welcome</h2>
            <p className="text-gray-600">Create a new account</p>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Name *</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-500"
              placeholder="Enter your name"
            />
          </div>

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

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Register
            </button>
          </div>

          <div className="flex justify-between text-sm">
            <Link
              to="/login"
              className="text-blue-500 hover:text-blue-700 transition flex gap-2"
            >
              {<IoIosArrowRoundBack />} Back To Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
