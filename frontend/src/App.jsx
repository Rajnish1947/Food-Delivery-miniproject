


import React, { useState } from "react";
import Footer from "./componenets/Footer";
import Mobile from "./pages/Mobile";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import ContactUs from "./pages/ContactUs"; 
import LoginPopus from "./componenets/LoginPopus";
import NavBar from "./componenets/NavBar";
import Cart from "./pages/Cart";
import PlaceOredr from "./pages/PlaceOredr";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutForm from "./componenets/CheckoutForm";
import FoodAssistant from "./pages/FoodAssistant";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const stripePromise = loadStripe(
  "pk_test_51QGIp4DuIWaWxstxGXGX55gb1znJ40StbDOv3y1um0N3RAhn2cHWHfIxE9PAeuif4cep4QaKFtql5pl1x5UiBmyH00rmCHJQmO"
);

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && (
        <LoginPopus showLogin={showLogin} setShowLogin={setShowLogin} />
      )}

      <div className="w-[80%] m-auto">
        <NavBar setShowLogin={setShowLogin} />
        <ToastContainer position="top-right" autoClose={3000} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/mobileApp" element={<Mobile />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOredr />} />
          <Route path="/chat" element={<FoodAssistant />} />
        </Routes>

        
      </div>

      <Footer className="w-full mb-0" />
    </>
  );
};

export default App;
