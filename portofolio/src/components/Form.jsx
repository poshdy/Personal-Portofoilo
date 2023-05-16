import React, { useState } from 'react'
import { styles } from '../styles'

import emailjs from "@emailjs/browser";

const Form = () => {
  const [name , setName] = useState('')
  const [Email ,setEmail] = useState('')
  const [message , setMessage] = useState('')
  const [loading , setLoading] = useState(false)
  const [status , setStatus] = useState(false)

   
  // hQ0gFKikPZxbhCSGB
  // template_5p9fb5d
  // service_q5a0klq


  const handleSubmit = (e)=>{
    e.preventDefault();
    setLoading(true);
    
    emailjs.send(import.meta.env.VITE_SERVICE_ID , import.meta.env.VITE_TEMP_KEY,{
      from_name: name,
      to_name: "Roshdy",
      from_email: Email,
      to_email: "roshdy.devv@gmail.com",
      message:message,
    },
    import.meta.env.VITE_PUBLIC_KEY ).then(()=>{setLoading(false)
      setStatus(true)
    setEmail('')
    setName('')
    setMessage('')
    })
  }
  return (
    <div className=' text-white w-[50%] flex justify-center flex-col items-center'>
        <h1 className={`${styles.HeroText} text-center`}>Contact. </h1>
      <div className='bg-transparent w-[450px] h-[600px]  rounded-lg flex gap-4 flex-col p-4'>
        
      <form onSubmit={handleSubmit} className=' mt-3 flex flex-col gap-2'>
       <label className='flex flex-col gap-1'><span className='text-[#9B9B9B] font-medium text-base'>Your name</span></label>
       <input onChange={(e)=>setName(e.target.value)} type="text"  placeholder='What is your name?' className='w-full outline-none border-none rounded-md bg-[#3D3D3D] p-2 font-semibold text-[14px]'   />
       <label className='flex flex-col gap-1'><span className='text-[#9B9B9B] font-medium text-base'>Your email</span></label>
       <input onChange={(e)=>setEmail(e.target.value)} type="email"  placeholder='What is your email?' className='w-full outline-none border-none rounded-md bg-[#3D3D3D] p-2 font-semibold text-[14px]'   />
       <label className='flex flex-col gap-1'><span className='text-[#9B9B9B] font-medium text-base'>Your message</span></label>
       <textarea onChange={(e)=>setMessage(e.target.value)} rows={5} placeholder='What is your message?' className='w-full  outline-none border-none rounded-md bg-[#3D3D3D] p-2 font-semibold text-[14px]'   />
      <button type='submit' className={`${styles.Button1}  text-center w-full  px-2`}>{loading ? 'Sending' : 'Send'}</button>
      </form>
{status ? 'Thank you, I got your message I will get back to you' : null}
      </div>
    </div>
  )
}

export default Form