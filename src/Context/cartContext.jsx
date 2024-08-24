import React, { createContext,useState } from 'react'
import items from '../data/items.json'

export const shopContext = createContext();

export default function cartContext({children}) {
  const [count, setCount] = useState(getDefaultCart());

  function getDefaultCart() {
    let cart = {};
    for (let i = 1; i <= items.length+1; i++) {
      cart[i] = 0;
    }
    return cart;
  }

  function addToCart(id) {
    setCount(prevCount => ({ ...prevCount, [id]: prevCount[id] + 1, }))
  }

  function removeFromCart(id) {
    setCount(prevCount => ({ ...prevCount, [id]: prevCount[id] - 1, }))
  }
 
  function getTotal(){
    let totalAmount =0;
    items.forEach((ele)=>{
      if(count[ele.id]>0){
        totalAmount+= count[ele.id] * ele.price;
      }
      console.log(totalAmount);
    })
    return totalAmount;
  }
  return (
    <shopContext.Provider value={{ count, addToCart, removeFromCart, getTotal}}>
      {children}
    </shopContext.Provider>
  );
}
