import React, { useState , useEffect } from "react";
import { styles } from "../styles";
import { NavLinks } from "../Constants";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { TfiClose } from "react-icons/tfi";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import Avatar from '../assets/Avatar.png'
import { Container } from "../Wrapper";

const NavBar = () => {
  const [Active, setActive] = useState("");
  const [Mob, setMob] = useState(false);
  const [scroll , setScroll] = useState(false)


  useEffect(() => {
    const changeColor = ()=>{
      if(window.scrollY >100){
        setScroll(true)
      }else{
        setScroll(false)
      }
    }
    window.addEventListener('scroll' ,changeColor)
  
    return () =>  window.removeEventListener('scroll',changeColor)
    
  }, [])
  
const opt = {
  top:0,
  left:0,
  behavior: "smooth",
}
 
  return (
    <nav className={`sticky top-1 z-50 text-white` }>
      <div
        className={scroll ? ` ${styles.Container} p-3 flex justify-between items-center  rounded-full bg-[#000000]/50 duration-500 ease-in-out ` : `${styles.Container} py-3  flex justify-between duration-300 items-center` }
      >
        <div className="flex flex-col items-center gap-2">
          <h1 onClick={()=>window.scrollTo(opt)} className="text-4xl font-bold  flex flex-col cursor-pointer">
            &#123;R&#125;
          </h1>
          <p className={`${styles.Paragraphs}`}>
            Learn.Work.Repeat
          </p>
        </div>
        <div className=" hidden md:flex items-center gap-2 ">
          {NavLinks.map((link) => (
            <a href={`#${link.id}`}
              onClick={() => setActive(link.title)}
              className={
                Active === link.title
                  ? `${styles.trans} text-white text-lg`
                  : `${styles.trans} text-gray-400 text-lg`
              }

              key={link.id}
            >
              {link.title}
            </a>
          ))}
        </div>
        <div className="md:hidden flex" onClick={() => setMob(!Mob)}>
          {!Mob ? (
            <HiOutlineMenuAlt3 size={25} color="white" />
          ) : (
            <TfiClose size={22} color="white" />
          )}
        </div>
      </div>
      <div
        className={
          Mob
            ? "fixed left-0 top-0 z-50  w-[40%] h-full bg-[#0b0b0b] duration-500 ease-in-out"
            : "fixed left-[-100%] duration-500 ease-in-out"
        }
      >
        <div className="flex flex-col items-center gap-2 py-5 text-white">
          <h1 className="text-4xl font-bold  flex flex-col">&#123;R&#125;</h1>
          <p className="text-sm font-medium text-[#F0F0F0]">
            Learn.Work.Repeat
          </p>
        </div>
        <div className="flex items-center w-full py-2 text-3xl flex-col text-white gap-4 uppercase">
          {NavLinks.map((link) => (
            <a className="font-bold hover:text-[#CCFB90] text-2xl" key={link.id}>
              {link.title}
            </a>
          ))}
          

          
         <div className='flex items-center gap-3 text-[#F0F0F0]'>
        <BsGithub size={30}/>
       <BsInstagram size={30}/>
       <BsLinkedin size={30}/>
       <BsTwitter  size={30} />
      </div>
<img className={`w-96 absolute bottom-0 blur-[2px] hover:blur-none ${styles.trans}` }   src={Avatar}/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
