import React from "react";
import { styles } from "../styles";
import { Container } from "../Wrapper";
import { motion } from "framer-motion";
import { text } from "../animation/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Projects = () => {
  return (
    <section className={`text-white uppercase ${styles.space}`}>
      <div className={`${styles.Container}`}>
        <motion.h1 variants={text()} className={`${styles.HeroText} py-3`}>
          My Work
        </motion.h1>
        <div className="flex items-center gap-3 justify-end">
          <div className=" h-[360px] w-[250px] hover:w-[700px] duration-300 ease-in-out bg-slate-700"></div>
          <div className=" h-[360px] w-[250px] hover:w-[700px] duration-300 ease-in-out bg-slate-700"></div>
          <div className=" h-[360px] w-[250px] hover:w-[700px] duration-300 ease-in-out bg-slate-700"></div>
          <div className=" h-[360px] w-[250px] hover:w-[700px] duration-300 ease-in-out bg-slate-700"></div>
        </div>
      </div>
    </section>
  );
};

export default Container(Projects, "projects");
