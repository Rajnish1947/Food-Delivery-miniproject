
// import React, { useState, useEffect } from "react";
// import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
// import axios from "axios";
// import { toast } from "react-toastify"; // Use react-toastify
// import "react-toastify/dist/ReactToastify.css";

// const CheckoutForm = ({ ngoName = "NGO" }) => {
//   const stripe = useStripe();
//   const elements = useElements();

//   const [amount, setAmount] = useState(500); // default amount
//   const [clientSecret, setClientSecret] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   useEffect(() => {
//     if (amount <= 0) return;

//     // Create PaymentIntent when amount changes
//     const createPaymentIntent = async () => {
//       try {
//         const response = await axios.post(
//           "http://localhost:5000/api/payment/create",
//           { amount },
//           { headers: { "Content-Type": "application/json" } }
//         );
//         setClientSecret(response.data.clientSecret);
//       } catch (err) {
//         console.error("Stripe PaymentIntent Error:", err.response || err);
//         setMessage("Failed to initialize payment. Try again later.");
//       }
//     };

//     createPaymentIntent();
//   }, [amount]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setMessage("");

//     if (!stripe || !elements) return;

//     try {
//       const cardElement = elements.getElement(CardElement);

//       const result = await stripe.confirmCardPayment(clientSecret, {
//         payment_method: {
//           card: cardElement,
//         },
//       });

//       if (result.error) {
//         setMessage(result.error.message);
//       } else if (result.paymentIntent.status === "succeeded") {
//         toast.success(`Payment of ₹${amount} to ${ngoName} Successful 🎉`);
//         setMessage(`Payment of ₹${amount} to ${ngoName} Successful 🎉`);
//       }
//     } catch (err) {
//       console.error(err);
//       setMessage("Payment failed. Please try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-12 p-6 bg-white shadow-lg rounded-2xl">
//       <h2 className="text-2xl font-bold mb-4 text-center">
//         Donate to {ngoName}
//       </h2>

//       {/* Input for dynamic amount */}
//       <div className="mb-4">
//         <label className="block mb-2 font-semibold">Enter Amount (₹)</label>
//         <input
//           type="number"
//           min="1"
//           value={amount}
//           onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
//           className="w-full p-3 border rounded-lg"
//         />
//       </div>

//       <form onSubmit={handleSubmit}>
//         <CardElement className="p-4 border rounded-lg mb-6" />
//         <button
//           type="submit"
//           disabled={!stripe || !clientSecret || loading || amount <= 0}
//           className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition-all duration-300 font-semibold"
//         >
//           {loading ? "Processing..." : `Pay ₹${amount}`}
//         </button>
//       </form>

//     </div>
//   );
// };

// export default CheckoutForm;
import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CheckoutForm = ({ ngoName = "NGO", defaultAmount = 0, onPaymentSuccess }) => {
  const stripe = useStripe();
  const elements = useElements();

  const [amount, setAmount] = useState(defaultAmount); // auto-filled amount
  const [clientSecret, setClientSecret] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (amount <= 0) return;

    const createPaymentIntent = async () => {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/payment/create",
          { amount },
          { headers: { "Content-Type": "application/json" } }
        );
        setClientSecret(response.data.clientSecret);
      } catch (err) {
        console.error("Stripe PaymentIntent Error:", err.response || err);
        setMessage("Failed to initialize payment. Try again later.");
      }
    };

    createPaymentIntent();
  }, [amount]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    if (!stripe || !elements) return;

    try {
      const cardElement = elements.getElement(CardElement);

      const result = await stripe.confirmCardPayment(clientSecret, {
        payment_method: { card: cardElement },
      });

      if (result.error) {
        setMessage(result.error.message);
      } else if (result.paymentIntent.status === "succeeded") {
        toast.success(`Payment of ₹${amount} to ${ngoName} Successful 🎉`);
        setMessage(`Payment of ₹${amount} to ${ngoName} Successful 🎉`);
        if (onPaymentSuccess) onPaymentSuccess(); // notify parent to close modal
      }
    } catch (err) {
      console.error(err);
      setMessage("Payment failed. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="max-w-md mx-auto mt-4 p-6 bg-white shadow-lg rounded-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">
        Donate to {ngoName}
      </h2>

      {/* Display selected amount (readonly) */}
      <div className="mb-4">
        <label className="block mb-2 font-semibold">Amount (₹)</label>
        <input
          type="number"
          value={amount}
          readOnly
          className="w-full p-3 border rounded-lg bg-gray-100 cursor-not-allowed"
        />
      </div>

      <form onSubmit={handleSubmit}>
        <CardElement className="p-4 border rounded-lg mb-6" />
        <button
          type="submit"
          disabled={!stripe || !clientSecret || loading || amount <= 0}
          className="w-full bg-purple-700 text-white py-3 rounded-lg hover:bg-purple-800 transition-all duration-300 font-semibold"
        >
          {loading ? "Processing..." : `Pay ₹${amount}`}
        </button>
      </form>

      {message && <p className="text-center mt-4 text-red-600">{message}</p>}
    </div>
  );
};

export default CheckoutForm;
