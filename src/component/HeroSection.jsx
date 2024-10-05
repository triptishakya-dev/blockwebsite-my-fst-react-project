import React from 'react'
import hero from "../assets/Hero.png"

const HeroSection = () => {
  return (
    <div className='flex justify-center'>
        <div className='px-5 py-20 mt-20'>

         <div>
          <h1 className='text-6xl font-bold'>
          Marketing is The Key of Business Sucess.
          </h1>
         </div>
         <div className='py-7'>
          <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting<br></br> industry. Lorem Ipsum has been
          </p>
         </div>
        <div className='flex gap-5'>
          <button className='bg-blue-700 text-white py-3 px-7 rounded-md'>
            Get Started
          </button>
          <button className='bg-blue-700 text-white py-3 px-7 rounded-md'>  
            About Us
          </button>
        </div>
        </div>
        {/* 2nd container starts from here */}
        <div className='h-10 '>
<img src={hero} alt="" />
        </div>
      
        </div>
  )
}

export default HeroSection