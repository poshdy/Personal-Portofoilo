import React from "react";
import Avatar from "../assets/Avatar.png";
import { BsCodeSlash } from "react-icons/bs";
import Ux from "../assets/Ux.png";
import Ui from "../assets/Ui.png";
import Quality from "../assets/quality.png";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
// import { BsTwitter } from "react-icons/bs";
import { motion } from "framer-motion";
import { fade, slide, zoom } from "../animation/motion";

const HeroSec = () => {
  return (
    <div className="my-12 relative z-10  font-black uppercase flex items-center justify-center">
      <motion.div
        variants={fade("left", "spring", 0.6, 0.5)}
        className="w-full md:w-[80%] bg-[#FFECE7] h-[500px] rounded-3xl flex flex-col items-center justify-end relative"
      >
        <div className="absolute left-4 top-[-20px] w-[120px] h-[120px] md:w-[180px] md:h-[180px] rounded-full bg-[#CCFB90] blur-[1px] hover:blur-none duration-500 ease-in-out rotate-[-20deg] border-4 border-black uppercase">
          <h1 className="flex relative top-[20%] flex-col items-center justify-center text-2xl lg:text-4xl text-black font-black">
            Clean <span className="text-xl md:text-3xl">Code</span>
            <BsCodeSlash size={30} />
          </h1>
        </div>
        <div className="absolute right-4 top-[-10px] w-[150px] h-[100px] md:w-[250px] md:h-[120px] rounded-full bg-[#EF8BFF] blur-[1px] hover:blur-none duration-500 ease-in-out rotate-[15deg] border-4 border-black">
          <h1 className="flex relative  flex-col items-center justify-center text-2xl lg:text-3xl text-black font-black">
            USER <span className="text-2xl md:text-4xl">EXPERIENCE</span>
            <img className="w-12" src={Ux} />
          </h1>
        </div>
        <div className="absolute left-6 bottom-[-10px] w-[120px] h-[120px] md:w-[200px] md:h-[200px] rounded-lg  bg-[#FFEA31] blur-[1px] hover:blur-none duration-500 ease-in-out rotate-[-15deg] hover:rotate-0 border-4 border-black">
          <h1 className="flex relative  flex-col items-center justify-center text-2xl lg:text-3xl p-2 text-black font-black">
            Quality <img className="w-12 md:w-24" src={Quality} />
            <span className="text-xl md:3xl lg:text-4xl">speaks</span>
          </h1>
        </div>
        <div className="absolute right-2 md:right-6 bottom-[-10px] w-[150px] h-[150px]  md:w-[180px] md:h-[180px] rounded-full   bg-[#59FFC3] blur-[1px] hover:blur-none duration-500 ease-in-out rotate-[-20deg] hover:rotate-0 border-4 border-black">
          <h1 className="flex relative top-[20%] flex-col items-center justify-center text-3xl lg:text-4xl p-2 text-black font-black">
            Responsive <span className="text-xl md:text-3xl">design</span>
            <img className="w-10 md:w-12" src={Ui} />
          </h1>
        </div>

        <button className="text-black font-medium text-2xl  py-3">
          Get in Touch
        </button>
        <motion.div
          variants={slide("top", "", 0.6, "")}
          className="flex items-center gap-2 text-black"
        >
          <a href="https://github.com/poshdy" target="_blank">
          <BsGithub
          
            className="hover:text-blue-950 duration-500 ease-in-out"
            size={30}
          />
          </a>
          <BsInstagram
            className="hover:text-pink-500 duration-500 ease-in-out"
            size={30}
          />
          <BsLinkedin
            className="hover:text-[#0a66c2] duration-500 ease-in-out"
            size={30}
          />
          {/* <BsTwitter
            className="hover:text-blue-500 duration-500 ease-in-out"
            size={30}
          /> */}
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0, y: 200 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.8, type: "spring", duration: 0.6 }}
          className="w-80 md:w-96"
          src={Avatar}
        />
      </motion.div>
    </div>
  );
};

export default HeroSec;
