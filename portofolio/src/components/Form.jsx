import React, { useState } from 'react'
import { styles } from '../styles'
import {GrSend} from 'react-icons/gr'

const Form = () => {
  const [form , setForm] = useState({
    name: '',
    email: '',
    message:'',
  
  })


  // const handleChange = (e)=>{

  // }

  // const handleSubmit = ()=>{

  // }
  return (
    <div className=' text-white w-[50%] flex justify-center flex-col items-center'>
        <h1 className={`${styles.HeroText} text-center`}>Contact. </h1>
      <div className='bg-transparent w-[450px] h-[600px]  rounded-lg flex gap-4 flex-col p-4'>
        
      <form className=' mt-3 flex flex-col gap-2'>
       <label className='flex flex-col gap-1'><span className='text-[#9B9B9B] font-medium text-base'>Your name</span></label>
       <input type="text"  placeholder='What is your name?' className='w-[400px] outline-none border-none rounded-md bg-[#3D3D3D] p-2 font-semibold text-[14px]'   />
       <label className='flex flex-col gap-1'><span className='text-[#9B9B9B] font-medium text-base'>Your email</span></label>
       <input type="email"  placeholder='What is your email?' className='w-[400px] outline-none border-none rounded-md bg-[#3D3D3D] p-2 font-semibold text-[14px]'   />
       <label className='flex flex-col gap-1'><span className='text-[#9B9B9B] font-medium text-base'>Your message</span></label>
       <textarea rows={5} placeholder='What is your message?' className='w-[400px]  outline-none border-none rounded-md bg-[#3D3D3D] p-2 font-semibold text-[14px]'   />
      <button className={`${styles.Button1} flex items-center gap-1`}>Send <GrSend className='text-white hover:text-black' size={15} /></button>
      </form>

      </div>
    </div>
  )
}

export default Form