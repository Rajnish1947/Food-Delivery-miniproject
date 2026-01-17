import express from "express";
import { AddTocart, removeFromCart, getCart } from "../controllers/cartsController.js";
import authMiddleware from "../middlewares/auth.js";

const Cartrouter = express.Router();

// Protected Routes using Middleware


Cartrouter.post("/add", authMiddleware, AddTocart);     
Cartrouter.post("/remove", authMiddleware, removeFromCart); 
Cartrouter.post("/get", authMiddleware, getCart);        

export default Cartrouter;
