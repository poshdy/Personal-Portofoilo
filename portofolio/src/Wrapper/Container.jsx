import React from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "../animation/motion";
const Container = (Component, id) =>
  function HOC() {
    return (
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        
        <span className="hash-span" id={id}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };

export default Container;
