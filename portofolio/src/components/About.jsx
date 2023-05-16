import React from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { Tech, Techicon } from "../Constants";
import Marquee from "react-fast-marquee";
import { Tilt } from "react-tilt";
import { text, zoom } from "../animation/motion";
import { Container } from "../Wrapper";
const About = () => {


const scrollToPackages =()=>{
  window.scrollTo({top:5000,behavior:"smooth"  })
}

  return (
    <section className={` text-white my-[200px]`}>
      <motion.div variants={text()} className={`${styles.Container}`}>
        <div className="flex items-center flex-col my-6  ">
          <h1 className={`${styles.HeroText} `}>About.</h1>
        </div>
        <div className=" flex flex-col items-center justify-center text-center gap-7 ">
          <p className={`${styles.Paragraphs}`}>
            I'm a skilled Front-end Developer ,Designer with experience in
            recent Web technologies, and expertise in frameworks like React js ,
            Next js With these skills, I am able to create intuitive,
            responsive, and dynamic user interfaces that deliver seamless
            experiences across various devices and platforms. I am always up for
            a challenge and enjoy working collaboratively with others to deliver
            high-quality solutions that meet or exceed expectations. Whether
            it's building a new web application or optimizing an existing one, I
            am passionate about leveraging my skills to deliver the best
            possible outcomes for users and businesses alike.
          </p>
          <div className="flex gap-3">
            {/* <button onClick={scrollToContact}  className={`${styles.Button2}`}>Hire me</button> */}
            <button  onClick={scrollToPackages} className={`${styles.Button1}`}>Let's Work Togther </button>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, width: 0 }}
        whileInView={{ opacity: 1, width: "100%" }}
        viewport={{once:true}}
        transition={{ duration: 0.5 }}
        className="h-16 md:h-28 bg-[#FFEA31] my-36 rotate-[-2deg] uppercase text-black font-black text-4xl md:text-7xl flex items-center"
      >
        <Marquee className="overflow-y-hidden" gradientColor={false} speed={80}>
          {Tech.map((t, i) => (
            <p key={i} className="px-2">
              {t}
            </p>
          ))}
        </Marquee>
      </motion.div>
      <div className=" w-[80%] mx-auto justify-center flex-wrap gap-5 flex items-center">
        {Techicon.map((t, i) => (
          <Tilt key={i}>
            <motion.div
              variants={zoom(i * 0.1, 0.4)}
              className="w-[150px] h-[150px] md:w-[200px] md:h-[200px] bg-gradient-to-r from-[#FFEA31] to-[#1DB948] rounded-md flex justify-center items-center"
            >
              <div className="bg-[#2F2F2F] flex rounded-md justify-center items-center w-[146px] h-[146px] md:w-[196px] md:h-[196px] border-yellow-300">
                <img className="w-20 md:w-[100px]" key={i} src={t} alt="" />
              </div>
            </motion.div>
          </Tilt>
        ))}
      </div>
    </section>
  );
};

export default Container(About, "about");
