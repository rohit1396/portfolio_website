import React from "react";

const About = () => {
  return (
    <main className="w-auto h-auto md:h-96 flex flex-col md:flex-row justify-around items-center mt-10 mx-10 border border-gray-400">
      <aside className="w-2/6 h-auto flex flex-col justify-around text-start">
        <h2 className="text-2xl font-semibold text-gray-500 mt-2 ">
          Hi, my name is
        </h2>
        <span className="text-6xl text-sky-600 mt-1">Rohit Gaikwad</span>
        <p className="text-gray-500 text-md mt-4">
          {`I have built many personal projects from scratch and am armed with many technological skills useful for tech projects. Check out my projects below. :)`}
        </p>
        <div className="w-auto h-20 flex mt-5 text-center">
          <div className="w-1/3 py-1 bg-sky-500 text-slate-100 border rounded-l-3xl">
            <span className="block text-3xl font-bold">9</span>
            <span className="block text-md font-normal">Verified skills</span>
          </div>
          <div className="w-1/3 py-1 bg-sky-500 text-slate-100 border rounded-r-3xl">
            <span className="block text-3xl font-bold">4</span>
            <span className="block text-md font-normal">Personal Projects</span>
          </div>
        </div>
      </aside>
      <div className="border border-gray-300 w-2/5">
        <img src="public\front-end-development.gif" alt="gif_img" />
      </div>
    </main>
  );
};

export default About;
