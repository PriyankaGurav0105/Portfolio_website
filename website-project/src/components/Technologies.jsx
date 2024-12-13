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
  const images = [
    { src: HtmlImage, alt: "HTML" },
    { src: CssImage, alt: "CSS" },
    { src: JSImage, alt: "JavaScript" },
    { src: NodeImage, alt: "Node.js" },
    { src: ReactImage, alt: "React" },
    { src: ViteImage, alt: "Vite" },
    { src: TailwindImage, alt: "Tailwind CSS" },
    { src: NextjsImage, alt: "Next.js" },
    { src: ExpressjsImage, alt: "Express.js" },
    { src: BootstrapImage, alt: "Bootstrap" },
    { src: MongodbImage, alt: "MongoDB" },
    { src: FigmaImage, alt: "Figma" },
    { src: FramerImage, alt: "Framer" },
    { src: GithubImage, alt: "GitHub" },
  ];

  return (
    <div name="technologies"
     className="w-full bg-zinc-200 flex flex-col justify-center items-center py-8">
      {/* Title */}
      <div className="mb-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-teal-950">
          Technologies I Use Daily
        </h2>
      </div>
      
      {/* Marquee */}
      <div className="w-full max-w-6xl">
        <Marquee className="overflow-hidden">
          {images.map((image, index) => (
            <div
              key={index}
              className="bg-black m-4 rounded-full flex items-center justify-center p-4 cursor-pointer transition-transform transform hover:scale-110"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 object-contain opacity-90"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Technologies;
