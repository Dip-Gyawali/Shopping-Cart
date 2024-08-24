import React, { useContext } from 'react'
import { shopContext } from '../Context/cartContext';

export default function CartItems({ data }) {
    const { id, name, price, imageURL } = data;
    const { count, addToCart, removeFromCart } = useContext(shopContext);
    return (
        <div className='border-black border-2 rounded-md p-3 w-full h-auto'>
            <div className='flex items-center justify-between'>
                <img src={imageURL} className="w-[300px] h-[200px] object-cover rounded-md" alt={name} />
                <div className="flex flex-col items-center justify-center ml-4 gap-3">
                    <h1 className="text-2xl font-bold">{name}</h1>
                    <div className='flex items-center justify-center gap-3'>
                        <button className="bg-green-500 text-white font-semibold px-3 py-1 rounded hover:bg-green-600" onClick={()=> removeFromCart(id)}>
                            -
                        </button>
                        <span className="text-xl">{count[id]}</span>
                        <button className="bg-green-500 text-white font-semibold px-3 py-1 rounded hover:bg-green-600"onClick={()=> addToCart(id)}>
                            +
                        </button>
                    </div>
                </div>
                <p className="text-xl font-semibold">Rs.{price}</p>
            </div>
        </div>

    );
}
