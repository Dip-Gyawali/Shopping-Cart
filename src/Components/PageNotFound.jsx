import React from 'react'
import { NavLink } from 'react-router-dom'

export default function PageNotFound() {
  return (
    <div>
      <h1 className='text-6xl'>Page not found</h1>
      <NavLink to='/'><button type='button' className='m-5 border-2 p-3 rounded-2xl border-black bg-green-500 text-xl hover:bg-green-600 transition ease-in duration-500'>Go Back To Home</button></NavLink>
    </div>
  )
}
