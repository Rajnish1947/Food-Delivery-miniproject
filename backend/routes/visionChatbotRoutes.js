import express from "express";
import { analyzeFoodImage } from "../controllers/visionChatbotController.js";

const router = express.Router();

router.post("/", analyzeFoodImage);

export default router;
