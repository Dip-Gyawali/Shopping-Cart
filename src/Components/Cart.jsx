import React, { useContext } from 'react'
import items from '../data/items.json'
import { shopContext } from '../Context/cartContext';
import CartItems from './CartItems';
import CartFooter from './CartFooter';

export default function Cart() {
  const { count } = useContext(shopContext);
  return (
    <>
    <div className='p-6 pb-32'>
      <h1 className='text-center text-[3vw]'>Cart Section</h1>
      <div className='grid grid-cols-1 w-full gap-5'>
        {items.map((ele,index) => {
          if (count[ele.id] > 0) {
            return <CartItems key={index} data={ele} />
          }
        })}
      </div>
    </div>
    <CartFooter/>
    </>
  )
}
