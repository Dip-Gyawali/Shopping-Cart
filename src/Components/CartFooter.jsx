import React from 'react'

export default function CartFooter() {
    return (
        <div className="fixed inset-x-0 bottom-0 p-4">
            <div className="flex justify-center">
                <button className="bg-green-500 text-white font-semibold px-6 py-2 rounded hover:bg-green-600 
    focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75 text-[2vw]">
                    Checkout
                </button>
            </div>
        </div>

    )
}
