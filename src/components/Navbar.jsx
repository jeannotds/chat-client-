"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import 'tailwindcss/tailwind.css';
import '../app/globals.css'
import { FaUserFriends } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaHome } from "react-icons/fa";



export default function Navbar() {

    const pathname = usePathname();
    


  return (
    <div className='bg-white absolute bottom-0 left-0 right-0 py-4 px-8 shadow shodow-box'>
        <ul className='flex justify-between text-26 text-[#99a1b1] '>
            <li className={pathname === "/" ? "active" : "" } >
                <Link href={"/"}>
                    <FaHome />
                </Link>
            </li>
            <li className={pathname === "/conversation" ? "active" : "" } >
                <Link href={"/conversation"}>
                    <FaRocketchat />
                </Link>
            </li>
            <li className={pathname === "/users" ? "active" : "" } >
                <Link href={"/users"}>
                    <FaUserFriends />
                </Link>
            </li>
            <li className={pathname === "/profil" ? "active" : "" } >
                <Link href={"/profil"}>
                    <FaUserAlt />
                </Link>
            </li>
        </ul>
    </div>
  )
}
