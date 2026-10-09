import React from "react";
import ram from "../assets/ram.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <section
      id="home"
      className="bg-gray-950  text-white py-29 px-[5rem] border-b-2 border-b-gray-400 max-lg:py-10 max-[1200px]:px-[2rem]"
    >
      <div className="flex justify-between items-center max-md:flex-col max-lg:gap-15">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="pr-25 max-lg:pr-0"
        >
          <p className="text-2xl">Hello, I'm</p>
          <h1 className="max-[375px]:text-3xl text-5xl mt-3 text-[oklch(0.73_0.16_249.53)] font-bold">
            Ramamoorthy
          </h1>
          <p className="mt-5 text-gray-400 text-wrap ">
            I am a passionate developer specializing in building robust backend
            applications with Java and crafting fully responsive, user-friendly
            frontends. I bridge the gap between strong logic and seamless user
            experience.
          </p>
          <div className="mt-12  flex gap-10 ">
            <button className="max-[375px]:px-2 text-black max-[375px]:text-sm  py-2 px-5 bg-[oklch(0.73_0.16_249.53)] outline-2 outline-[oklch(0.73_0.16_249.53)] blue-700 rounded-lg">
              <a href="#project">View My Project</a>
            </button>
            <button className="max-[375px]:px-2 max-[375px]:text-sm outline-3 outline-gray-600  px-5 rounded-lg bg-gray-900">
              <a href="#contact">Contact Me</a>
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="max-md:w-80 max-sm:w-auto"
        >
          <motion.div
            whileHover={{ scale: 1.03 }}
            className="max-md:w-auto max-md:mx-5 w-75 h-auto rounded-4xl border-t-2 border-l-2 border-sky-600 rounded-r-[7rem] rounded-br-4xl bg-[radial-gradient(circle_at_45%_45%,#1d5ddc_0%,#0c2f82_45%,#030d24_85%)] shadow-2xl shadow-sky-900/40"
          >
            <img src={ram} className="w-full h-full  object-cover" alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
