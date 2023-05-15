import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { text, zoom } from "../animation/motion";
import { Container } from "../Wrapper";

const Services = () => {
  return (
    <section className={`${styles.space} uppercase  text-white`}>
      <motion.div
        variants={text()}
        className={`${styles.Container}  flex items-center flex-col gap-8  `}
      >
        <h1 className={`${styles.HeroText} `}>Services i offer.</h1>
        <p className={`${styles.Paragraphs} text-center`}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          recusandae officiis amet! Ipsam voluptatum ut vitae eaque non earum?
          Libero eius a repudiandae deserunt ducimus iusto ipsam velit,
          perferendis at.
        </p>

        <motion.div
          variants={zoom(0.6, 0.6)}
          className="flex items-center justify-center flex-col   gap-5 my-7"
        >
          <div className="w-[300px] h-[250px] md:w-[500px]  md:h-[350px] bg-transparent border-4 border-white rounded-xl"></div>
          <div className="flex items-center  gap-2">
          <div className="w-[300px] h-[250px] md:w-[250px]  md:h-[350px] bg-transparent border-4 border-white  rounded-xl"></div>
          <div className="w-[300px] h-[250px] md:w-[250px]  md:h-[350px] bg-transparent border-4 border-white rounded-xl">

          </div>
          
          </div>

      
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Container(Services, "services");
