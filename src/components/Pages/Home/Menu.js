import React from 'react'
import useDishes from '../../../hooks/useDishes'
import Dishes from './Dishes';
import './Home.css'

const Menu = () => {
  const { dishes } = useDishes();

    const all_dishes = Object.entries(dishes).map((dish, idx) => <Dishes dish={dish} key={idx}/>)
  return (
    <div className='container mx-auto my-10'>
      <div className='flex md:w-3/12 w-8/12 justify-between mx-auto'>
        <button className='font-semibold menu-btn'>Breakfast</button>
        <button className='font-semibold menu-btn'>Lunch</button>
        <button className='font-semibold menu-btn'>Dinner</button>
      </div>
      <div className="grid md:grid-cols-3 gap-4 w-9/12 mx-auto my-10">
        {all_dishes}
      </div>
      <button className="rounded-xl py-3 px-6 bg-gradient-to-r from-red-500 to-red-700 text-white text-xl">Checkout Your Food</button>
    </div>
  )
}

export default Menu
