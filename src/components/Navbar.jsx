import React, { useEffect, useState } from "react";
import { BsMoonStarsFill } from "react-icons/bs";
import { HiSun } from "react-icons/hi";
import { FiAlignLeft } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const demoNaves = ["Home", "About", "Skill", "Project", "Contact"];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menuBar = () => {
    setOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      demoNaves.forEach((item) => {
        const element = document.getElementById(item.toLowerCase());
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActive(item);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="sticky  top-0">
      <div className="relative flex justify-between items-center bg-gray-900 shadow-xl py-8 px-[5rem] max-[1200px]:px-[2rem]  ">
        <div>
          <h2 className="text-2xl font-bold text-[oklch(0.73_0.16_249.53)]">
            <span className="text-white">PORT</span>FOLIO
          </h2>
        </div>
        <ul
          className={`flex gap-[4rem] text-lg text-white font-light  ${open ? "max-lg:flex-col" : "max-lg:hidden"}  max-lg:absolute  max-lg:left-0 max-lg:gap-4 max-lg:items-center max-lg:p-5  max-lg:right-0 max-lg:top-0 max-lg:min-h-md max-lg:bg-gray-800  `}
        >
          {demoNaves?.map((nave) => (
            <li key={nave}>
              <a
                href={`#${nave.toLowerCase()}`}
                onClick={() => {
                  setActive(nave);
                  setOpen(false);
                }}
                className={`cursor-pointer transition-colors duration-200 ${active===nave ? "text-[oklch(0.73_0.16_249.53)] underline underline-offset-8 font-semibold" : "text-white hover:underline underline-offset-8 hover:text-[oklch(0.73_0.16_249.53)]"}`}
              >
                {nave}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button className="font-low  bg-[oklch(0.73_0.16_249.53)] px-3 rounded-xl text-gray-700 py-1 hover:text-white  hover:bg-sky-400 max-lg:hidden">
            <a href="/Ramamoorthy-softwareDeveloper.pdf" download="Ramamoorthy.S_SoftwareDeveloper.pdf">Download Resume</a>
          </button>
          {/* <BsMoonStarsFill className='text-yellow-100' /> */}
          <HiSun className="text-yellow-400 text-2xl" />
          <span
            onClick={menuBar}
            className="text-[oklch(0.73_0.16_249.53)] cursor-pointer z-40 hidden max-lg:block text-3xl"
          >
            {open ? <IoClose /> : <FiAlignLeft />}
          </span>
        </div>
      </div>
    </section>
  );
};

export default Navbar;
