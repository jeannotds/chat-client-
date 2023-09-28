import React from 'react'
import 'tailwindcss/tailwind.css';


export default function Header() {
  return (
    <div className='fixed left-0 right-0 top-0 bg-slate-50 px-4 pb-3 pt-3'>
        <h3 className='font-bold text-20 text-[#564453] mb-2'>Chat</h3>
        <div className=''>
            <input type="text" placeholder="Search users..." className='outline-none py-2 px-2 w-full bg-[#e6ebf5] rounded-xl' />
        </div>
    </div>
  )
}
