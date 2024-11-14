import React, { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";

const Popup = ({ orderPopup, setOrderPopup }) => {
  const [success, setSuccess] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  useEffect(() => {
    // Check if all fields are filled
    setIsFormValid(name.trim() !== "" && email.trim() !== "" && address.trim() !== "");
  }, [name, email, address]);

  const handleOrder = () => {
    if (!isFormValid) return; // Prevent submission if form is not valid

    setSuccess(true);

    // Close the popup after 2 seconds
    setTimeout(() => {
      setSuccess(false);
      setOrderPopup(false);
    }, 2000);
  };

  return (
    <>
      {orderPopup && (
        <div className="popup">
          <div className="h-screen w-screen fixed top-0 left-0 bg-black/50 z-50 backdrop-blur-sm">
            <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-4 shadow-md bg-white dark:bg-gray-900 rounded-md duration-200 w-[300px]">
              {/* header */}
              <div className="flex items-center justify-between">
                <div>
                  <h1>{success ? "Success!" : "Order Now"}</h1>
                </div>
                <div>
                  <IoCloseOutline
                    className="text-2xl cursor-pointer"
                    onClick={() => setOrderPopup(false)}
                  />
                </div>
              </div>
              
              {/* form or success message */}
              <div className="mt-4">
                {success ? (
                  <p className="text-center text-green-500">Order placed successfully!</p>
                ) : (
                  <>
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                    />
                    <input
                      type="email"
                      placeholder="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                    />
                    <input
                      type="text"
                      placeholder="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      className="w-full rounded-full border border-gray-300 dark:border-gray-500 dark:bg-gray-800 px-2 py-1 mb-4"
                    />
                    <div className="flex justify-center">
                      <button
                        className={`bg-gradient-to-r from-primary to-secondary text-white py-1 px-4 rounded-full duration-200 ${isFormValid ? "hover:scale-105" : "opacity-50 cursor-not-allowed"}`}
                        onClick={handleOrder}
                        disabled={!isFormValid} // Disable button if form is not valid
                      >
                        Order Now
                      </button>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
