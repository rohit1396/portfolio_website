import React from "react";
import { TbWorld } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";

const ShoppingCart = () => {
  const skills = [
    "Deployement",
    "Netlify",
    "Developer Tools",
    "Responsive Design",
    "Fetch Api",
    "JSON",
    "React Hooks",
    "Context-Api",
    "Reducer",
    "Condition Rendering",
    "React state & Props",
    "React",
  ];
  return (
    <section className="bg-gray-100 w-auto lg:max-w-6xl h-full mx-auto my-10 p-3 flex flex-col-reverse lg:flex-row rounded-2xl">
      <div className="w-auto lg:w-3/5 h-full flex flex-col mx-3">
        <h1 className="text-4xl font-semibold text-sky-600 my-1">
          Shopping Cart
        </h1>
        <h5 className="text-3xl text-bold text-sky-500 my-1">Jul - Aug 2023</h5>
        <div className="w-auto lg:w-4/6 h-full text-sm text-gray-600 flex flex-col justify-evenly">
          <p className="my-1">
            shopping Cart is an e-commerce cart System finalize the amount of
            your Shopping.
          </p>
          <p className="my-1">During the course of this project.</p>
          <p className="my-1">
            Implemented the core Logic using Context Api And Reducer
          </p>
          <p className="my-1">
            Improved UI by adding responsive design elements for uniform
            experience across different devices
          </p>
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
          <a href="https://shopping-cart-rg.netlify.app" target="_blank">
            <TbWorld className="text-sky-800 text-3xl font-bold" />
          </a>
          <a href="https://github.com/rohit1396/shopping-cart" target="_blank">
            <FaGithub className="text-sky-800 text-3xl font-bold" />
          </a>
        </div>
      </div>
      {/* Project Img */}
      <div className="w-auto lg:w-2/6 flex justify-center items-center">
        <img
          src={"/Shop-cart-img.png"}
          alt="img"
          className="max-w-72 max-h-56 lg:max-w-sm lg:h-48 cover border border-1 border-slate-800 rounded-2xl"
        />
      </div>
    </section>
  );
};

export default ShoppingCart;
