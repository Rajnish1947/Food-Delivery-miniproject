

import React, { useContext, useState } from "react";
import { assets } from "../assets/assets/assets";
import { StoreContext } from "../context/Storecontext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const LoginPopus = ({ showLogin, setShowLogin }) => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const { backendurl, setToken } = useContext(StoreContext);
const navigate=useNavigate()
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onchangeHandler = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const Clickoncorx=()=>{
  
  navigate("/")
}
  const onLogin = async (e) => {
    e.preventDefault();

    let endpoint = backendurl;
    endpoint += currentState === "Login" ? "/api/auth/login" : "/api/auth/register";

    try {
      const response = await axios.post(endpoint, data);

      if (response.data.success) {
        localStorage.setItem("token", response.data.token);
        setToken(response.data.token);
        setShowLogin(false);

        toast.success(
          currentState === "Login"
            ? "Login successful!"
            : "Account created successfully!"
        );
      } else {
        toast.error(response.data.message || "Authentication failed.");
      }
    } catch (error) {
      console.error("Auth error:", error);
      toast.error(
        error.response?.data?.message || "An error occurred. Please try again."
      );
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <form
        onSubmit={onLogin}
        autoComplete="off"
        className="bg-white p-6 rounded-lg w-96 shadow-md relative"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="w-5 h-5 cursor-pointer"
          />
        </div>

        <div className="space-y-3 mb-4">
          {currentState !== "Login" && (
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={data.name}
              onChange={onchangeHandler}
              required
              autoComplete="off"
              className="w-full p-2 border rounded"
            />
          )}
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={data.email}
            onChange={onchangeHandler}
            required
            autoComplete="off"
            className="w-full p-2 border rounded"
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={data.password}
            onChange={onchangeHandler}
            required
            autoComplete="new-password"
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-700"
        >
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>

        <div className="flex items-start mt-3 text-sm">
          <input type="checkbox" className="mr-2 mt-1" />
          <p>
            By continuing, I agree to the{" "}
            <span className="text-gray-600 underline cursor-pointer">terms</span>{" "}
            &{" "}
            <span className="text-gray-600 underline cursor-pointer">policy</span>.
          </p>
        </div>

        <div className="mt-4 text-sm text-center">
          {currentState === "Login" ? (
            <p>
              Create a new account?{" "}
              <span
                onClick={() => setCurrentState("Sign Up")}
                className="text-orange-600 cursor-pointer"
              >
                Click here
              </span>
            </p>
          ) : (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => setCurrentState("Login")}
                className="text-orange-600 cursor-pointer"
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  );
};

export default LoginPopus;


