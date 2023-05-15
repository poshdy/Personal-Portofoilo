import React, { useState } from "react";
import { styles } from "../styles";
import { Container } from "../Wrapper";
import { motion } from "framer-motion";
import { text } from "../animation/motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";

const Projects = () => {
  const [reading ,setReading] = useState(false)
  return (
    <section className={`text-white uppercase ${styles.space}`}>
      <div className={`${styles.Container}`}>
        <motion.h1 variants={text()} className={`${styles.HeroText} py-3`}>
          My Work
        </motion.h1>
        <div className="flex items-center gap-3 justify-end">
          <div className={`${reading ? 'h-[800px] w-[350px]' : ' w-[350px] h-[400px]'} p-3  duration-300 ease-in-out bg-transparent border-4 border-white rounded-2xl `}  >
            <img src="" alt="" className="rounded-b-xl w-full h-[200px]" />
            <p className={`text-sm  text-[#878787]`}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque
              qui exercitationem commodi doloribus autem maxime at quae ab!
              Perferendis illo voluptas natus harum unde sequi, assumenda
              quibusdam nostrum quaerat quisquam magni repellendus, alias
              ratione deleniti sunt quo, omnis ex doloribus!
            </p>
            <p className={!reading ? 'hidden' : 'flex'} >
Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi tempora, incidunt quos veniam rerum dolor architecto recusandae, debitis libero, dolorum minima officiis ut error? Ad architecto nisi nihil tenetur quae.
            </p>
            <span onClick={()=>setReading(!reading)}>Read more</span>
          </div>
         
        </div>
      </div>
    </section>
  );
};

export default Container(Projects, "projects");
