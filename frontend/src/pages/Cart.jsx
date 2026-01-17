import React, { useContext, useState } from "react";
import { StoreContext } from "../context/Storecontext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { food_list, cartItem, removeFromCart, getTotalCartAmount ,backendurl } =
    useContext(StoreContext);
  const [promoCode, setPromoCode] = useState("");
  const navigate = useNavigate();
  const subtotal = food_list.reduce((acc, item) => {
    return acc + item.price * (cartItem[item._id] || 0);
  }, 0);

  const deliveryFee = subtotal > 0 ? 2 : 0;
  const total = subtotal + deliveryFee;

  const handleApplyPromo = () => {
    if (promoCode === "DISCOUNT10") {
      alert("Promo code applied!");
      // Apply discount logic here
    } else {
      alert("Invalid promo code.");
    }
  };

  return (
    <div className="px-4 sm:px-8 md:px-16 py-10 min-h-screen bg-gray-50">
      <h2 className="text-2xl sm:text-3xl font-semibold text-gray-700 mb-8 text-center">
        Shopping <span className="text-orange-600">Cart</span>
      </h2>

      {/* Cart Headers */}
      <div className="hidden md:grid grid-cols-6 gap-4 bg-white p-4 rounded-lg shadow text-sm font-semibold text-gray-600">
        <p>Item</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      {/* Cart Items */}
      {food_list.map((item) => {
        if (cartItem[item._id] > 0) {
          return (
            <div
              key={item._id}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 items-center gap-4 bg-white p-4 rounded-lg shadow-lg mt-4 text-gray-800 font-semibold"
            >
              <div>
                <img
                    src={backendurl+'/uploads/'+item.image}
                  alt={item.name || "Food Item"}
                  className="w-16 h-16 rounded object-cover"
                />
              </div>
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
              <p>{cartItem[item._id]}</p>
              <p>${(item.price * cartItem[item._id]).toFixed(2)}</p>
              <button
                onClick={() => removeFromCart(item._id)}
                className="text-red-600 font-bold hover:text-red-700 transition"
              >
                ✕
              </button>
            </div>
          );
        } else return null;
      })}

      {/* Empty Cart Message */}
      {subtotal === 0 && (
        <div className="text-center text-gray-500 mt-10 text-lg">
          Your cart is currently empty.
        </div>
      )}

      {/* Totals and Promo Section */}
      {subtotal > 0 && (
        <div className="mt-10 md:flex md:gap-8 md:justify-center">
          {/* Cart Totals */}
          <div className="bg-white p-6 rounded-lg shadow-md w-full md:w-1/2 space-y-4 text-gray-700">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Cart Totals
            </h3>
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${getTotalCartAmount().toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>${deliveryFee.toFixed(2)}</p>
            </div>
            <hr />
            <div className="flex justify-between font-bold text-lg">
              <p>Total</p>
              <p>${(getTotalCartAmount() + deliveryFee).toFixed(2)}</p>
            </div>

            <button
              onClick={() => navigate("/order")}
              className="w-full mt-6 text-sm bg-orange-600 text-white py-3 rounded-md hover:bg-orange-700 transition duration-300"
            >
              PROCEED TO CHECKOUT
            </button>
          </div>

          {/* Promo Code Section */}
          <div className="mt-8 md:mt-0 bg-white p-6 rounded-lg shadow-md w-full md:w-1/2">
            <p className="text-gray-700 mb-2">
              If you have a promo code, enter it here:
            </p>
            <div className="flex flex-col w-full mt-8 sm:flex-row gap-4">
              <input
                type="text"
                placeholder="Enter promo code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="flex-grow px-4 py-2 border rounded-md outline-none focus:ring-2 bg-slate-100 focus:ring-gray-400"
              />
              <button
                onClick={handleApplyPromo}
                className="bg-gray-800 text-white px-4 py-2  rounded-md hover:bg-gray-900 transition"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;


