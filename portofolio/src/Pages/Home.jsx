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
    <div className="relative overflow-x-hidden">
      <NavBar />
      <LandingPage />
      <About />
      {/* <Services /> */}
      <Projects />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  );
};

export default Home;
