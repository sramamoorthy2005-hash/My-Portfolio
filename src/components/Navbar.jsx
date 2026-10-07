import React, { useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import { FiAlignLeft } from "react-icons/fi";
const Navbar = () => {
  const demoNaves = ["Home", "About", "Skill", "Project", "Contact"];
  const [open,setOpen]=useState(false);
  const menuBar = ()=>{
    setOpen((prev)=>!prev);
  }

  return (
    <section className="sticky  top-0">
      <div className="relative flex justify-between items-center bg-gray-900 shadow-xl py-8 px-[5rem] max-[1200px]:px-[1rem]  ">
        <div>
          <h2 className="text-2xl font-bold text-[oklch(0.73_0.16_249.53)]">
            <span className="text-white">PORT</span>FOLIO
          </h2>
        </div>
        <ul className={`flex gap-[4rem] text-lg text-white font-light  ${open? 'max-lg:flex-col' : 'max-lg:hidden'}  max-lg:absolute  max-lg:left-0 max-lg:gap-4 max-lg:items-center max-lg:p-5  max-lg:right-0 max-lg:top-0 max-lg:min-h-md max-lg:bg-gray-800  `}>
          {demoNaves?.map((nave) => (
            <li className="hover:underline  underline-offset-8 hover:text-[oklch(0.73_0.16_249.53)]">{nave}</li>
          ))}
        </ul>
        
        <div className="flex items-center gap-4">
          <button className="font-low  bg-[oklch(0.73_0.16_249.53)] px-3 rounded-xl text-gray-700 py-1 hover:text-white  hover:bg-sky-400 max-lg:hidden">
            Download Resume
          </button>
          {/* <BsMoonStarsFill className='text-yellow-100' /> */}
          <HiSun className="text-yellow-400 text-2xl" />
          <FiAlignLeft onClick={menuBar} className="text-[oklch(0.73_0.16_249.53)] z-40 hidden max-lg:block text-3xl"/>
        </div>
        
      </div>
    </section>
  );
};

export default Navbar;
