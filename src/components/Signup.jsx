import React from 'react'

function Signup() {
  return (
    <div className='flex h-screen sm:bg-red-200'>
      <div className='w-1/2 flex justify-center flex-col items-center '>
        <h2 className='text-26 font-extra-bold opacity-67'>Login</h2>
        <div>
          <Image className='h-350 w-350'
            src={LoginImage} 
            alt='Login image'
          />
        </div>
      </div>
      <div  className='w-1/2 h-screen flex items-center '>
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
  )
}

export default Signup