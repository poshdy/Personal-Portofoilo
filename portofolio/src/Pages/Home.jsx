import React, { useEffect, useState } from "react";
import {
  About,
  Contact,
  LandingPage,
  NavBar,
  Projects,
  Services,
} from "../components";
import { motion } from "framer-motion";

import StarsCanvas from "../components/Stars";


const Home = () => {
  const [time, setTime] = useState(false);

  // useEffect(() => {
  //   const delay = setTimeout(() => {
  //     setTime(true);
  //   }, 3000);

  //   return () => clearTimeout(delay);
  // }, []);

  return (
    <motion.div
  
      className="relative"
    >
      <NavBar />
      <LandingPage />
      <About />
      {/* <Services /> */}
      <Projects />
      <Contact />
      {/* {time ? <StarsCanvas /> : null} */}
    </motion.div>
  );
};

export default Home;
