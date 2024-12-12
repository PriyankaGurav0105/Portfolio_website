import React from "react";
import Marquee from "react-fast-marquee";
import ReactImage from "../assets/react.png";
import HtmlImage from "../assets/html.png";
import CssImage from "../assets/css.png";
import JSImage from "../assets/javascript.png";
import TailwindImage from "../assets/tailwind.png";
import NodeImage from "../assets/node.png";
import GithubImage from "../assets/github.png";
import NextjsImage from "../assets/nextjs.png";
import BootstrapImage from "../assets/bootstrap.png";
import ExpressjsImage from "../assets/expressjs.png";
import ViteImage from "../assets/vite.png";
import MongodbImage from "../assets/mongodb.png";
import FigmaImage from "../assets/Figma.png";
import FramerImage from "../assets/framer.jpg";

const Technologies = () => {
  return (
    <div className="w-full h-72 bg-gradient-to-b from-teal-900 to-teal-600 flex flex-row justify-center items-center text-neutral-200">
      <div className="w-[80%] flex flex-col">
        <div className="flex space-y-2 flex-col text-center mb-14">
          <span className="text-3xl font-bold">
            Techologies I use on a daily bases.
          </span>
        </div>
        <Marquee>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={HtmlImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>

          <div className=" bg-white m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={CssImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={JSImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={NodeImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={ReactImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={ViteImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={TailwindImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={NextjsImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={ExpressjsImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={BootstrapImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={MongodbImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={FigmaImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={FramerImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
          <div className=" bg-black m-5 rounded-full flex space-x-9 p-4 cursor-pointer">
            <img
              src={GithubImage}
              alt=" my profile"
              className="mx-auto w-2/3 md:w-16 opacity-90"
            />
          </div>
        </Marquee>
      </div>
    </div>
  );
};

export default Technologies;
