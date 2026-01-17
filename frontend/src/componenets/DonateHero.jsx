
// import React from "react";

// const DonateHero = () => {
//   return (
//     <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 flex flex-col items-center">
//       {/* Hero Heading */}
//       <h1 className="text-3xl md:text-5xl font-extrabold text-center text-purple-800 mb-10 leading-tight">
//         Donate Food for Homeless People in Chennai
//       </h1>

//       {/* Hero Video */}
//       <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
//       <img className="w-full" src="https://media.istockphoto.com/id/458065911/photo/poor-family-at-slum-area.jpg?s=612x612&w=0&k=20&c=hGsL1Qk0Snl9tR7xIkcfHaNPWJo00LVGrjykXwbpwn4=" alt="" />
//       </div>

//       {/* Persuasive Text */}
//       <div className="max-w-4xl text-center mt-10">
//         <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">
//           Every Meal Matters 💜
//         </h2>
//         <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
//           Your small contribution can feed someone a hot, nutritious meal. In
//           Chennai, thousands of homeless individuals struggle daily your
//           donation ensures they get food, care, and hope. Join our community of
//           600+ donors creating over 10,000 meals every month.
//         </p>
//       </div>

//       {/* Persuasive Card */}
//       <div style={{backgroundImage:"https://images.unsplash.com/photo-1635929114944-8bab23b98e74?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cG9vciUyMHBlb3BsZXxlbnwwfHwwfHx8MA%3D%3D"}} className="max-w-4xl w-full   p-10 rounded-3xl shadow-2xl mt-12 border ">
//         <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-6 leading-snug">
//           Your Small Help Can{" "}
//           <span className="text-yellow-300">Change Someone’s Life</span>
//         </h3>

//         <div className="space-y-5 text-lg md:text-xl leading-relaxed">
//           <p>
//             <span className="font-semibold">💜 Every ₹50 = One Meal</span> — Feed someone a fresh, healthy meal with a small contribution.
//           </p>
//           <p>
//             <span className="font-semibold">🌍 Zero Food Waste</span> — Help save surplus food and serve those in need.
//           </p>
//           <p>
//             <span className="font-semibold">❤️ Make a Real Impact</span> — Support homeless families and bring smiles to children.
//           </p>
//           <p>
//             <span className="font-semibold">🏆 Join 600+ Donors</span> — Be part of a community creating thousands of meals every month.
//           </p>
//         </div>

//         {/* Donate Button */}
//         <div className="mt-8 text-center">
//           <button className="mt-4 bg-white text-purple-700 hover:bg-yellow-300 hover:text-purple-900 transition-all duration-300 px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105">
//             Donate Now – Be the Reason for Someone’s Smile
//           </button>
//           <p className="mt-4 text-sm md:text-base opacity-80">
//             💡 Even a small help can make a big difference. Start today.
//           </p>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default DonateHero;

import React from "react";

const DonateHero = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-12 px-6 md:px-16 flex flex-col items-center">
      
      {/* Heading */}
      <h1 className="text-3xl md:text-5xl font-extrabold text-center text-purple-800 mb-10 leading-tight">
        Donate Food for Homeless People in Chennai
      </h1>

      {/* Hero Image */}
      <div className="w-full max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
        <img
          className="w-full"
          src="https://media.istockphoto.com/id/458065911/photo/poor-family-at-slum-area.jpg?s=612x612&w=0&k=20&c=hGsL1Qk0Snl9tR7xIkcfHaNPWJo00LVGrjykXwbpwn4="
          alt="Homeless family receiving food"
        />
      </div>

      {/* Persuasive Text */}
      <div className="max-w-4xl text-center mt-10">
        <h2 className="text-2xl md:text-3xl font-bold text-purple-700 mb-4">
          Every Meal Matters 💜
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          Your small contribution can feed someone a hot, nutritious meal.  
          Thousands of homeless individuals in Chennai struggle daily —  
          <span className="font-semibold">your donation gives them food, care, and hope.</span>  
          Join our community of 600+ donors creating over 10,000 meals every month.
        </p>
      </div>

      {/* Persuasive Card */}
      <div
        className="max-w-4xl w-full mt-12 p-10 rounded-3xl shadow-2xl border relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1635929114944-8bab23b98e74?fm=jpg&q=60&w=3000')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

        <div className="relative z-10 text-white">
          <h3 className="text-3xl md:text-4xl font-extrabold text-center mb-6 leading-snug">
            Your Small Help Can{" "}
            <span className="text-yellow-300">Change Someone’s Life</span>
          </h3>

          <div className="grid md:grid-cols-2 gap-6 text-lg md:text-xl leading-relaxed">
  <div className="p-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg">
    <p className="flex items-start gap-3">
      <span className="text-3xl">💜</span>
      <span>
        <span className="font-semibold">Every ₹50 = One Meal</span><br />
        Feed someone a fresh, healthy, hot meal with your small support.
      </span>
    </p>
  </div>

  <div className="p-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg">
    <p className="flex items-start gap-3">
      <span className="text-3xl">🌍</span>
      <span>
        <span className="font-semibold">Zero Food Waste</span><br />
        We rescue surplus food and deliver it to people in need.
      </span>
    </p>
  </div>

  <div className="p-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg">
    <p className="flex items-start gap-3">
      <span className="text-3xl">❤️</span>
      <span>
        <span className="font-semibold">Real Impact</span><br />
        Your donation directly supports homeless families and children.
      </span>
    </p>
  </div>

  <div className="p-5 bg-white/20 backdrop-blur-md rounded-xl border border-white/30 shadow-lg">
    <p className="flex items-start gap-3">
      <span className="text-3xl">🏆</span>
      <span>
        <span className="font-semibold">600+ Donors</span><br />
        Join a strong community serving thousands of meals every month.
      </span>
    </p>
  </div>
</div>


          {/* Donate Button */}
          <div className="mt-8 text-center">
            <button className="bg-yellow-300 text-purple-900 transition-all duration-300 px-10 py-5 rounded-full font-bold text-xl shadow-xl hover:scale-105 hover:bg-yellow-400">
              Donate Now – Be the Reason for Someone’s Smile
            </button>
            <p className="mt-4 text-sm md:text-base opacity-90">
              💡 Even a small help can make a big difference. Start today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DonateHero;
