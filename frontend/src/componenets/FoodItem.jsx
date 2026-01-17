import React, { useContext } from "react";
import { assets } from "../assets/assets/assets";
import { StoreContext } from "../context/Storecontext";

const FoodItem = ({ id, name, price, description, image ,category}) => {
  const { cartItem, addToCart, removeFromCart ,backendurl  } = useContext(StoreContext);

  return (
    <div className="w-[90%] mb-12 mx-auto rounded-[15px] shadow-md transition-opacity duration-300 animate-fadein">
      <div className="w-full">
        <img
          className="rounded-tl-[15px] rounded-tr-[15px] w-full h-48 object-cover"
         src={backendurl+'/uploads/'+image}
          alt={name}
        />
        {!cartItem[id] ? (
          <img
            className="cursor-pointer mt-2 ml-2 w-8"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt="Add"
          />
        ) : (
          <div className="flex items-center gap-3 mt-2 ml-2">
            <img
              className="cursor-pointer w-8"
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt="Remove"
            />
            <p className="text-sm font-medium">{cartItem[id]}</p>
            <img
              className="cursor-pointer w-6"
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt="Add"
            />
          </div>
        )}
      </div>

      <div className="p-[20px]">
      <div className="flex justify-between items-center mb-[10px]">
  <div>
    <p className="font-medium text-[max(1.3vw,12px)]">{name} {category}</p>
   
  </div>
  <img
    className="w-[70px]"
    src={assets.rating_starts}
    alt="Rating Stars"
  />
</div>

        <p className="text-[#676767] text-[12px]">{description}</p>
        <p className="text-orange-600  text-[22px] font-bold mt-2">${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;


