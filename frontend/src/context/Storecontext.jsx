
import { createContext, useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = ({ children }) => {
  const backendurl = "http://localhost:5000";
  const [cartItem, setCartItem] = useState({});
  const [token, setToken] = useState("");
  const [food_list, setfood_list] = useState([]);

  // Add to Cart
  const addToCart = async (itemId) => {
    if (!token) {
      toast.error("Please login to add items to cart.");
      return;
    }

    setCartItem((prev) => ({
      ...prev,
      [itemId]: prev[itemId] ? prev[itemId] + 1 : 1,
    }));

    try {
      await axios.post(
        `${backendurl}/api/cart/add`,
        { itemId },
        { headers: { token } }
      );
      toast.success("Item added to cart!");
    } catch (err) {
      console.error("Error adding to cart:", err.message);
      toast.error("Failed to add item. Try again.");
    }
  };

  // Remove from Cart
  const removeFromCart = async (itemId) => {
    if (!token) {
      toast.error("Please login to remove items from cart.");
      return;
    }

    setCartItem((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });

    try {
      await axios.post(
        `${backendurl}/api/cart/remove`,
        { itemId },
        { headers: { token } }
      );
      toast.info("Item removed from cart");
    } catch (err) {
      console.error("Error removing from cart:", err.message);
      toast.error("Failed to remove item. Try again.");
    }
  };

  // Clear Cart
  const clearCart = () => {
    setCartItem({});
    if (!token) {
      localStorage.removeItem("guestCart");
    }
  };


const loadCartData = async (savedToken) => {
  try {
    const response = await axios.post(
      `${backendurl}/api/cart/get`,
      {},
      { headers: { token: savedToken } }
    );

    const cartArray = response.data.cartData || [];

    // Convert array of IDs to quantity object
    const cartObj = {};
    for (let id of cartArray) {
      cartObj[id] = cartObj[id] ? cartObj[id] + 1 : 1;
    }

    setCartItem(cartObj);
  } catch (err) {
    console.error("Error loading cart data:", err.message);
    toast.error("Failed to load cart data");
  }
};

  // Get Total Cart Amount
  const getTotalCartAmount = () => {
    if (!food_list.length) return 0;
    let total = 0;
    for (const itemId in cartItem) {
      if (cartItem[itemId] > 0) {
        const itemInfo = food_list.find((product) => product._id === itemId);
        if (itemInfo) {
          total += itemInfo.price * cartItem[itemId];
        }
      }
    }
    return total;
  };

  // Fetch Food List from Backend
  const fetchFoodList = async () => {
    try {
      const response = await axios.get(`${backendurl}/api/foods/foodlist`);
      setfood_list(response.data.data || []);
    } catch (err) {
      console.error("Error fetching food list:", err.message);
    }
  };

  // Load Food List & Token on First Render
  useEffect(() => {
    const LoadData = async () => {
      await fetchFoodList();
      const savedToken = localStorage.getItem("token");
      if (savedToken) {
        setToken(savedToken);
      }
    };
    LoadData();
  }, []);

  // Load Cart for Guest Users
  useEffect(() => {
    if (!token) {
      const savedCart = localStorage.getItem("guestCart");
      if (savedCart) {
        setCartItem(JSON.parse(savedCart));
      }
    }
  }, [token]);

  // Save Guest Cart to localStorage
  useEffect(() => {
    if (!token) {
      localStorage.setItem("guestCart", JSON.stringify(cartItem));
    }
  }, [cartItem, token]);

  // Load Cart from Server after Token is Set
  useEffect(() => {
    if (token) {
      loadCartData(token);
    }
  }, [token]);

  const contextValue = {
    food_list,
    cartItem,
    getTotalCartAmount,
    addToCart,
    removeFromCart,
    clearCart,
    backendurl,
    token,
    setToken,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
