// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./config/mongodb.js";
// import foodRoutes  from "./routes/foodroutes.js"; 
// import Userrouter from './routes/Userroutes.js'
// import Cartrouter from "./routes/CartRoutes.js";
// import chartbot from "./routes/chat.js"


// import paymentRoute from "./routes/OrderRoutes.js";
// import orderRouter from "./routes/OrderRoutes.js";

// const app = express();
// const port = process.env.PORT || 4000;

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(express.json());
// app.use(cors());

// //  Serve static files (uploaded images)
// app.use('/uploads', express.static('uploads'));

// //  Mount routes
// app.use("/api/foods",foodRoutes ); 

// app.use("/api/auth",Userrouter)
// app.use("/api/cart", Cartrouter);

// // for
// app.use("/api/chat", chat);

// app.use("/api/payment", paymentRoute);
// app.use("/api/order", orderRouter);

// // app.use("/image" ,express.static('uploads'))
// app.use("/api/chat", chartbot);

// // API Test Route
// app.get("/", (req, res) => {
//   res.send("API is running successfully");
// });

// // Start Server
// app.listen(port, () => {
//   console.log(`Server is running successfully at http://localhost:${port}`);
// });




// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./config/mongodb.js";
// import foodRoutes from "./routes/foodroutes.js"; 
// import Userrouter from './routes/Userroutes.js';
// import Cartrouter from "./routes/CartRoutes.js";
// import chartbot from "./routes/chat.js"; // <-- chat route

// import paymentRoute from "./routes/OrderRoutes.js";
// import orderRouter from "./routes/OrderRoutes.js";

// const app = express();
// const port = process.env.PORT || 4000;

// // Connect to MongoDB
// connectDB();

// // Middleware
// app.use(express.json());
// app.use(cors());

// // Serve static files
// app.use('/uploads', express.static('uploads'));

// // Mount routes
// app.use("/api/foods", foodRoutes); 
// app.use("/api/auth", Userrouter);
// app.use("/api/cart", Cartrouter);
// app.use("/api/payment", paymentRoute);
// app.use("/api/order", orderRouter);

// // Mount chat route **once**
// app.use("/api/chat", chartbot); // POST /api/chat/message

// // API Test Route
// app.get("/", (req, res) => {
//   res.send("API is running successfully");
// });

// // Start Server
// app.listen(port, () => {
//   console.log(`Server is running successfully at http://localhost:${port}`);
// });
import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./config/mongodb.js";

// Import routes
import foodRoutes from "./routes/foodroutes.js"; 
import userRoutes from "./routes/Userroutes.js";
import cartRoutes from "./routes/CartRoutes.js";
import chatRoutes from "./routes/chat.js";
import paymentRoutes from "./routes/OrderRoutes.js";
import orderRoutes from "./routes/OrderRoutes.js"; // if different functionality from payment

const app = express();
const port = process.env.PORT || 4000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(cors());

// Serve static files
app.use('/uploads', express.static('uploads'));

// Mount routes
app.use("/api/foods", foodRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/payment", paymentRoutes); // Stripe payment
app.use("/api/order", orderRoutes); // order management
app.use("/api/chat", chatRoutes); // Chatbot messages

// Test Route
app.get("/", (req, res) => {
  res.send("API is running successfully");
});

// Start server
app.listen(port, () => {
  console.log(`Server is running successfully at http://localhost:${port}`);
});
