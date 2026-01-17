// routes/foodBot.routes.js
import express from "express";
import { Message } from "../controllers/chatboats.js";

const chartbot = express.Router();

// POST route to send a user message and get a bot response
chartbot.post("/message", Message);

export default chartbot;

