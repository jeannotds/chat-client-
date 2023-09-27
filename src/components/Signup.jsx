import React, { useState } from 'react'
import Image from 'next/image'
import LoginImage from '../images/login.jpg'
import Link from 'next/link'
import axios from 'axios';
import { useRouter } from 'next/router'


function Signup() {

  const router = useRouter()

  const [username, setUsername] = useState("");
  const [email, setUemail] = useState("");
  const [password, setPassword] = useState("");
  const [confpassword, setConfpassword] = useState("");
  const [errormessage, setErrormessage] = useState("");

  const [existDate, setExistDate] = useState("");

  async function handleSubmit(){
    if(!username)
      setErrormessage("Please enter a username");
    else if(!email)
      setErrormessage("Please enter an email address");
    else if(!password)
      setErrormessage("Please enter a password");
    else if(!confpassword)
      setErrormessage("Please confirm a password");
    else if(password !== confpassword)
      setErrormessage("Your  passwords are not matching");
    else{
      console.log(email, username, password);
      const newUser = await axios({
        method: "post",
        headers: {'X-Custom-Header': 'foobar'},
        url: "http://localhost:8001/api/auth/register",
        data: {
          username, email, password
        }
      }).then((res) => {
        if(res) {
          router.push('/');
        }
      }).catch((err) => {
        const axiosError = err;
        const response = axiosError.response;
        const responseData = response.data;
        setExistDate(responseData.message)
      })

    }
  }

  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='md:flex md:flex-row md:px-5 md:w-4/5'>
        <div className='flex justify-center flex-col items-center md:w-1/2 md:flex'>
          <h2 className='text-26 font-extra-bold opacity-67 md:text-left'>Create account</h2>
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
                  <input type="text" placeholder="Username" name="username" 
                  onChange={username => {
                    setUsername(username.target.value)
                  }}  
                  className='px-3 py-1 w-300 border-2 border-slate-100 outline-none' />
                </div>
                <div>
                  <input type="email" placeholder="Email" name="email"
                  onChange={(email) => {
                    setUemail(email.target.value);
                  }} 
                  className='px-3 py-1 w-300 border-2 border-slate-100 mt-2 outline-none'/>
                </div>
                <div>
                  <input type="password" placeholder="Password" name="password"
                  onChange={(password) => {
                    setPassword(password.target.value);
                  }}
                   className='px-3 py-1 w-300 border-2 border-slate-100 mt-2 outline-none'/>
                </div>
                <div>
                  <input type="password" placeholder="Confirm password" name="confpassword"
                  onChange={(confpassword) => {
                    setConfpassword(confpassword.target.value);
                  }}
                  className='px-3 py-1 w-300 border-2 border-slate-100 mt-2 outline-none'/>
                </div>
                <p className='text-red-500 text-12'>{errormessage}</p>
                <div>
                  <button type="button" onClick={handleSubmit} className='bg-blue-400 py-1 w-300 mt-3 text-slate-100 font-bold outline-none'>Sign up</button>
                </div>
                <div className='text-blue-500 mt-2'>
                  <Link href={"/login"}>Do yo have account ? Connect you !</Link>
                </div>
                <p className='text-red-500 mt-2 text-12 text-center'>{existDate}</p>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Signup