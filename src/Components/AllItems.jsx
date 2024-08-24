import React, { useContext} from 'react'
import { shopContext } from '../Context/cartContext';


export default function AllItems({ id, name, price, imageURL}) {
    const {count,addToCart, removeFromCart} = useContext(shopContext);
    return (
        <div className='border-black p-1 border-solid border-2 rounded-lg'>
            <img src={imageURL} className='w-full h-80 object-cover rounded-lg' />
            <div className='flex items-center justify-between p-2'>
                <h1 className='text-xl font-bold'>{name}</h1>
                <p className='text-lg'>Rs.{price}</p>
            </div>
            <div class="flex items-center justify-center">
                <button class="bg-green-500 text-white font-semibold px-4 py-2 rounded hover:bg-green-600
                 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75" onClick={()=> addToCart(id)}>
                    Add to Cart {count[id]>0 && <>({count[id]})</>}
                </button>
                {/* <button onClick={()=>removeFromCart(id)}>Remove</button> */}
            </div>
        </div>
    )
}
