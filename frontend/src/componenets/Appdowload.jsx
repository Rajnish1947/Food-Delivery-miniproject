import React from 'react';
import { assets } from '../assets/assets/assets';
import DonateHero from '../componenets/DonateHero';
import DonateCard from './DonateCard';
import NgoSection from './NgoSection'
const Appdowload = () => {
  return (
    <div className="text-center mt-24 px-4">
      <DonateHero />
      <NgoSection />
    
      <p className="text-2xl font-semibold mb-6">
        For Better Experience, Download <br /> the <span className="text-red-500">Tomato</span> App
      </p>
      <div className="flex justify-center items-center gap-4 mt-4">
        <img
          className="cursor-pointer w-40 md:w-48 transition-transform hover:scale-105"
          src={assets.play_store}
          alt="Download from Play Store"
        />
        <img
          className="cursor-pointer w-40 md:w-48 transition-transform hover:scale-105"
          src={assets.app_store}
          alt="Download from App Store"
        />
      </div>
    </div>
  );
};

export default Appdowload;
