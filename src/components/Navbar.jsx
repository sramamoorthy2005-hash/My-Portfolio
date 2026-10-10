import React, { useEffect, useState } from "react";
import { HiSun } from "react-icons/hi";
import { BsMoonStarsFill } from "react-icons/bs";
import { FiAlignLeft } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ theme, setTheme }) => {
  const demoNaves = ["Home", "About", "Skill", "Project", "Contact"];
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const menuBar = () => {
    setOpen((prev) => !prev);
  };

  // Click handler with reliable smooth scrolling for desktop & mobile
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setActive(targetId);
    setOpen(false);

    const element = document.getElementById(targetId.toLowerCase());
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  // Scroll listener to update active tab dynamically
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

  //Theme
  const handleTheme = () => {
    setTheme((prev) => !prev);
  };
  return (
    <motion.section
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 backdrop-blur-md"
    >
      <div
        className={`relative flex justify-between items-center ${theme ? "bg-white" : "bg-gray-900"} transition-colors duration-500 ease-in shadow-xl py-6 px-[5rem] max-[1200px]:px-[2rem] `}
      >
        {/* Logo */}
        <motion.div whileHover={{ scale: 1.05 }} className="cursor-pointer">
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, "Home")}
            className="text-2xl font-bold text-[oklch(0.73_0.16_249.53)]"
          >
            <span
              className={`${theme ? "text-black" : "text-white"} transition-colors duration-900 ease-in`}
            >
              PORT
            </span>
            FOLIO
          </a>
        </motion.div>

        {/* Desktop Navigation Links */}
        <ul className="flex gap-[3.5rem] text-lg font-medium text-white max-lg:hidden">
          {demoNaves.map((nave) => (
            <li key={nave} className="relative">
              <a
                href={`#${nave.toLowerCase()}`}
                onClick={(e) => handleNavClick(e, nave)}
                className={`transition-colors duration-900 ease-in cursor-pointer transition-colors duration-200 block py-1 ${
                  active === nave
                    ? " text-[oklch(0.73_0.16_249.53)] font-semibold"
                    : theme
                      ? "text-gray-700 hover:text-[oklch(0.73_0.16_249.53)]"
                      : "text-gray-300 hover:text-[oklch(0.73_0.16_249.53)]"
                }`}
              >
                {nave}
              </a>

              {/* Animated active indicator line */}
              {active === nave && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-[oklch(0.73_0.16_249.53)] rounded-full"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </li>
          ))}
        </ul>

        {/* Right side buttons & hamburger */}
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`font-medium bg-[oklch(0.73_0.16_249.53)] px-4 rounded-xl transition-colors ease-in ${theme ? "text-white hover:text-black " : "text-gray-900 hover:text-white "} py-1.5 hover:bg-sky-400 max-lg:hidden transition-all shadow-md shadow-sky-950/40`}
          >
            <a
              href="/resume.pdf"
              download="Ramamoorthy.S_SoftwareDeveloper.pdf"
            >
              Download Resume
            </a>
          </motion.button>

          <button
            onClick={handleTheme}
            className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-full cursor-pointer focus:outline-none"
          >
            <AnimatePresence mode="wait" initial={false}>
              {theme ? (
                <motion.div
                  key="moon"
                  initial={{ rotate: -90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: 90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <BsMoonStarsFill className="text-2xl text-gray-700" />
                </motion.div>
              ) : (
                <motion.div
                  key="sun"
                  initial={{ rotate: 90, scale: 0, opacity: 0 }}
                  animate={{ rotate: 0, scale: 1, opacity: 1 }}
                  exit={{ rotate: -90, scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <HiSun className="text-2xl text-yellow-400" />
                </motion.div>
              )}
            </AnimatePresence>
          </button>

          {/* Mobile Hamburger / Close toggle */}
          <motion.span
            whileTap={{ scale: 0.8 }}
            onClick={menuBar}
            className="text-[oklch(0.73_0.16_249.53)] cursor-pointer z-50 hidden max-lg:block text-3xl"
          >
            {open ? <IoClose /> : <FiAlignLeft />}
          </motion.span>
        </div>

        {/* Mobile Dropdown Menu with AnimatePresence */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.25 }}
              className="absolute left-0 right-0 top-full bg-gray-900 border-b border-gray-800 p-6 flex flex-col items-center gap-4 shadow-2xl lg:hidden z-50 pointer-events-auto"
            >
              {demoNaves.map((nave) => (
                <a
                  key={nave}
                  href={`#${nave.toLowerCase()}`}
                  onClick={(e) => handleNavClick(e, nave)}
                  className={`text-lg font-medium py-2 px-4 rounded-xl w-full text-center transition-colors ${
                    active === nave
                      ? "text-[oklch(0.73_0.16_249.53)] font-bold bg-gray-800"
                      : "text-gray-300 hover:text-white hover:bg-gray-800/60"
                  }`}
                >
                  {nave}
                </a>
              ))}

              <a
                href="/Ramamoorthy-softwareDeveloper.pdf"
                download="Ramamoorthy.S_SoftwareDeveloper.pdf"
                onClick={() => setOpen(false)}
                className="transition-colors duration-900 ease-in mt-2 bg-[oklch(0.73_0.16_249.53)] text-gray-900 px-5 py-2.5 rounded-xl font-medium w-full text-center hover:bg-sky-400 transition-colors"
              >
                Download Resume
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
};

export default Navbar;
