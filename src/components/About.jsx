import React from "react";
import { FaBook, FaGraduationCap } from "react-icons/fa6";
import { GiSkills } from "react-icons/gi";
import coding from "../assets/coding.jpg";
const About = () => {
  return (
    <section id="about" className=" bg-gray-950  py-16 text-white px-[5rem] border-b-2 border-b-gray-400 max-[1200px]:px-[2rem]">
      <div className="flex justify-between max-md:flex-col max-md:gap-10 max-md:items-center">
        <div>
          <div>
            <h4 className="text-[oklch(0.73_0.16_249.53)] text-xl font-medium">
              ABOUT ME
            </h4>
            <p className="mt-5 text-wrap max-md:pr-0 pr-15 text-gray-400">
              Hello! I'm Ramamoorthy, a developer who bridges the gap between
              complex logic and clean design. My main focus is on Java backend
              development paired with responsive frontend creation. I thrive on
              turning ideas into fully functional web applications, ensuring
              high performance and great user experience.
            </p>
          </div>
          <div className="flex gap-5 flex-wrap">
            <div className="flex items-center gap-5 mt-10">
              <FaGraduationCap className="shrink-0 text-5xl text-[oklch(0.73_0.16_249.53)] bg-sky-950 p-1 rounded-xl" />
              <div>
                <p className="text-lg font-semibold max-sm:text-base">Bachelor's Degree</p>
                <p className="text-gray-300 max-sm:text-sm">PSRR College of Engineering</p>
              </div>
            </div>

            <div className="flex items-center gap-5 mt-10">
              <GiSkills className="shrink-0 text-5xl text-[oklch(0.73_0.16_249.53)] bg-sky-950 p-1 rounded-xl" />
              <div>
                <p className="text-lg font-semibold max-sm:text-base">Key Skills</p>
                <p className="text-gray-300 max-sm:text-sm">
                  Java, HTML5, CSS3, JavaScript, MySQL
                </p>
              </div>
            </div>

            <div className="flex items-center  gap-5 mt-10">
            <FaBook className=" shrink-0 text-5xl text-[oklch(0.73_0.16_249.53)]  bg-sky-950 p-1 rounded-xl" />
            <div>
              <p className="text-lg font-semibold max-sm:text-base">Continuous Learning</p>
              <p className="text-gray-300 text-wrap pr-15  max-md:pr-0 max-sm:text-sm">
                Always eager to learn and adapt to new technologies to stay
                ahead in the field of software development.
              </p>
            </div>
          </div>
          </div>

          
          <div className="flex max-[993px]:justify-center">
            <button className="mt-15  font-low  bg-[oklch(0.73_0.16_249.53)] px-3 rounded-xl text-gray-700 py-1   hover:bg-sky-400">
            Download Resume
            </button>
          </div>
          
        </div>

        <div>
          <div className="border-3 border-gray-700 max-md:w-90  max-sm:w-auto  max-md:mx-5  rounded-lg bg-gray-900">
            <div className="max-md:w-auto  w-75  border-b-3 border-gray-700">
              <img
                src={coding}
                className="w-full h-full object-fit rounded-lg"
                alt=""
              />
            </div>
            <div className="p-5 flex items-center justify-center">
              <p className="text-xl mt-2  text-[oklch(0.73_0.16_249.53)] ">
                Better Code , <br />
                Better Tommorow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
