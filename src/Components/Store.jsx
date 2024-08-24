import React, { useState } from 'react'
import items from '../data/items.json'
import AllItems from './AllItems'

export default function Store() {
  return (
    <div>
      <h1 className='text-4xl flex items-center justify-center m-5 font-bold'>This is Store Section</h1>
      <div className='grid grid-cols-1 sm:grid-col-2 md:grid-cols-3 gap-4 p-5'>
      {items.map((ele)=>(
        <AllItems {...ele}/>
      ))}
      </div>
    </div>
  )
}
