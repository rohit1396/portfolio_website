import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const [dayNight, setDayNight] = useState(false);
  return (
    <div className="z-10 sticky top-0 w-auto font-bold h-20 bg-stone-50 text-sky-600 ">
      <div className="w-full h-full flex justify-around items-center">
        {/* Logo */}
        <div className="w-auto flex justify-center">
          <img
            className="w-16 h-16 bg-slate-50 object-cover"
            src="public\web-developer-digital-avatar-generative-ai_934475-9048.avif"
            alt="avatar"
          />
        </div>
        {/* Page Routes */}
        <div className="hidden w-2/4 lg:flex text-md tracking-widest">
          <ul className="w-4/5 flex justify-around">
            <li className="inline-block">Home</li>
            <li className="inline-block">Skills Acquired</li>
            <li className="inline-block">Projects</li>
          </ul>
          <span>|</span>
          {/* Social Icons & Day/Night Mode */}
          <div className="w-2/5 text-2xl flex justify-around items-center">
            <span>
              <FaGithub />
            </span>
            <span>
              <FaLinkedin />
            </span>
            <span>
              {dayNight ? (
                <FaSun onClick={() => setDayNight(false)} />
              ) : (
                <FaMoon onClick={() => setDayNight(true)} />
              )}
            </span>
          </div>
        </div>
        <div className="flex justify-around text-4xl text-sky-600 lg:hidden">
          <button onClick={() => setShow(!show)}>
            {show ? <RxCross2 /> : <IoIosMenu />}
          </button>
        </div>
      </div>
      {/* Responsive Navbar */}
      <div
        className={`w-full h-full fixed top-20 right-0 bg-violet-200 text-sky-400 flex lg:hidden flex-col justify-start items-center text-xl tracking-widest ${
          show ? "translate-x-0" : "translate-x-full"
        } transition ease-in-out duration-700`}
      >
        <ul className="w-full h-80 flex flex-col justify-around items-center">
          <li>Home</li>
          <li>Skills Acquired</li>
          <li>Projects</li>
        </ul>
        {/* Social Icons & Day/Night Mode */}
        <div className="mx-auto w-2/5 h-20 text-2xl flex justify-around items-center">
          <span>
            <FaGithub />
          </span>
          <span>
            <FaLinkedin />
          </span>
          <span>
            {dayNight ? (
              <FaSun onClick={() => setDayNight(false)} />
            ) : (
              <FaMoon onClick={() => setDayNight(true)} />
            )}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
