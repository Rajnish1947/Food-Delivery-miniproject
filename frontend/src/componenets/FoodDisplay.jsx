import React, { useContext } from 'react'
import {StoreContext} from "../context/Storecontext"
import FoodItem from './FoodItem'
const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext)
  return (
    <div className='mt-[30px]'>
        <h2 className='text-#262626 lg:text-3xl sm:text-2xl font-medium text-[max(2.5vw,12px)] '> Top Dishes Near You</h2>
     <div className='grid grid-cols-auto mt-[40px] gap-[30px]'>
  {food_list
    .filter(item => category === "All" || category === item.category)
    .map((item, key) => (
      <FoodItem
        key={key}
        id={item._id}
        name={item.name}
        category={item.category}
        description={item.description}
        price={item.price}
        image={item.image}
      />
  ))}
</div>
    </div>
  )
}

export default FoodDisplay ;

