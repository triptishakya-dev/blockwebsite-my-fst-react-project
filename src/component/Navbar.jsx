import React from 'react'

export const Navbar = () => {
  return (
    <div className='flex justify-between bg-gray-100 py-5 px-10' >
      {/* fst div  */}
      <div>
        <h1 className='font-bold text-blue-800 text-2xl'>
          Agency
        </h1>
      </div>
      {/* 2nd div  */}
      <div>
        <ul className='flex gap-10 font-bold text-2xl ' >
          <li className='hover:cursor-pointer hover:underline hover:text-blue-500 '>Home</li>
          <li className='hover:cursor-pointer hover:underline hover:text-blue-500'>Work</li>
          <li className='hover:cursor-pointer hover:underline hover:text-blue-500'>About</li>
          <li className='hover:cursor-pointer hover:underline hover:text-blue-500'>Contact</li>
        </ul>
      </div>
      {/* 3rd div  */}
      <div>
        <button className='bg-gray-500 text-blue-400 py-3 px-7 rounded-md'>
          Sign up
        </button>
      </div>
    </div>

  )
}
