import React from 'react'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between bg-slate-600 p-5'>
            <h1 className='text-4xl flex items-center justify-center'>Logo</h1>
            <ul className='flex items-center justify-evenly gap-14 text-2xl font-bold cursor-pointer'>
                <li>Home</li>
                <li>Store</li>
                <li>About</li>
            </ul>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Default</button>
        </div>
    )
}
