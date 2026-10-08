import React from 'react'
import skill from './Skills'

const Skill = () => {
  return (
    <section id='skill' className=' bg-gray-950  py-10 text-white px-[5rem] border-b-2 border-b-gray-400 max-[1200px]:px-[2rem]' >
        <div>
            <div>
                <h4 className='text-[oklch(0.73_0.16_249.53)] text-xl font-medium'>MY SKILLS</h4>
                <h2 className='mt-3 text-3xl text-wrap max-[425px]:text-xl'>Technologies I Work With</h2>
                <p className='text-wrap mt-5 text-gray-400 max-[425px]:text-sm'>I have hands-on experience with the technologies below and I'm always eager to learn and explore more.</p>
            </div>

            <div className='grid grid-cols-4 mt-10 gap-8 max-[1200px]:grid-cols-3 max-[768px]:grid-cols-2 max-[560px]:grid-cols-1'>
                {skill.map((val)=>(
                  <div key={val.id} className='border-3  border-gray-700 bg-gray-900 p-3 py-4 rounded-xl'>
                    <div className='w-25 h-15 flex flex-col '><img src={val.img} alt='' className='w-full h-full object-contain'/> 
                      <span className=' text-xl font-semibold text-center mt-2'>{val.name}</span>
                    </div>
                    <p className='mt-15 px-7 text-gray-400'>Object-orlented programmingand core Java concepts.</p>
                  </div>
                  
                ))}
            </div>
        </div> 
    </section>
  )
}

export default Skill