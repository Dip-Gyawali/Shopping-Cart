import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <div className='flex items-center justify-between bg-slate-600 p-5'>
            <h1 className='text-4xl flex items-center justify-center'>Logo</h1>
            <ul className='flex items-center justify-evenly gap-14 text-2xl font-bold cursor-pointer'>
                <NavLink to="/home" style={({isActive})=>{
                    return {color:isActive?"orange":"black"}
                }}>Home</NavLink>
                <NavLink to="/" style={({isActive})=>{
                    return {color:isActive?"orange":"black"}
                }} >Store</NavLink>
                <NavLink to="/about" style={({isActive})=>{
                    return {color:isActive?"orange":"black"}
                }} >About</NavLink>
            </ul>
            <NavLink to='/cart'>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Shop</button>
            </NavLink>
        </div>
        <Outlet/>
        </>
    )
}
