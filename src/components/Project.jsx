import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import Projects from "./Projects";
import { motion } from "framer-motion";
const Project = ({theme}) => {
  return (
    <section
      id="project"
      className={`  ${theme ? 'bg-gray-100 border-b-black' : 'bg-gray-950 border-b-gray-400'} py-10 text-white px-[5rem] border-b-2 border-b-gray-400 max-[1200px]:px-[2rem]`}
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-between">
            <h4 className="text-[oklch(0.73_0.16_249.53)] text-xl font-medium max-md:text-lg">
              MY PROJECTS
            </h4>
            <button className={`flex items-center gap-1 font-light   font-semibold px-3 rounded-xl   py-1   max-[425px]:text-sm ${theme ? 'text-white bg-black hover:bg-sky-400' : 'text-gray-700 bg-white hover:bg-sky-400 hover:text-white'}`}>
              View All Projects <FiArrowUpRight className="text-lg" />
            </button>
          </div>
          <h2 className={`text-wrap mt-3 text-3xl max-[425px]:text-xl   `}>
            Some of My Project Work
          </h2>
          <p className={`text-wrap mt-5  max-[425px]:text-sm ${theme ? 'text-gray-800' : 'text-gray-400'}`}>
            Here are a few projects I've built to showcase my skills and passion
            for development
          </p>
        </motion.div>

        <div className="grid  grid-cols-3 gap-5  mt-8 max-[1200px]:grid-cols-2 max-[700px]:grid-cols-1 max-[700px]:mx-15 max-[500px]:mx-0  ">
          {Projects.map((item) => (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
              className="border-3 rounded-xl border-gray-700"
            >
              <div className="h-55 border-b-2 border-gray-500 pb-5  p-3 ">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full rounded-xl outline-3 outline-gray-500  object-cover"
                />
              </div>
              <div className="p-5">
                <div className="flex  justify-between">
                  <h4 className={`text-lg font-bold text-wrap pr-3 ${theme ? 'text-black' : 'text-white '}`}>{item.name}</h4>
                  <FaGithub className={`text-4xl ${theme ? 'text-black' : 'text-white '}`} />
                </div>
                <p className="mt-5 text-sky-400 font-medium text-base">
                  <span className=" font-normal text-lg">Stack :</span>{" "}
                  {item.stack}
                </p>
                <ul className={`mt-7 list-disc px-4 flex flex-col gap-3 text-base ${theme ? 'text-gray-800' : 'text-gray-400'}`}>
                  <li>{item.des1}</li>
                  <li>{item.des2}</li>
                  <li>{item.des3}</li>
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
