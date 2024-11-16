import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Login from "./components/Form/Login";
import Register from "./components/Form/Register";
import Popup from "./components/Popup/Popup";
import ForgotPassword from "./components/Form/ForgotPassword";
import UpdatedPassword from "./components/Form/UpdatedPassword";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orderPopup, setOrderPopup] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogin = () => navigate("/login");
  const handleRegister = () => navigate("/register");
  const handleOrder = () => {
    if (isAuthenticated) {
      setOrderPopup(true); // Show the popup
    } else {
      navigate("/login"); // Redirect to login if not authenticated
    }
  };

  return (
    <div>
      <Navbar handleLogin={handleLogin} handleRegister={handleRegister} handleOrder={handleOrder} />
      <Routes>
        <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forget-password" element={<ForgotPassword />} />
        <Route path="/confirm-password" element={<UpdatedPassword />}/>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <>
                <Hero />
                <Products />
                <TopProducts/>
                <Banner />
                <Subscribe/>
                <Testimonials />
                <Footer />
              </>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
      </Routes>

      {/* Popup Component */}
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
    </div>
  );
};

export default App;

