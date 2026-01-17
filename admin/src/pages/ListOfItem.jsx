

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ListOfItem = () => {

  const [list, setlist] = useState([]);
  const url = 'http://localhost:5000';

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/foods/foodlist`);
      console.log(response.data);
      if (response.data.success) {
        setlist(response.data.data);
      } else {
        toast.error("Error");
      }
    } catch (error) {
      toast.error("Server error");
    }
  };

 const handleDelete = async (id) => {
  try {
    const response = await axios.delete(`${url}/api/foods/remove`, {
      data: { id: id }  // Send id in request body
    });

    if (response.data.success) {
      toast.success(response.data.message);
      fetchList(); // Refresh the list
    } else {
      toast.error(response.data.message);
    }
  } catch (error) {
    toast.error("Delete failed");
  }
};


  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="p-4">
      <p className="text-2xl font-bold mb-4 text-center">All Food List</p>
      <div className="grid grid-cols-1 gap-4">
        <div className="grid grid-cols-5 font-bold text-center bg-gray-200 p-2 rounded">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>

        {list.map((item, index) => (
          <div key={index} className="grid grid-cols-5 items-center text-center border rounded p-2 shadow">
            <img
              src={`${url}/uploads/${item.image}`}
              alt={item.name}
              className="w-16 h-16 object-cover mx-auto rounded"
            />
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>${item.price}</p>
            <p
              className="text-red-500 text-2xl font-bold cursor-pointer"
              onClick={() => handleDelete(item._id)}
            >
              x
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListOfItem;
