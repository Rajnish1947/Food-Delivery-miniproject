import foodModel from "../models/foodmodel.js";
import fs from "fs";

// Add food item controller
const addFood = async (req, res) => {
  try {
    const image_filename = req.file.filename;

    const food = new foodModel({
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      image: image_filename,  // store only filename or full URL if needed
      category: req.body.category,
    });

    await food.save();
    res.status(201).json({success:true, message: "Food item added successfully", food });
  } catch (error) {
    console.error("Error adding food:", error);
    res.status(500).json({success:false, message: "Server error while adding food" });
  }
};

//  Get all food
const getFoodList = async (req, res) => {
  try {
    const foodList = await foodModel.find();
    res.status(200).json({ success: true, data:foodList });
  } catch (error) {
    console.error("Error fetching food list:", error);
    res.status(500).json({ success: false, message: "Server error while fetching food list" });
  }
};


const removeFood = async (req, res) => {
  try {
    const food = await foodModel.findById(req.body.id); // Get ID from body

    if (!food) {
      return res.status(404).json({ success: false, message: "Food item not found" });
    }

    // Delete image file if it exists
    const imagePath = `uploads/${food.image}`;
    if (fs.existsSync(imagePath)) {
      fs.unlinkSync(imagePath);
    }

    // Delete food document
    await foodModel.findByIdAndDelete(req.body.id);

    res.status(200).json({ success: true, message: "Food item removed successfully" });
  } catch (error) {
    console.error("Error removing food:", error);
    res.status(500).json({ success: false, message: "Server error while removing food" });
  }
};

//partial matching


const getFoodByName = async (req, res) => {
  try {
    const { name } = req.params;

    // Case-insensitive partial match using regex
    const regex = new RegExp(name, "i"); // "i" for case-insensitive

    const foods = await foodModel.find({ name: { $regex: regex } });

    if (foods.length === 0) {
      return res.status(404).json({ success: false, message: "No matching food items found" });
    }

    res.status(200).json({ success: true, foods });
  } catch (error) {
    console.error("Error fetching food by name:", error);
    res.status(500).json({ success: false, message: "Server error while fetching food" });
  }
};




export { addFood ,getFoodList ,removeFood ,getFoodByName };
