import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const MovieApp = () => {
  const skills = [
    "Deployement",
    "Vercel",
    "Developer Tools",
    "React Router",
    "Responsive Design",
    "Virtual-DOM",
    "JSON",
    "Controlled Components",
    "React Hooks",
    "Context-Api",
    "Condition Rendering",
    "React state & Props",
    "React",
  ];
  return (
    <section className="bg-gray-100 w-full lg:max-w-6xl h-full mx-auto my-10 p-3 flex flex-col-reverse lg:flex-row rounded-2xl">
      <div className="w-full md:w-3/5 h-full flex flex-col mx-3">
        <h1 className="text-4xl font-semibold text-sky-600 my-1">
          Movie App Frontend
        </h1>
        <h5 className="text-3xl text-bold text-sky-500 my-1">Jul - Aug 2023</h5>
        <div className="w-full lg:w-4/6 h-full text-sm text-gray-600 flex flex-col justify-evenly">
          <p className="my-1">
            Movie App is an OTT application offering a variety of movies/series
            from different categories for customers to search from.
          </p>
          <p className="my-1">During the course of this project.</p>
          <p className="my-1">
            Implemented the core Logic For fetching movies using Search Queries
          </p>
          <p className="my-1">Implemented the Slider Functionality</p>
          <p className="my-1">
            Improved UI by adding responsive design elements for uniform
            experience across different devices
          </p>
          <p className="my-1">Fetching Movie Details For single movie</p>
        </div>
        <div className="w-auto lg:w-4/6 h-auto flex justify-start items-center flex-wrap text-sm my-2">
          {skills.map((skill) => {
            return (
              <span
                key={skill}
                className="w-fit h-auto p-2 bg-slate-50 text-slate-700 border border-slate-400 mx-1 my-1 rounded-xl "
              >
                {skill}
              </span>
            );
          })}
        </div>
        <div className="flex max-w-44 h-auto justify-evenly items-center">
          <span>
            <TbWorld className="text-sky-800 text-3xl font-bold" />
          </span>
          <span>
            <FaGithub className="text-sky-800 text-3xl font-bold" />
          </span>
        </div>
      </div>
      {/* Project Img */}
      <div className="w-auto lg:w-2/6 flex justify-center items-center">
        <img
          src="public\movieApp-img.png"
          alt="img"
          className="max-w-md max-h-56 lg:w-auto lg:h-48 cover border border-1 border-slate-800 rounded-2xl"
        />
      </div>
    </section>
  );
};

export default MovieApp;
