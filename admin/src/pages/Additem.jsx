


import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Additem = () => {
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [data, setData] = useState({
    name: "",
    description: "",
    category: "Salad",
    price: "",
  });

  // Generate image preview
  useEffect(() => {
    if (image) {
      const objectUrl = URL.createObjectURL(image);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    }
  }, [image]);

  // Handle input changes
  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form
  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (!image) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);
    formData.append("price", data.price);
    formData.append("image", image);

    try {
      const response = await axios.post(
        `http://localhost:5000/api/foods/add`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.data.success) {
        toast.success("Item added successfully!");
        // Clear form after submission
        setData({
          name: "",
          description: "",
          category: "Salad",
          price: "",
        });
        setImage(null);
        setPreviewUrl(null);
      } else {
        toast.error("Failed to add item. Please try again.");
      }
    } catch (error) {
      toast.error("Error submitting form. Check your server or network.");
    }
  };

  return (
    <div className="p-3 max-w-xl mx-auto">
      <form
        onSubmit={onSubmitHandler}
        className="space-y-6 bg-white p-6 rounded-lg shadow-lg border border-gray-300"
      >
        {/* Upload Image */}
        <div>
          <p className="font-semibold mb-2">Upload Image</p>
          <label htmlFor="image" className="block w-40 cursor-pointer">
            <img
              src={previewUrl || assets.upload_area}
              alt="Upload"
              className="rounded-lg border object-cover h-22 w-40"
            />
          </label>
          <input
            onChange={(e) => setImage(e.target.files[0])}
            type="file"
            hidden
            required
            id="image"
            accept="image/*"
          />
        </div>

        {/* Product Name */}
        <div>
          <p className="font-semibold mb-2">Product Name</p>
          <input
            type="text"
            onChange={onChangeHandler}
            value={data.name}
            name="name"
            placeholder="Type here"
            className="w-[100%] border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Product Description */}
        <div>
          <p className="font-semibold mb-2">Product Description</p>
          <textarea
            name="description"
            rows="5"
            onChange={onChangeHandler}
            value={data.description}
            placeholder="Write content here"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>

        {/* Category & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <p className="font-semibold mb-2">Product Category</p>
            <select
              name="category"
              onChange={onChangeHandler}
              value={data.category}
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>

          <div>
            <p className="font-semibold mb-2">Product Price</p>
            <input
              type="number"
              name="price"
              onChange={onChangeHandler}
              value={data.price}
              placeholder="$20"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-right">
          <button
            type="submit"
            className="bg-orange-600 text-white px-11 py-2 rounded-md hover:bg-orange-700 transition"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Additem;
