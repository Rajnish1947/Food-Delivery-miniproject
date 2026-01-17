import React from 'react'
import { useState } from 'react';

import Exploreitem from './ExpolerItem'
import FoodDisplay  from '../componenets/FoodDisplay'
const Menu = () => {
    const [category, setcategory] = useState("All");
  return (
  <>
  
  <Exploreitem category={category} setcategory={setcategory} />
  <FoodDisplay category={category} />
  </>
  )
}

export default Menu ;