import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowRoundBack } from "react-icons/io";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Simulate OTP generation and email sending
    setTimeout(() => {
      if (email) {
        const otp = Math.floor(100000 + Math.random() * 900000); // Generate a 6-digit OTP
        console.log(`Mock OTP sent to ${email}: ${otp}`); // Log OTP for simulation
        alert(`OTP sent to ${email}. Your OTP is ${otp}.`); // Show mock alert
        navigate("/confirm-password"); // Redirect to UpdatedPassword page
      } else {
        setError("Invalid email address");
      }
      setLoading(false);
    }, 1500); // Simulate API delay
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-96 bg-white p-6 rounded shadow-lg border border-gray-300">
        <form onSubmit={handleForgotPassword}>
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-2">Forgot your password</h2>
            <p className="text-gray-600">Enter your registered email to receive a 6-digit OTP.</p>
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
          {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
          <div className="mb-4">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-primary to-secondary text-white py-2 rounded hover:bg-blue-600 transition"
            >
              {loading ? "Sending..." : "Send OTP"}
            </button>
          </div>
          <div className="flex justify-between text-sm">
            <Link to="/login" className="text-blue-500 hover:text-blue-700 transition flex gap-2">
              <IoIosArrowRoundBack /> Back To Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;

