
import React, { useContext, useState } from "react";
import { StoreContext } from "../context/Storecontext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PlaceOrder = () => {
  const { getTotalCartAmount, token, cartItems, backendurl, food_list } = useContext(StoreContext);

  const subtotal = getTotalCartAmount();
  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  const [data, setData] = useState({
    firstname: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const [isLoading, setIsLoading] = useState(false);

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();

    if (!token) {
      toast.error("You must be logged in to place an order.");
      return;
    }

    const address = {
      name: `${data.firstname} ${data.lastName}`,
      email: data.email,
      street: data.street,
      city: data.city,
      state: data.state,
      zipcode: data.zipcode,
      country: data.country,
      phone: data.phone,
    };

    if (!cartItems || typeof cartItems !== "object" || Object.keys(cartItems).length === 0) {
      toast.error("Cart is empty.");
      return;
    }

    if (!Array.isArray(food_list) || food_list.length === 0) {
      toast.error("Food list is not loaded.");
      return;
    }

    let items;
    try {
      items = Object.keys(cartItems)
        .filter((id) => cartItems[id] > 0)
        .map((id) => {
          const item = food_list.find((food) => food._id === id);
          if (!item) throw new Error(`Item with ID ${id} not found`);
          if (typeof item.price !== "number") throw new Error(`Invalid price for item ${item.name}`);
          return {
            name: item.name,
            price: item.price,
            quantity: cartItems[id],
          };
        });
    } catch (error) {
      toast.error(error.message);
      return;
    }

    setIsLoading(true);
    try {
      const res = await axios.post(`${backendurl}/api/order/place`, {
        userId: token,
        amount: total,
        address,
        items,
      });

      if (res.data.success && res.data.session_url) {
        toast.success("Redirecting to payment...");
        window.location.href = res.data.session_url;
      } else {
        toast.error("Failed to place order. Try again later.");
      }
    } catch (error) {
      console.error("Order error:", error);
      toast.error("Something went wrong while placing the order.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="max-w-6xl mx-auto p-6" onSubmit={handlePlaceOrder}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Delivery Info */}
        <div className="bg-white p-8 rounded-2xl shadow-md space-y-6">
          <h2 className="text-3xl font-extrabold border-b pb-3">🚚 Delivery Information</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="firstname" onChange={onChangeHandler} value={data.firstname} placeholder="First name" className="form-input p-2 rounded border bg-slate-50" required />
            <input name="lastName" onChange={onChangeHandler} value={data.lastName} placeholder="Last name" className="form-input p-2 rounded border bg-slate-50" required />
          </div>

          <input name="email" type="email" onChange={onChangeHandler} value={data.email} placeholder="Email" className="form-input p-2 rounded border bg-slate-50 w-full" required />
          <input name="street" onChange={onChangeHandler} value={data.street} placeholder="Street" className="form-input p-2 rounded border bg-slate-50 w-full" required />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="city" onChange={onChangeHandler} value={data.city} placeholder="City" className="form-input p-2 rounded border bg-slate-50" required />
            <input name="state" onChange={onChangeHandler} value={data.state} placeholder="State" className="form-input p-2 rounded border bg-slate-50" required />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input name="zipcode" onChange={onChangeHandler} value={data.zipcode} placeholder="Zip code" className="form-input p-2 rounded border bg-slate-50" required />
            <input name="country" onChange={onChangeHandler} value={data.country} placeholder="Country" className="form-input p-2 rounded border bg-slate-50" required />
          </div>

          <input name="phone" onChange={onChangeHandler} value={data.phone} placeholder="+91 0000000000" className="form-input p-2 rounded border bg-slate-50 w-full" required />
        </div>

        {/* Order Summary */}
        <div className="bg-white p-6 rounded-lg shadow-md space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Cart Totals</h3>
          <div className="flex justify-between"><p>Subtotal</p><p>${subtotal.toFixed(2)}</p></div>
          <div className="flex justify-between"><p>Delivery Fee</p><p>${deliveryFee.toFixed(2)}</p></div>
          <div className="flex justify-between font-bold text-lg"><p>Total</p><p>${total.toFixed(2)}</p></div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full mt-10 text-white py-3 rounded-md transition duration-300 ${
              isLoading ? "bg-orange-400 cursor-not-allowed" : "bg-orange-600 hover:bg-orange-700"
            }`}
          >
            {isLoading ? "Processing..." : "PROCEED TO PAYMENT"}
          </button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
