import React from 'react'
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Projects from './Projects';
const Project = () => {
  return (
    <section className=' bg-gray-900  py-10 text-white px-[5rem] border-b-2 border-b-gray-400'>
        <div>
            <div>
              <div className='flex justify-between'>
                <h4 className='text-[oklch(0.73_0.16_249.53)] text-xl font-medium'>MY PROJECTS</h4>
                <button className='flex items-center gap-1 font-low  bg-white font-semibold px-3 rounded-xl text-gray-700 py-1 hover:bg-sky-400 hover:text-white'>View All Projects <FiArrowUpRight className='text-lg'/> </button>
              </div>
              <h2 className='mt-3 text-3xl'>Some of My Project Work</h2>
              <p className='w-112 mt-5 text-gray-400'>Here are a few projects I've built to showcase my skills and passion for development</p>
            </div>

            <div className='grid grid-cols-3 gap-5 mt-8'>
              {Projects.map((item)=>(
                <div key={item.id} className='w-95 border-3   border-gray-500  rounded-2xl'>
                  <div className='h-55 border-b-2 border-gray-500 pb-5  p-3 '><img src={item.img} alt={item.name} className='w-full h-full rounded-xl outline-3 outline-gray-500  object-cover' /></div>
                  <div className='p-5'>
                    <div className='flex  justify-between'>
                      <h4 className='text-lg font-bold'>{item.name}</h4>
                      <FaGithub className='text-4xl'/>
                    </div>
                    <p className='mt-5 text-sky-400 font-medium text-base'><span className=' font-normal text-lg'>Stack :</span> {item.stack}</p>
                    <ul className='mt-7 list-disc px-4 flex flex-col gap-3 text-base text-gray-400'>
                      <li>{item.des1}</li>
                      <li>{item.des2}</li>
                      <li>{item.des3}</li>
                    </ul>
                  </div>
                </div>
              ))}
            </div>
        </div>
    </section>
  )
}

export default Project