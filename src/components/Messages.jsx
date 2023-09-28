import Image from 'next/image'
import React from 'react'
import 'tailwindcss/tailwind.css';
import Profil from '../images/img1.jpeg'
import Send2 from '../images/send2.png'

import { AiOutlineSend } from "react-icons/ai";


export default function Messages() {
  return (
    <div>
        <div className=''>
            <div>
                <div className='flex flex-row items-center py-3 fixed top-0 bg-white left-0 right-0 px-5'>
                    <Image alt="" src={Profil} className='rounded-full mr-2 h-[34px] w-[35px] text-15'/>
                    <div className='mr-2 font-bold text-20 text-[#564453]'>Jeannot Diambu</div>
                    <div className='h-2 w-2 bg-[#51e3bd] rounded-full'></div>
                </div>
                <hr></hr>
            </div>
            <div className='pb-24 pt-16'>
                <div className=''>
                    <div className='mt-4'>
                        <div className='ml-11 bg-[#7269ef] text-white py-2 px-4 max-w-max rounded-md'>
                            <p className='pb-2'>Bonjour</p>
                            <div className='text-end text-13 '>10:23</div>
                        </div>
                        <div className='flex'>
                            <Image alt="" src={Profil} className='rounded-full h-[34px] w-[35px] text-15'/>
                            <div className='pt-3 pl-1 text-15 text-[#707172]'>Jeannot diambu</div>
                        </div>
                    </div>
                </div>
                <div className='mt-4 flex justify-end'>
                    <div className=''>
                        <div className=' mr-11 bg-[#7269ef] text-white py-2 px-4 max-w-max rounded-md'>
                            <p className='pb-2'>Comment tu vas ?</p>
                            <div className='text-end text-13 '>10:23</div>
                        </div>
                        <div className='flex flex-row-reverse'>
                            <Image alt="" src={Profil} className='rounded-full h-[34px] w-[35px] text-15'/>
                            <div className='pt-3 pr-1 text-15 text-[#707172]'>Beni sd</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='mt-4'>
                        <div className='ml-11 bg-[#7269ef] text-white py-2 px-4 max-w-max rounded-md'>
                            <p className='pb-2'>Tres bien</p>
                            <div className='text-end text-13 '>10:23</div>
                        </div>
                        <div className='flex'>
                            <Image alt="" src={Profil} className='rounded-full h-[34px] w-[35px] text-15'/>
                            <div className='pt-3 pl-1 text-15 text-[#707172]'>Jeannot diambu</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='mt-4'>
                        <div className='ml-11 bg-[#7269ef] text-white py-2 px-4 max-w-max rounded-md'>
                            <p className='pb-2'>Tres bien</p>
                            <div className='text-end text-13 '>10:23</div>
                        </div>
                        <div className='flex'>
                            <Image alt="" src={Profil} className='rounded-full h-[34px] w-[35px] text-15'/>
                            <div className='pt-3 pl-1 text-15 text-[#707172]'>Jeannot diambu</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='mt-4'>
                        <div className='ml-11 bg-[#7269ef] text-white py-2 px-4 max-w-max rounded-md'>
                            <p className='pb-2'>Tres bien</p>
                            <div className='text-end text-13 '>10:23</div>
                        </div>
                        <div className='flex'>
                            <Image alt="" src={Profil} className='rounded-full h-[34px] w-[35px] text-15'/>
                            <div className='pt-3 pl-1 text-15 text-[#707172]'>Jeannot diambu</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='mt-4'>
                        <div className='ml-11 bg-[#7269ef] text-white py-2 px-4 max-w-max rounded-md'>
                            <p className='pb-2'>Tres bien</p>
                            <div className='text-end text-13 '>10:23</div>
                        </div>
                        <div className='flex'>
                            <Image alt="" src={Profil} className='rounded-full h-[34px] w-[35px] text-15'/>
                            <div className='pt-3 pl-1 text-15 text-[#707172]'>Jeannot diambu</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='mt-4'>
                        <div className='ml-11 bg-[#7269ef] text-white py-2 px-4 max-w-max rounded-md'>
                            <p className='pb-2'>Tres bien</p>
                            <div className='text-end text-13 '>10:23</div>
                        </div>
                        <div className='flex'>
                            <Image alt="" src={Profil} className='rounded-full h-[34px] w-[35px] text-15'/>
                            <div className='pt-3 pl-1 text-15 text-[#707172]'>Jeannot diambu</div>
                        </div>
                    </div>
                </div>
                <div className=''>
                    <div className='mt-4'>
                        <div className='ml-11 bg-[#7269ef] text-white py-2 px-4 max-w-max rounded-md'>
                            <p className='pb-2'>Tres bien</p>
                            <div className='text-end text-13 '>10:23</div>
                        </div>
                        <div className='flex'>
                            <Image alt="" src={Profil} className='rounded-full h-[34px] w-[35px] text-15'/>
                            <div className='pt-3 pl-1 text-15 text-[#707172]'>Jeannot diambu</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-row justify-center fixed bottom-0 pb-5 pt-5 my-2 bg-white'>
                <input type="text" placeholder="Search users..." className='outline-none py-2 px-5 bg-[#e6ebf5] rounded-xl' />
                {/* <textarea className='w-50 outline-none mt-4 py-2 px-2 w-full bg-[#e6ebf5] rounded-xl'  id="story" name="story" placeholder='Enter message...' rows="1" cols="25"></textarea> */}
                <button type='submit' className='bg-[#7269ef] ml-3 px-2 rounded-xl outline-none'>
                    <AiOutlineSend className=' text-[#ffffff] text-24 ' />
                </button>
            </div>
            
        </div>
    </div>
  )
}
