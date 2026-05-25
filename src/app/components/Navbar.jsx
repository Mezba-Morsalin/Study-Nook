import React from 'react';
import navImg from '../../../public/assets/navbar.png'
import Image from 'next/image';
import NavLink from './shared/NavLink';
import Link from 'next/link';
import { Button } from '@heroui/react';
const Navbar = () => {
    const links = (
        <>
        <li className='text-white/70'><NavLink href='/'>Home</NavLink></li>
        <li className='text-white/70'><NavLink href='/rooms'>Rooms</NavLink></li>
        <li className='text-white/70'><NavLink href='/add-room'>Add Rooms</NavLink></li>
        <li className='text-white/70'><NavLink href='/my-bookings'>My Bookings</NavLink></li>
        </>
    )
    return (
        <div className='bg-[#071228] backdrop-blur-md bg-opacity-80 border-b border-white/10 shadow-white'>
            <div className='w-10/12 lg:w-11/12 mx-auto py-5'>
                <div className='flex justify-between items-center'>
                    <div>
                    <Image src={navImg} alt='navbar-img' width={200} height={200}></Image>
                </div>
                <ul className='flex items-center gap-5'>
                    {links}
                </ul>
                <div className='flex gap-4'>
                        <Link href={'/login'}><Button className={'bg-linear-to-r from-yellow-400 to-amber-600 transition-transform duration-300 ease-out hover:scale-105 flex items-center group text-base p-5 hover:shadow-[0_0px_30px_rgba(245,158,11,0.35)]'}>Login</Button></Link>
                        <Link href={'/register'}><Button className={'border border-white/90 text-white/90 bg-transparent transition-transform duration-300 ease-out hover:scale-105 text-base group p-5 hover:shadow-[0_0px_20px_rgba(255,255,255,0.35)]'} >Register</Button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;