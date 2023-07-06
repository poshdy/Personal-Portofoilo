import React from "react";
import { styles } from "../styles";
import HeroSec from "./HeroSec";
import { motion } from "framer-motion";
import { text } from "../animation/motion";
import Container from "../Wrapper/Container";
const LandingPage = () => {
  return (
    <div className={`text-white  ${styles.space}`}>
      <motion.div variants={text()} className={`${styles.Container}`}>
        <h1 className={`${styles.HeroText} text-center`}>HELLO! I'M ROSHDY,</h1>
        <div className="flex items-center justify-center md:flex-row flex-col text-center gap-2 p-1 ">
          <p className={`${styles.Paragraphs}`}>
            but you can call me Posh, and I'm a front-end developer with 1.7+
            years of experience working with business owners to build their
            dream dynamic websites at affordable costs.
          </p>
        </div>
      </motion.div>
      <HeroSec />
    </div>
  );
};

export default Container(LandingPage);
