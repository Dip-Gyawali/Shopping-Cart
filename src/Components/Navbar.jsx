import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
        <div className='flex items-center justify-between bg-purple-700 p-5'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiOJ7wCX35xG2sks9xZZ1LXX_Z1cD3CsuZLA&s" alt="" className='h-[3vw] w-[3vw] rounded-xl'/>
            <ul className='flex items-center justify-evenly gap-14 text-2xl font-bold cursor-pointer'>
                <NavLink to="/" style={({isActive})=>{
                    return {color:isActive?"orange":"black"}
                }}>Home</NavLink>
                <NavLink to="/store" style={({isActive})=>{
                    return {color:isActive?"orange":"black"}
                }} >Store</NavLink>
                <NavLink to="/about" style={({isActive})=>{
                    return {color:isActive?"orange":"black"}
                }} >About</NavLink>
            </ul>
            <NavLink to='/cart'>
            <button type="button" className=" bg-green-500 text-white font-semibold px-4 py-2 rounded-xl hover:bg-green-600
                 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75">Shop</button>
            </NavLink>
        </div>
        <Outlet/>
        </>
    )
}
