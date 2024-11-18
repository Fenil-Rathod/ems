import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='flex items-end justify-between'>
            <h1 className='font-medium text-2xl'> Hello <br /> <span className='font-semibold text-3xl'>Fenil Bhai 👋</span>  </h1>
            <button className='bg-red-600 rounded-sm text-sm p-3 font-semibold '>Log Out</button>
        </div>
    </div>
  )
}

export default Header