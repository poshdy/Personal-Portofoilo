import React, { useState } from "react";
import { styles } from "../styles";
import { Container } from "../Wrapper";
import { motion } from "framer-motion";
import { text } from "../animation/motion";
import { useQuery } from "@tanstack/react-query";
import { client} from "../lib/client";
import { BsGithub } from "react-icons/bs";



const Projects = () => {
 const Fetcher = ()=>{
  
   return client.fetch(`*[_type == "projects"]{
    name,
    "slug": slug.current,
    "image": image.asset->url,
    details,
    site
   }`)
  
} 

  const {data , isLoading , isFetching} = useQuery({
    queryKey: ['projects'],
    queryFn: ()=> Fetcher()
  })
  if(isFetching || isLoading){
    return <h1>Loadingg</h1>
  }
  return (
    <section className={`text-white uppercase ${styles.space}`}>
      <div className={`${styles.Container}`}>
        <motion.h1 variants={text()} className={`${styles.HeroText} py-3`}>
          My Work
        </motion.h1>
        <div className="flex items-center flex-wrap gap-3 flex-col justify-center  md:justify-end">
            {data?.map((pro , i)=>(
              <div className={`hover:w-[350px] md:hover:w-[500px] w-[250px] blur-sm hover:blur-none overflow-hidden hover:h-[500px] h-[400px] p-3  duration-300 ease-in-out bg-transparent border-4 border-white rounded-2xl `}  >
                          <img className="w-full h-[35%] md:h-[50%] object-cover" src={pro.image} alt="" /> 
                 <h1 className={`text-2xl font-black  `}>
                {pro.name}
                </h1> 
                <p className={`text-sm font-base text-[#878787] lowercase `} >
                 {pro.details}
                </p>  
                <div className="flex items-center justify-end gap-2 cursor-pointer">
                  <a href={pro.site} target="_blank" className="text-lime-300 font-bold">visit site </a>
                  <a href="https://github.com/poshdy" target="_blank">
          <BsGithub
          
            className="hover:text-blue-950 duration-500 ease-in-out"
            size={20}
          />
          </a>
                  </div> 
          </div>
         
            ))}
        </div>
      </div>
    </section>
  );
};

export default Container(Projects, "projects");
