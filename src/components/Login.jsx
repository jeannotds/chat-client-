"use client";
import React, { useState } from 'react'
import Image from 'next/image'
import LoginImage from '../images/login.jpg'
import { useRouter } from 'next/router';
import axios from 'axios';

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormessage, setErrormessage] = useState("");
  const [existDate, setExistDate] = useState("");

  const router =  useRouter();

  async function handlerSubmit() {
    console.log(email, password)
    if(!email){
      setErrormessage("Please enter an email");
    }
    if(!password)
      setErrormessage("Please enter a password");
    if(password && email){
      const loginUser = await axios({
        method: 'POST',
        headers: {'X-Custom-Header': 'foobar'},
        url: 'http://localhost:8001/api/auth/login',
        data: { password, email},
      }).then((res) => {
          router.push('/')
      }).catch((err) => {
        const axiosError = err
        const response = axiosError.response;
        const responseData = response.data;
        setExistDate(responseData.message)

      })
    }else{
      setExistDate("");
    }

  }

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='md:flex md:flex-row md:px-5 md:w-4/5'>
        <div className='flex justify-center flex-col items-center md:w-1/2 md:flex'>
          <h2 className='text-26 font-extra-bold opacity-67 md:text-left'>Login</h2>
          <div className='my-5'>
            <Image className='h-150 w-150 md:h-350 md:w-350  md:text-left'
              src={LoginImage} 
              alt='Login image'
            />
          </div>
        </div>
        <div  className='w-screen justify-center flex items-center md:w-1/2 md:mt-10'>
            <form className=''>
              <div>
                <div>
                  <input type="email" placeholder="Email" name="email" required
                    onChange={(email) => {
                      setEmail(email.target.value);
                    }}
                    className='px-3 py-1 w-300 border-2 border-slate-100 outline-none' />
                </div>
                <div>
                  <input type="password" placeholder="Password" name="password" required
                  onChange={(password) => {
                    setPassword(password.target.value);
                  }}
                  className='px-3 py-1 w-300 border-2 border-slate-100 mt-2 outline-none'/>
                </div>
                <p className='text-red-500 text-12'>{errormessage}</p>
                <div>
                  <button type="button" onClick={handlerSubmit} className='bg-blue-400 py-1 w-300 mt-3 text-slate-100 font-bold outline-none'>Login</button>
                </div>
                <p className='text-red-500 mt-2 text-12 text-center'>{existDate}</p>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login