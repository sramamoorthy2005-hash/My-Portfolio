import React from "react";
import { MdEmail, MdLocationPin, MdPhone } from "react-icons/md";
import { FaLinkedin, FaSquareGithub } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import { SiIndeed } from "react-icons/si";
import { motion } from "framer-motion";
const Contact = ({theme}) => {
  return (
    <section
      id="contact"
      className={` ${theme ? 'bg-gray-100 border-b-black' : 'bg-gray-950 border-b-gray-400'} transition-colors duration-1000 ease-in py-10 text-white px-[5rem]  border-b-2 border-b-gray-400  flex items-center justify-between max-[1200px]:px-[2rem] max-md:flex-col max-md:gap-10`}
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <div>
          <h4 className="text-[oklch(0.73_0.16_249.53)] text-xl font-medium">
            Get in Touch
          </h4>
          <h2 className={`mt-3 text-3xl text-wrap transition-colors duration-900 ease-in  ${theme ? 'text-black' : 'text-white '}`}>Let's Work Together</h2>
          <p className={`mt-5 text-lg transition-colors duration-900 ease-in ${theme ? 'text-gray-800' : 'text-gray-400'} text-wrap `}>
            I'm always open to new opportunities, collaboration and interesting
            projects. Feel to reach out!
          </p>
        </div>
        <div>
          <div className="flex items-center mt-8 gap-5">
            <MdEmail className="text-4xl text-[oklch(0.73_0.16_249.53)] bg-sky-950 p-1 rounded-xl" />
            <div>
              <p className={`font-semibold text-lg transition-colors duration-900 ease-in ${theme ? 'text-black' : 'text-white '}`}>Email</p>
              <p className={`${theme ? 'text-gray-800' : 'text-gray-300'} transition-colors duration-900 ease-in break-all`}>
                sramamoorthy2005@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center mt-8 gap-5">
            <MdPhone className="shrink-0 text-4xl text-[oklch(0.73_0.16_249.53)] bg-sky-950 p-1 rounded-xl" />
            <div>
              <p className={`font-semibold text-lg transition-colors duration-900 ease-in ${theme ? 'text-black' : 'text-white '}`}>Phone</p>
              <p className={`${theme ? 'text-gray-800' : 'text-gray-300'} transition-colors duration-900 ease-in break-all`}>6374785912</p>
            </div>
          </div>

          <div className="flex items-center mt-8 gap-5">
            <MdLocationPin className="shrink-0 text-4xl text-[oklch(0.73_0.16_249.53)] bg-sky-950 p-1 rounded-xl" />
            <div>
              <p className={`font-semibold text-lg transition-colors duration-900 ease-in ${theme ? 'text-black' : 'text-white '}`}>Location</p>
              <p className={`${theme ? 'text-gray-800' : 'text-gray-300'} transition-colors duration-900 ease-in break-all`}>Tenkasi,Tamil</p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-5 text-4xl">
          <FaLinkedin className="shrink-0 text-blue-800 bg-white rounded-full py-1" />
          <FaSquareGithub className="text-black bg-white rounded-full py-1" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-md:w-full max-[768px]:px-20 max-[600px]:px-0"
      >
        <div className="border-3 border-gray-700 w-120 max-lg:w-100 max-md:w-full  h-full rounded-4xl p-10 max-[425px]:p-5 bg-gray-900 flex flex-col gap-7 ">
          <div>
            <label className="block mb-1 font-semibold" htmlFor="">
              YourName
            </label>
            <input
              type="text"
              placeholder="Enter Your Name"
              className=" w-full bg-gray-900 ring-2 ring-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-4 focus:ring-gray-600"
            />
          </div>
          <div>
            <label className="block mb-1 font-semibold" htmlFor="">
              YourEmail
            </label>
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full bg-gray-900 ring-2 ring-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-4 focus:ring-gray-600"
            />
          </div>
          <div>
            <label htmlFor="" className="block mb-1 font-semibold">
              Message
            </label>
            <textarea
              placeholder="Type Your Message..."
              name=""
              id=""
              className="w-full bg-gray-900 ring-2 ring-gray-500 rounded-lg py-3 px-4 focus:outline-none focus:ring-4 focus:ring-gray-600 resize-none"
              rows="5"
            ></textarea>
          </div>
          <button className="font-low  bg-[oklch(0.73_0.16_249.53)] px-3 rounded-xl text-white py-3 text-lg w-full flex justify-center items-center gap-2 ">
            Send Message <FaArrowRight className="inline-block" />
          </button>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
