import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
   const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Mock registration process (replace with actual logic)
    console.log("Registered with email:", email);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    {/* Form Container with border */}
    <div className="w-96 bg-white p-6 rounded shadow-lg border border-gray-300">
      <form onSubmit={handleRegister}>
        {/* Form Header */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Welcome</h2>
          <p className="text-gray-600">Create a new account</p>
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Name *</label>
          <input
            type="name"
            value={name}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-500"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Email *</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setPassword(e.target.value)}
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
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Register
          </button>
        </div>

        {/* Form Options */}
        <div className="flex justify-between text-sm">
        {/* <Link to="/register" className="text-blue-500 hover:text-blue-700 transition" >Create new account</Link> */}
          <Link
            to="/forget-password"
            className="text-blue-500 hover:text-blue-700 transition"
          >
            Back To Login
          </Link>
        </div>
      </form>
    </div>
  </div>
  );
};

export default Register;
