

import OrderModel from "../models/Ordermodel.js";
import UserModel from "../models/UserModel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

const placeOrder = async (req, res) => {
  const fronted_url = 'http://localhost:5173/';

  try {
    const { userId, amount, address, items } = req.body;

    // 1. Save order to database
    const newOrder = new OrderModel({
      userId,
      amount,
      address,
    });

    await newOrder.save();

    // 2. Clear cart data after order
    await UserModel.findByIdAndUpdate(userId, { cartData: [] }); // ✅ Fixed

    // 3. Prepare Stripe line items
    const line_items = items.map((item) => ({
      price_data: {
        currency: "inr",
        product_data: {
          name: item.name,
        },
        unit_amount: Math.round(item.price * 100 * 80), // 🔒 Ensure it's an integer
      },
      quantity: item.quantity,
    }));

    // Add Delivery Charge
    line_items.push({
      price_data: {
        currency: "inr",
        product_data: {
          name: "Delivery Charge",
        },
        unit_amount: 2 * 100 * 80,
      },
      quantity: 1,
    });

    // 4. Create Stripe Checkout Session
    console.log("Stripe line_items:", line_items);

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${fronted_url}/verify?success=true&orderId=${newOrder._id}`, 
      cancel_url: `${fronted_url}/verify?success=false&orderId=${newOrder._id}`,
    });

    // 5. Send Stripe session URL to client
    res.json({ success: true, session_url: session.url });

  } catch (error) {
    console.error("Order Error:", error);
    res.status(500).json({ success: false, message: "Order failed", error: error.message });
  }
};

export default placeOrder;
