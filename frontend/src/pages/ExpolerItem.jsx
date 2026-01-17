import React from "react";
import NavBar from "../componenets/NavBar";
import { menu_list } from "../assets/assets/assets";

const Exploreitem = ({ category, setcategory }) => {
  return (
    <div className="mt-12 mb-3 flex flex-col gap-[20px] ">
      <h1 className="text-#262626 lg:text-3xl sm:text-2xl font-medium text-[max(2.5vw,12px)] ">
        Explore Our menu
      </h1>
      <p className="text-#808080 lg:max-w-[60%] md:max-w-[70%] sm:max-w-[80%]: text-meduim sm:text-sm  ">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla ab omnis
        illum cupiditate culpa magni voluptate eaque, modi autem beatae ad
        repellat
      </p>
      <div className="flex mt-6  sm:justify-center gap-4 pt-4 w-full md:w-[80%] overflow-scroll justify-between items-center  text-center m-[20px 0px]  ">
        {menu_list.map((item) => {
          return (
            <div
              onClick={() =>
                setcategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
            >
              <img
                src={item.menu_image}
                className={`flex flex-col items-center text-xl cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500 ${
                  category === item.menu_name
                    ? "border-2 border-indigo-600 rounded-full bg-indigo-100 p-1"
                    : ""
                }`}
                alt=""
              />
              <p className="mt-[10px] text-#74747 cursor-pointer text-[max(1.5vw,12px)]">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="m-[10px 0px] h-[2px] bg-#e2e2e2 border-border-none" />
    </div>
  );

};

export default Exploreitem ;

