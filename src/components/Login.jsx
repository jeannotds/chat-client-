import Image from 'next/image'
import React from 'react'
import LoginImage from '../images/login.jpg'

function Login() {
  return (
    <div className='flex flex-col justify-center items-center h-screen md:bg-red-200 '>
      <div className='sm:flex sm:flex-row sm:w-screen sm:px-5'>
        <div className='flex justify-center flex-col items-center sm:w-2/5'>
          <h2 className='text-26 font-extra-bold opacity-67 sm:text-center'>Login</h2>
          <div className='my-5'>
            <Image className='h-150 w-150 sm:h-150 sm:w-150'
              src={LoginImage} 
              alt='Login image'
            />
          </div>
        </div>
        <div  className='w-screen justify-center flex items-center sm:w-3/5 sm:mt-10'>
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

export default Login