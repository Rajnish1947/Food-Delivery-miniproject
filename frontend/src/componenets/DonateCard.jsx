import React, { useState } from "react";

const DonateCard = ({ foodItems = [], ngos = [] }) => {
  const [selectedFood, setSelectedFood] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [selectedNgo, setSelectedNgo] = useState("");

  const handleDonate = () => {
    if (!selectedFood || !selectedNgo || quantity < 1) {
      alert("Please fill all fields correctly!");
      return;
    }

    console.log("Donation Submitted:", { selectedFood, quantity, selectedNgo });
    alert(`✅ Thank you! You donated ${quantity}x ${selectedFood} to ${selectedNgo}.`);

    setSelectedFood("");
    setQuantity(1);
    setSelectedNgo("");
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6">
      <h2 className="text-2xl font-bold text-green-700 mb-4">Donate Your Food</h2>

      {/* Food Selection */}
      <label className="block mb-2 font-semibold">Select Food Item</label>
      <select
        value={selectedFood}
        onChange={(e) => setSelectedFood(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <option value="">-- Choose Food --</option>
        {foodItems.length > 0 ? (
          foodItems.map((item, idx) => (
            <option key={idx} value={item.name}>
              {item.name}
            </option>
          ))
        ) : (
          <option disabled>No food items available</option>
        )}
      </select>

      {/* Quantity */}
      <label className="block mb-2 font-semibold">Quantity</label>
      <input
        type="number"
        min="1"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-green-400"
      />

      {/* NGO Selection */}
      <label className="block mb-2 font-semibold">Select NGO</label>
      <select
        value={selectedNgo}
        onChange={(e) => setSelectedNgo(e.target.value)}
        className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-green-400"
      >
        <option value="">-- Choose NGO --</option>
        {ngos.length > 0 ? (
          ngos.map((ngo, idx) => (
            <option key={idx} value={ngo.name}>
              {ngo.name} - {ngo.location}
            </option>
          ))
        ) : (
          <option disabled>No NGOs available</option>
        )}
      </select>

      <button
        onClick={handleDonate}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md shadow-md transition"
      >
        Donate Now ♻
      </button>
    </div>
  );
};

export default DonateCard;
