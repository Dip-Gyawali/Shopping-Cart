import React, { useContext } from 'react'

export default function Cart() {
    const {count} = useContext(shopContext);
  return (
    <div>
      <h1>Cart</h1>
    </div>
  )
}
