import React, { useContext } from 'react'
import { shopContext } from '../Context/cartContext';

export default function CartItems({ data }) {
    const { id, name, price, imageURL } = data;
    const {count, addToCart, removeFromCart} = useContext(shopContext);
    return (
        <div className='border-black border-2 rounded-md p-2'>
            <div className='flex justify-between'>
                <img src={imageURL} className='h-[250px] w-[300px] object-cover' />
                <div className='flex item-center justify-between flex-col'>
                    <h1 className='text-[1vw] uppercase ... font-semibold '>{name}</h1>
                    <div className='flex items-center justify-around'>
                      <button>-</button>
                      <h1>{count[id]}</h1>
                      <button>+</button>
                    </div>
                </div>
                <p className='text-[1.5vw] uppercase ... font-semibold'>Rs.{price}</p>
            </div>
        </div>
    );
}
