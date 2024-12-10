import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-gradient-to-b from-black to-gray-800 via-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Web Developer.
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I'm a fresher looking for opportunities. Currently, I love to work
            on web application using technologies
             like React, Tailwind, Next JS and MongoDB.
          </p>
          <div>
            {/* adding group will help you to get a hover effect on the arrow icon while hoving on the button*/}
            <button className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-800 to-blue-400 cursor-pointer">
               View My Projects
                <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={30} className="ml-1"/>
                </span>
               
            </button>
          </div>
        </div>
        <div>
        <img src={HeroImage} alt=" my profile" className="rounded-2xl mx-auto w-2/3 md:w-full"/>
      </div>
      </div>
      
    </div>
  );
};

export default Home;
