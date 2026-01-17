

import UserModel from "../models/UserModel.js";

// Add item to cart (store item IDs in array)
const AddTocart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    let userData = await UserModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Add itemId to array (allow duplicates)
    userData.cartData.push(itemId);

    // Save updated user document
    await userData.save();

    res.json({ success: true, message: "Item added to cart successfully", cartData: userData.cartData });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error adding to cart", error: error.message });
  }
};

// Remove item from cart (removes all occurrences of itemId)
const removeFromCart = async (req, res) => {
  try {
    const { userId, itemId } = req.body;

    let userData = await UserModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Remove all instances of itemId from the array
    userData.cartData = userData.cartData.filter(id => id !== itemId);

    await userData.save();

    res.json({ success: true, message: "Item removed from cart successfully", cartData: userData.cartData });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error removing from cart", error: error.message });
  }
};

// Get user's cart array
const getCart = async (req, res) => {
  try {
    const { userId } = req.body;
    let userData = await UserModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, cartData: userData.cartData });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error fetching cart", error: error.message });
  }
};

export { AddTocart, removeFromCart, getCart };

