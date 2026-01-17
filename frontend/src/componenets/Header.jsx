


// import React from "react";
// import { assets } from "../assets/assets/assets";

// const Header = () => {
//   return (
//     <section
//       className="relative w-full h-[60vh] sm:h-[30vh] md:h-[60vh]  lg:h-[70vh] rounded-lg mb-8 bg-center bg-no-repeat bg-cover"
//       style={{
//         backgroundImage: `url('https://www.nimbleappgenie.com/ogimage/solutions/food-delivery-app-development-og.webp')`,
//       }}
//     >
//       {/* Optional dark overlay for readability */}
//       <div className="absolute inset-0 bg-black/50 rounded-lg"></div>

//       <div className="absolute mt-3 mb-6 inset-0 flex flex-col justify-end sm:justify-center gap-4 sm:gap-6 px-6 sm:px-10 md:px-16 lg:px-20 max-w-3xl">

// <h2 className="text-white  font-semibold text-3xl sm:text-4xl md:text-5xl leading-snug drop-shadow-md max-w-xl">
//   <span className="block md:mb-6 lg:mb-7">Order your favourite</span>
//   <span className="block text-yellow-300">food here</span>
// </h2>

//         <p className="text-white text-sm sm:text-base md:text-lg leading-relaxed drop-shadow-md">
//           Satisfy your hunger with our fast, reliable, and easy-to-use food delivery service.
//           From local favorites to top restaurants, we bring your cravings to your doorstep.
//         </p>
//         <button className="w-fit py-2 px-4 sm:py-3 sm:px-6 bg-white text-black rounded-full text-sm sm:text-base font-medium hover:bg-gray-200 transition duration-200">
//           View Menu
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Header;

import React from "react";
import { assets } from "../assets/assets/assets";

const Header = () => {
  return (
    <section
      className="relative w-full h-[65vh] sm:h-[40vh] md:h-[70vh] lg:h-[80vh] rounded-2xl mb-10 bg-center bg-no-repeat bg-cover overflow-hidden"
      style={{
        backgroundImage: `url('https://www.nimbleappgenie.com/ogimage/solutions/food-delivery-app-development-og.webp')`,
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center sm:justify-center lg:justify-center gap-5 px-6 sm:px-10 md:px-16 lg:px-20 max-w-3xl">
        <h2 className="text-white font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight drop-shadow-xl">
          <span className="block mb-2">Order your favourite</span>
          <span className="block text-yellow-400">food here 🍔</span>
        </h2>

        <p className="text-white/90 text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed drop-shadow-md max-w-2xl">
          Satisfy your hunger with our <span className="font-semibold">fast</span>, 
          <span className="font-semibold"> reliable</span>, and <span className="font-semibold">easy-to-use</span> food delivery service.  
          From local favorites to top restaurants, we bring your cravings right to your doorstep.
        </p>

        <div className="flex gap-4 mt-3">
          <button className="px-6 py-3 bg-yellow-400 text-black rounded-full text-base font-semibold shadow-md hover:bg-yellow-500 hover:scale-105 transition-transform duration-200">
            View Menu
          </button>
          <button className="px-6 py-3 bg-white/90 text-black rounded-full text-base font-medium hover:bg-white hover:scale-105 transition-transform duration-200">
            Download App
          </button>
        </div>
      </div>
    </section>
  );
};

export default Header;
