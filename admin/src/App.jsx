
import React from "react";
import Navbar from "./component/Navbar";
import Sidebar from "./component/sidebar";
import { Routes, Route } from "react-router-dom";
import Additem from "./pages/Additem";
import ListOfItem from "./pages/ListOfItem";
import Order from "./pages/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div>
      <Navbar />
        <ToastContainer position="top-right" autoClose={3000} />
      <hr />
      {/* Main content area with Sidebar + Pages side by side */}
      <div style={{ display: "flex" }}>
        <Sidebar />
        <div style={{ flex: 1, padding: "20px" }}>
          <Routes>
            <Route path="/add-items" element={<Additem />} />
            <Route path="/list-items" element={<ListOfItem />} />
            <Route path="/orders" element={<Order />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
