import React from "react";
import EarthCanvas from "./Earth";
import StarsCanvas from "./Stars";
import Form from "./Form";
import { styles } from "../styles";
import { Container } from "../Wrapper";



const Contact = () => {
  return (
    <div
    className={`${styles.Container}`}
    >
      <div className="flex items-center justify-center md:flex-row flex-col-reverse ">
      <Form/>
        <EarthCanvas />

      </div>
     
    </div>
  );
};

export default Container(Contact , 'contact') ;

