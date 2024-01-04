import React from "react";

const About = () => {
  return (
    <main
      className=" w-auto h-auto md:h-96 flex flex-col-reverse md:flex-row justify-around items-center mt-10 mx-5 md:mx-10 lg:px-0 mb-20"
      id="about"
    >
      <aside className="w-auto text-center md:w-2/6 h-auto flex flex-col justify-center md:justify-around md:text-start">
        <h2 className="text-xl md:text-2xl font-semibold text-gray-500 mt-2 ">
          Hi, my name is
        </h2>
        <span className="text-4xl lg:text-6xl text-sky-600 mt-1">
          Rohit Gaikwad
        </span>
        <p className="text-gray-500 text-md mt-4">
          {`I have built many personal projects from scratch and am armed with many technological skills useful for tech projects. Check out my projects below. :)`}
        </p>
        <div className="w-auto h-20 flex justify-center md:justify-normal mt-5 text-center">
          <div className="min-w-36 md:w-1/3 py-1 bg-sky-500  text-slate-100 border rounded-l-3xl">
            <span className="block text-lg md:text-3xl font-bold">7</span>
            <span className="block text-md font-normal">Verified skills</span>
          </div>
          <div className="min-w-36 md:w-1/3 py-1 bg-sky-500 text-slate-100 border rounded-r-3xl">
            <span className="block text-lg md:text-3xl font-bold">4</span>
            <span className="block text-md font-normal">Personal Projects</span>
          </div>
        </div>
      </aside>
      <div className="w-auto h-auto md:w-2/5">
        <img
          src={"public\front-end-development.gif"}
          alt="gif_img"
          className="w-auto h-60 sm:h-64 md:h-70 lg:h-auto mx-auto md:w-full object-cover"
        />
      </div>
    </main>
  );
};

export default About;
