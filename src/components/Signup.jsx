import Image from 'next/image'
import React from 'react'
import LoginImage from '../images/login.jpg'

function Signup() {
  return (
    <div className='flex flex-col justify-center items-center h-screen '>
      <div className='md:flex md:flex-row md:px-5 md:w-4/5'>
        <div className='flex justify-center flex-col items-center md:w-1/2 md:flex'>
          <h2 className='text-26 font-extra-bold opacity-67 md:text-left'>Sign Up ssss</h2>
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
                  <input type="email" placeholder="Email"  className='px-3 py-1 w-300 border-2 border-slate-100 outline-none' />
                </div>
                <div>
                  <input type="password" placeholder="Password" className='px-3 py-1 w-300 border-2 border-slate-100 mt-2 outline-none'/>
                </div>
                <div>
                  <button type="button" className='bg-blue-400 py-1 w-300 mt-3 text-slate-100 font-bold outline-none'>Login</button>
                </div>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Signup