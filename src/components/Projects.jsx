import React from "react";
import MovieApp from "./MovieApp";
import ShoppingCart from "./ShoppingCart";
import Pagination from "./Pagination";
import Eshop from "./Eshop";
import { globalDarkMode } from "../context";

const Projects = () => {
  const { darkMode } = globalDarkMode();
  return (
    <main
      className="w-auto lg:max-w-6xl h-auto mx-auto my-10 flex flex-col"
      id="projects"
    >
      {/* Project Headline */}
      <div className="w-full lg:max-w-6xl h-24 my-5 mx-auto px-5 flex justify-center lg:justify-around items-center">
        {/* Headline */}
        <h2 className="w-full md:w-4/6 text-3xl md:text-4xl text-center font-semibold lg:text-5xl lg:font-bold text-sky-600">
          My Projects
        </h2>
        {/* Border */}
        <div className="w-3/5 hidden md:flex border border-sky-600 border-2"></div>
      </div>
      <Eshop />
      <MovieApp />
      <ShoppingCart />
      <Pagination />
    </main>
  );
};

export default Projects;
