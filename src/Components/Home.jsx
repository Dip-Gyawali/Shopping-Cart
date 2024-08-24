import React from 'react';
import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
      <div className="flex flex-col md:flex-row items-center justify-between w-full p-8">
        {/* Text Section */}
        <div className="flex justify-center flex-col text-left p-4 md:p-8 g-5 w-[40%]">
          <h1 className="text-5xl font-bold text-gray-800">
            Welcome to Electrify
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Explore the latest gadgets including mobile phones, TVs, cameras, laptops, and more. Shop now and
            get Rs.5000 worth of gift card on every purchase.
          </p>
          <NavLink to='/store'>
          <button className="mt-3 bg-green-500 text-white font-semibold px-4 py-2 rounded-xl hover:bg-green-600
                 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-[1vw] w-[20vw]">
            Shop Now
          </button>
          </NavLink>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center items-center p-4 md:p-8">
          <img
            src="https://img.freepik.com/premium-vector/new-home-appliance-products-electronics-store-big-sale-black-friday-shopping-concept-horizontal_48369-46025.jpg?semt=ais_hybrid"
            alt="Store Items"
            className="w-[600px] h-[400px] rounded-md shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
