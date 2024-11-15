// // // import React from "react";
// // // import Navbar from "./components/Navbar/Navbar";
// // // import Hero from "./components/Hero/Hero";
// // // import Products from "./components/Products/Products";
// // // import AOS from "aos";
// // // import "aos/dist/aos.css";
// // // import TopProducts from "./components/TopProducts/TopProducts";
// // // import Banner from "./components/Banner/Banner";
// // // import Subscribe from "./components/Subscribe/Subscribe";
// // // import Testimonials from "./components/Testimonials/Testimonials";
// // // import Footer from "./components/Footer/Footer";
// // // import Popup from "./components/Popup/Popup";

// // // const App = () => {
// // //   const [orderPopup, setOrderPopup] = React.useState(false);

// // //   const handleOrderPopup = () => {
// // //     setOrderPopup(!orderPopup);
// // //   };
// // //   React.useEffect(() => {
// // //     AOS.init({
// // //       offset: 100,
// // //       duration: 800,
// // //       easing: "ease-in-sine",
// // //       delay: 100,
// // //     });
// // //     AOS.refresh();
// // //   }, []);

// // //   return (
// // //     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
// // //       <Navbar handleOrderPopup={handleOrderPopup} />
// // //       <Hero handleOrderPopup={handleOrderPopup} />
// // //       <Products />
// // //       <TopProducts handleOrderPopup={handleOrderPopup} />
// // //       <Banner />
// // //       <Subscribe />
// // //       <Testimonials />
// // //       <Footer />
// // //       <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
// // //     </div>
// // //   );
// // // };

// // // export default App;





// // // import React, { useState, useEffect } from "react";
// // // import { Routes, Route, Navigate } from "react-router-dom";
// // // import Navbar from "./components/Navbar/Navbar";
// // // import Hero from "./components/Hero/Hero";
// // // import Products from "./components/Products/Products";
// // // import ForgotPassword from "./components/Form/ForgotPassword";
// // // import Login from "./components/Form/Login";
// // // import Register from "./components/Form/Register";
// // // import Popup from "./components/Popup/Popup";


// // // const App = () => {
// // //   const [isAuthenticated, setIsAuthenticated] = useState(false);
// // //   const [showLoginForm, setShowLoginForm] = useState(false);


// // //   useEffect(() => {
// // //     const authStatus = localStorage.getItem("isAuthenticated");
// // //     setIsAuthenticated(authStatus === "true");
// // //   }, []);

// // //   return (
// // //     <div>
// // //       <Navbar />
// // //       {/* <Navbar onLoginClick={() => setShowLoginForm(true)} /> */}

// // //       <Routes>
// // //         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
// // //         <Route path="/register" element={<Register/>} />
// // //         <Route path="/forgot-password" element={<ForgotPassword/>} />
        
// // //         {/* Protected Route */}
// // //         <Route
// // //           path="/"
// // //           element={
// // //             isAuthenticated ? (
// // //               <>
// // //                 <Hero />
// // //                 <Products />
// // //                 <Popup />
// // //               </>
// // //             ) : (
// // //               <Navigate to="/login" />
// // //             )
// // //           }
// // //         />
// // //       </Routes>
// // //     </div>
// // //   );
// // // };

// // // export default App;




// // import React, { useState, useEffect } from "react";
// // import { Routes, Route, Navigate } from "react-router-dom";
// // import Navbar from "./components/Navbar/Navbar";
// // import Hero from "./components/Hero/Hero";
// // import Products from "./components/Products/Products";
// // import ForgotPassword from "./components/Form/ForgotPassword";
// // import Login from "./components/Form/Login";
// // import Register from "./components/Form/Register";
// // import Popup from "./components/Popup/Popup";

// // const App = () => {
// //   const [isAuthenticated, setIsAuthenticated] = useState(true);
// //   const [showLoginForm, setShowLoginForm] = useState(false);
// //   const [showRegisterForm, setShowRegisterForm] = useState(false);

// //   useEffect(() => {
// //     const authStatus = localStorage.getItem("isAuthenticated");
// //     setIsAuthenticated(authStatus === "true");
// //   }, []);

// //   useEffect(() => {
// //     const loginStatus = localStorage.getItem("showLoginForm");
// //     setShowLoginForm(loginStatus==="true");
// //   }, []);

// //   const handleLoginClick = () => {
// //     setShowLoginForm(true);
// //   };

// //   const handleRegisterClick = () => {
// //     setShowRegisterForm(true);
// //   }

// //   return (
// //     <div>
// //       <Navbar handleOrderPopup={handleLoginClick} />
// //       {showLoginForm && <Login setShowLoginForm={setShowLoginForm} />}
      
// //       {showRegisterForm && <Register setIsAuthenticated={setIsAuthenticated} />}
// //       <Routes>
// //         <Route path="/register" element={<Register />} />
// //         <Route path="/forgot-password" element={<ForgotPassword />} />

// //         {/* Protected Route */}
// //         <Route
// //           path="/"
// //           element={
// //             isAuthenticated ? (
// //               <>
// //                 <Hero />
// //                 <Products />
// //                 <Popup />
// //               </>
// //             ) : (
// //               <Navigate to="/login" />
// //             )
// //           }
// //         />
// //       </Routes>
// //     </div>
// //   );
// // };

// // export default App;












// import React, { useState, useEffect } from "react";
// import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
// import Navbar from "./components/Navbar/Navbar";
// import Hero from "./components/Hero/Hero";
// import Products from "./components/Products/Products";
// import Login from "./components/Form/Login";
// import Register from "./components/Form/Register";
// import Popup from './components/Popup/Popup';

// const App = () => {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const authStatus = localStorage.getItem("isAuthenticated");
//     setIsAuthenticated(authStatus === "true");
//   }, []);

//   const handleLogin = () => navigate("/login");
//   const handleRegister = () => navigate("/register");
//   const handleOrder = () => navigate("/popup");

//   return (
//     <div>
//       <Navbar handleLogin={handleLogin} handleRegister={handleRegister} handleOrder={handleOrder} />
//       <Routes>
//         <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
//         <Route path="/register" element={<Register />} />
//         <Route path="/popup" element={<Popup/>}/>
    
//         <Route
//           path="/"
//           element={
//             isAuthenticated ? (
//               <>
//                 <Hero />
//                 <Products />
//               </>
//             ) : (
//               <Navigate to="/login" />
//             )
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default App;







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

