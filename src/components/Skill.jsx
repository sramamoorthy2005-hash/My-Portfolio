import React from "react";
import skill from "./Skills";
import { motion } from "framer-motion";
const Skill = () => {
  return (
    <section
      id="skill"
      className=" bg-gray-950  py-10 text-white px-[5rem] border-b-2 border-b-gray-400 max-[1200px]:px-[2rem]"
    >
      <div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h4 className="text-[oklch(0.73_0.16_249.53)] text-xl font-medium">
            MY SKILLS
          </h4>
          <h2 className="mt-3 text-3xl text-wrap max-[425px]:text-xl">
            Technologies I Work With
          </h2>
          <p className="text-wrap mt-5 text-gray-400 max-[425px]:text-sm">
            I have hands-on experience with the technologies below and I'm
            always eager to learn and explore more.
          </p>
        </motion.div>

        <div className="grid grid-cols-4 mt-10 gap-8 max-[1200px]:grid-cols-3 max-[768px]:grid-cols-2 max-[560px]:grid-cols-1">
          {skill.map((val,index) => (
            <motion.div
              key={val.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              whileHover={{
                scale: 1.05,
                borderColor: "oklch(0.73 0.16 249.53)",
              }}
              className="border-3 border-gray-700 bg-gray-900 p-3 py-4 rounded-xl cursor-pointer transition-colors"
            >
              <div className="w-25 h-15 flex flex-col ">
                <img
                  src={val.img}
                  alt=""
                  className="w-full h-full object-contain"
                />
                <span className=" text-xl font-semibold text-center mt-2">
                  {val.name}
                </span>
              </div>
              <p className="mt-15 px-7 text-gray-400">
                Object-orlented programmingand core Java concepts.
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
