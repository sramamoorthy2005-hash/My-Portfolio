import React from 'react'
import { FaCircleArrowUp, FaLinkedin, FaSquareGithub } from 'react-icons/fa6'
const Copyrights = () => {
  return (
    <section >
        <div className=' w-full relative text-white  h-screen bg-cover bg-center opacity-100 ' style={{backgroundImage:"url('/mountion.jpg')"}}>
            <div className='flex flex-col items-center justify-center'>

           
            <div className='border-b-2'>
                <h2 className='text-3xl '>Thanks for Visiting</h2>
                <p className='mt-1 text-4xl font-bold text-[oklch(0.73_0.16_249.53)]'>Ramamoorthy S</p>
                <h2 className='mt-2 text-3xl '>Full Stack Developer</h2>
                <p className='mt-5 font-bold'>Build . Learn . Grow</p>
                <div className='mt-8 flex gap-5 text-4xl'>
                    <FaLinkedin className='text-blue-800 bg-white rounded-full py-1'/>
                    <FaSquareGithub className='text-black bg-white rounded-full py-1'/>        
                </div>             
            </div>

             </div>
            <div className='flex items-center justify-between py-8 px-[5rem]'>
                <p className='font-semibold text-xl'>Ramamoorthy S</p>
                <p>@2026 RamDevi , All rights reserved.</p>
                <FaCircleArrowUp className='text-[oklch(0.73_0.16_249.53)] text-4xl bg-white rounded-full py-1' />

            </div>
        </div>
    </section>
  )
}

export default Copyrights