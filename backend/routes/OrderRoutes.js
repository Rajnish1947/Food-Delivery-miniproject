// import express from "express";
// import authMiddleware from  "../middlewares/auth.js"
// import placeOrder from "../controllers/orderController.js";


// const orderRouter=express.Router();
// orderRouter.post("/place",authMiddleware,placeOrder)


// export default orderRouter;

import express from "express";
import Stripe from "stripe";
const router = express.Router();

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// POST /api/payment/create
router.post("/create", async (req, res) => {
  try {
    const { amount } = req.body; // amount in ₹
    if (!amount || amount <= 0) {
      return res.status(400).json({ error: "Invalid amount" });
    }

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // convert to paise
      currency: "inr",
    });

    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (err) {
    console.error("Stripe PaymentIntent Error:", err);
    res.status(500).json({ error: "PaymentIntent creation failed" });
  }
});

export default router;
