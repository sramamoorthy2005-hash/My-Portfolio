import React from 'react'
import { BsMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
const Navbar = () => {
  return (
    <section className='sticky top-0'>
      <div className='flex justify-between items-center bg-gray-900 shadow-xl py-8 px-[5rem] '>
          <div><h2 className='text-2xl font-bold text-[oklch(0.73_0.16_249.53)]'><span className='text-white'>PORT</span>FOLIO</h2></div>
          <ul className='flex gap-[4rem] text-lg text-white font-low'>
            <li>Home</li>
            <li>About</li>
            <li>Skill</li>
            <li>Project</li>
            <li>Contact</li>
          </ul>
          <div className='flex items-center gap-4'>
            <button className='font-low  bg-[oklch(0.73_0.16_249.53)] px-3 rounded-xl text-gray-700 py-1 hover:text-white  hover:bg-sky-400'>Download Resume</button>
            {/* <BsMoonStarsFill className='text-yellow-100' /> */}<HiSun className='text-yellow-400 text-2xl' />
          </div>
          
      </div>
    </section>
  )
}

export default Navbar