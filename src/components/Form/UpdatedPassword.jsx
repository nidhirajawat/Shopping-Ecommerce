import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";
import { RxUpdate } from "react-icons/rx";

const UpdatedPassword = () => {
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const submitHandle = (e) => {
    e.preventDefault();

    // Mock OTP validation
    if (otp === "123456") {
      if (password === confirmPassword) {
        alert("Password updated successfully!");
        navigate("/login"); // Redirect to login page
      } else {
        setError("Passwords do not match.");
      }
    } else {
      setError("Invalid OTP.");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-6 rounded shadow-lg border border-gray-300">
        <form onSubmit={submitHandle}>
          <div className="text-center mb-6">
            <RxUpdate />
            <h2 className="text-2xl font-bold mb-2">New Password</h2>
            <p className="text-gray-600">Enter the OTP and your new password.</p>
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">OTP *</label>
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-500"
              placeholder="Enter OTP"
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
              placeholder="New password"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-sm font-medium">Confirm Password *</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 hover:border-gray-500"
              placeholder="Confirm password"
            />
          </div>

          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded hover:bg-blue-600 transition"
            >
              Update Password
            </button>
          </div>

          <div className="flex justify-between text-sm">
            <Link
              to="/forget-password"
              className="text-blue-500 hover:text-blue-700 transition flex gap-2"
            >
              <IoIosArrowRoundBack /> Back to Forgot Password
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdatedPassword;
