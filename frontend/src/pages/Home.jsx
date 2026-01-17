import React, { useState } from "react";
import Header from "../componenets/Header";

import Exploreitem  from "./ExpolerItem";
import FoodDisplay from "../componenets/FoodDisplay";
import Appdowload from "../componenets/Appdowload";
const Home = () => {
  const [category, setcategory] = useState("All");

  return (
    <div>
      
      <Header />
      <Exploreitem  category={category} setcategory={setcategory} />
      <FoodDisplay category={category} />
    <Appdowload />
    </div>
  );
};

export default Home;
