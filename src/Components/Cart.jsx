import React, { useContext } from 'react'
import items from '../data/items.json'
import { shopContext } from '../Context/cartContext';
import CartItems from './CartItems';
import CartFooter from './CartFooter';

export default function Cart() {
  const { count,getTotal } = useContext(shopContext);
  const totalPrice = getTotal();
  return (
    <>
    <div className='p-6 pb-32'>
      <h1 className='text-center text-[3vw]'>Cart Section</h1>
      <div className='flex items-center justify-center flex-col w-[700px] mx-auto gap-5'>
        {items.map((ele,index) => {
          if (count[ele.id] > 0) {
            return <CartItems key={index} data={ele} />
          }
        })}
      <h1 className='text-[2vw] font-bold'>Total Rs.{totalPrice}</h1>
      </div>
    </div>
    <CartFooter/>
    </>
  )
}
