import React from 'react'
import { MdEmail,MdLocationPin,MdPhone } from "react-icons/md";
import { FaLinkedin,FaSquareGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
const Contact = () => {
  return (
    <section className=' bg-gray-950 py-10 text-white px-[5rem] border-b-2 border-b-gray-400  flex '>
      
        <div className='w-[58%]'>
            <div>
                <h4 className='text-[oklch(0.73_0.16_249.53)] text-xl font-medium'>Get in Touch</h4>
                <h2 className='mt-3 text-5xl font-bold '>Let's Work Together</h2>
                <p className='mt-5 text-lg text-gray-400 w-80'>I'm always open to new opportunities, collaboration and interesting projects. Feel to reach out!</p>
            </div>
            <div>

              <div className='flex items-center mt-8 gap-5'>
                <MdEmail className='text-4xl text-[oklch(0.73_0.16_249.53)] bg-sky-950 p-1 rounded-xl'/>
                <div>
                  <p className='font-semibold text-lg '>Email</p>
                  <p className='text-gray-400'>sramamoorthy2005@gmail.com</p>
                </div>
              </div>
              
              <div className='flex items-center mt-8 gap-5'>
                <MdPhone className='text-4xl text-[oklch(0.73_0.16_249.53)] bg-sky-950 p-1 rounded-xl'/>
                <div>
                  <p className='font-semibold text-lg '>Phone</p>
                  <p className='text-gray-400'>6374785912</p>
                </div>
              </div>

              <div className='flex items-center mt-8 gap-5'>
                <MdLocationPin className='text-4xl text-[oklch(0.73_0.16_249.53)] bg-sky-950 p-1 rounded-xl'/>
                <div>
                  <p className='font-semibold text-lg '>Location</p>
                  <p className='text-gray-400'>Tenkasi,Tamil</p>
                </div>
              </div>
            </div>
            <div className='mt-8 flex gap-5 text-4xl'>
              <FaLinkedin className='text-blue-800 bg-white rounded-full py-1'/>
              <FaSquareGithub className='text-black bg-white rounded-full py-1'/>
            </div>
        </div>

        <div>
          <div className='border-3 border-gray-700 w-[180%] h-full rounded-4xl p-10 bg-gray-900 flex flex-col gap-7 '>
            <div>
              <label className='block mb-1 font-semibold' htmlFor="">YourName</label>
              <input type="text" placeholder='Enter Your Name' className=' w-full bg-gray-900 ring-2 ring-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-4 focus:ring-gray-600'/>
            </div>
            <div>
              <label className='block mb-1 font-semibold' htmlFor="">YourEmail</label>
              <input type="email" placeholder='Enter Your Email' className='w-full bg-gray-900 ring-2 ring-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-4 focus:ring-gray-600' />
            </div>
            <div>
              <label htmlFor="" className='block mb-1 font-semibold'>Message</label>
              <textarea placeholder='Type Your Message...' name="" id="" className='w-full bg-gray-900 ring-2 ring-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-4 focus:ring-gray-600 resize-none'rows='5'></textarea>
            </div>
            <button className='font-low  bg-[oklch(0.73_0.16_249.53)] px-3 rounded-xl text-white py-3 text-lg w-full flex items-center inline-block'>Send Message <FaArrowRight className='inline-block'/></button>
          </div>
        </div>
    </section>
  )
}

export default Contact