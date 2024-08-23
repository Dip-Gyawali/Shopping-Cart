import React from 'react'

export default function AllItems({id, name, price, imageURL}) {
  return (
    <>
      <img src={imageURL} className='w-full h-80 object-cover'/>
      <h1 className='text-center size-'>{name}</h1>
    </>
  )
}
