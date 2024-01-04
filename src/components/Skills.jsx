import React from "react";
import { MdOutlineHttp } from "react-icons/md";
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <main
      className="bg-gray-100 w-auto lg:max-w-6xl h-auto mx-auto my-10 flex flex-col rounded-2xl"
      id="skills"
    >
      {/* Headline */}
      <div className="w-full lg:max-w-6xl h-24 my-5 mx-auto px-5 flex justify-center lg:justify-around items-center">
        <h2 className="w-full md:w-4/6 text-3xl md:text-4xl text-center font-semibold lg:text-5xl lg:font-bold text-sky-600">
          Skills Acquired
        </h2>
        <div className="w-4/5 hidden md:flex border border-sky-600 border-2"></div>
      </div>
      {/* skills */}
      <div className="w-auto sm:w-3/4 md:w-3/5 h-full lg:max-w-6xl mx-auto py-5 flex flex-wrap justify-around items-start">
        {/* Http */}
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-between text-center my-4">
          <MdOutlineHttp className="w-3/4 h-3/4 bg-sky-500 text-stone-50 px-4 mx-auto rounded-3xl hover:scale-110 transition duration-700 ease-in-out drop-shadow-lg" />
          <span className="text-md font-semibold text-sky-700">HTTP</span>
        </div>
        {/* Html */}
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-between text-center my-4">
          <FaHtml5 className="w-3/4 h-3/4 bg-sky-500 text-stone-50 px-6 mx-auto rounded-3xl hover:scale-110 transition duration-700 ease-in-out drop-shadow-lg" />
          <span className="text-md font-semibold text-sky-700">HTML</span>
        </div>
        {/* Css */}
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-between text-center my-4">
          <FaCss3Alt className="w-3/4 h-3/4 bg-sky-500 text-stone-50 px-6 mx-auto rounded-3xl hover:scale-110 transition duration-700 ease-in-out drop-shadow-lg" />
          <span className="text-md font-semibold text-sky-700">CSS</span>
        </div>
        {/* React */}
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-between text-center my-4">
          <FaReact className="w-3/4 h-3/4 bg-sky-500 text-stone-50 px-6 mx-auto rounded-3xl hover:scale-110 transition duration-700 ease-in-out drop-shadow-lg" />
          <span className="text-md font-semibold text-sky-700">React</span>
        </div>
        {/* Git */}
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-between text-center my-4">
          <FaGitAlt className="w-3/4 h-3/4 bg-sky-500 text-stone-50 px-6 mx-auto rounded-3xl hover:scale-110 transition duration-700 ease-in-out drop-shadow-lg" />
          <span className="text-md font-semibold text-sky-700">Git</span>
        </div>
        {/* Javascript */}
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-between text-center my-4">
          <TbBrandJavascript className="w-3/4 h-3/4 bg-sky-500 text-stone-50 px-6 mx-auto rounded-3xl hover:scale-110 transition duration-700 ease-in-out drop-shadow-lg" />
          <span className="text-md font-semibold text-sky-700">Javascript</span>
        </div>
        {/* Tailwind */}
        <div className="w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-between text-center my-4">
          <SiTailwindcss className="w-3/4 h-3/4 bg-sky-500 text-stone-50 px-6 mx-auto rounded-3xl hover:scale-110 transition duration-700 ease-in-out drop-shadow-lg" />
          <span className="text-md font-semibold text-sky-700">Tailwind</span>
        </div>
      </div>
    </main>
  );
};

export default Skills;
