import React from "react";
import HeroImage from "../assets/rb_4348.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-gradient-to-b from-zinc-200 relative"
    >
      {/* Animated Gradient Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-animated -z-10"></div>

      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row gap-32">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-cyan-950">
            I'm a Web Developer.
          </h2>
          <p className="text-cyan-900 font-medium text-2xl py-4 max-w-md">
            I'm a fresher looking for opportunities. Currently, I love to work
            on web applications using technologies like React, Tailwind, Next
            JS, and MongoDB.
          </p>
          <div>
            {/* Button with hover animation */}
            <Link
              to="projects"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-blue-400 cursor-pointer"
            >
              View My Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div className="relative inline-block">
          <img
            src={HeroImage}
            alt=" my profile"
            className="rounded-3xl mx-auto w-2/3 md:w-full opacity-90"
          />
          <div className="absolute top-20 left-55 w-80 h-14 bg-slate-500 opacity-75 rounded-2xl flex items-center justify-center">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-green-600"></span>
            </span>
            <p className="font-bold text-black">Priyanka is now available to be hired.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
