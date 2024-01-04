import React, { useEffect, useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [dayNight, setDayNight] = useState(false);
  const [bgNav, setBgNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 200) {
        setBgNav(true);
      } else setBgNav(false);
    });
    return () => {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
          setBgNav(true);
        } else setBgNav(false);
      });
    };
  }, []);

  const toggleTheme = () => {
    setDayNight(!dayNight);
  };

  return (
    <div
      className={` z-10 sticky top-0 w-auto font-bold h-20 ${
        bgNav ? "bg-sky-600 text-stone-50 " : "bg-stone-50 text-sky-600 "
      }`}
      id="navbar"
    >
      <div className="w-full h-full flex justify-around items-center">
        {/* Logo */}
        <div className="w-auto flex justify-center">
          <Link
            to="about"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <img
              className="w-16 h-16 bg-slate-50 object-cover"
              src={
                "publicweb-developer-digital-avatar-generative-ai_934475-9048.avif"
              }
              alt="avatar"
            />
          </Link>
        </div>
        {/* Page Routes */}
        <div className="hidden w-2/4 lg:flex text-md tracking-widest">
          <ul className="w-4/5 flex justify-around">
            <li className="inline-block cursor-pointer">
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="inline-block cursor-pointer">
              <Link
                to="skills"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Skills Required
              </Link>
            </li>
            <li className="inline-block cursor-pointer">
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                Projects
              </Link>
            </li>
          </ul>
          <span>|</span>
          {/* Social Icons & Day/Night Mode */}
          <div className="w-2/5 text-2xl flex justify-around items-center">
            <span>
              <a href="https://github.com/rohit1396" target="_blank">
                <FaGithub />
              </a>
            </span>
            <span>
              <a
                href="https://www.linkedin.com/in/rohit-gaikwad1396/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
            </span>
            <span>
              {dayNight ? (
                <FaSun onClick={toggleTheme} />
              ) : (
                <FaMoon onClick={toggleTheme} />
              )}
            </span>
          </div>
        </div>
        {/* Hamburger Menu */}
        <div
          className={`flex justify-around text-4xl text-sky-600 lg:hidden ${
            bgNav && "text-stone-50"
          }`}
        >
          <button onClick={() => setShow(!show)}>
            {show ? <RxCross2 /> : <IoIosMenu />}
          </button>
        </div>
      </div>
      {/* Responsive Navbar */}
      <div
        className={`w-full h-full fixed top-20 right-0 bg-gray-100 text-sky-400 flex lg:hidden flex-col justify-start items-center text-xl tracking-widest ${
          show ? "translate-x-0" : "translate-x-full"
        } transition ease-in-out duration-700`}
      >
        <ul className="w-full h-80 flex flex-col justify-around items-center">
          <li className="cursor-pointer">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setShow(!show)}
            >
              Home
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setShow(!show)}
            >
              Skills Required
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              onClick={() => setShow(!show)}
            >
              Projects
            </Link>
          </li>
        </ul>
        {/* Social Icons & Day/Night Mode */}
        <div className="mx-auto w-2/5 h-20 text-2xl flex justify-around items-center">
          <span>
            <a href="https://github.com/rohit1396" target="_blank">
              <FaGithub />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/rohit-gaikwad1396/"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </span>
          <span>
            {dayNight ? (
              <FaSun onClick={toggleTheme} />
            ) : (
              <FaMoon onClick={toggleTheme} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
