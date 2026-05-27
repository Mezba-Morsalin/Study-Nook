"use client";

import React from 'react';
import navImg from '../../../public/assets/navbar.png'
import Image from 'next/image';
import NavLink from './shared/NavLink';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { authClient } from '@/lib/auth-client';
import { SyncLoader } from 'react-spinners';


const Navbar = () => {

    const {data : session, isPending} = authClient.useSession();
    const user = session?.user ?? null;
    const handleSignOut = async () => {
        await authClient.signOut();
    };

    const authLinks = (
        <>
            <li className='text-white/70'><NavLink href='/'>Home</NavLink></li>
            <li className='text-white/70'><NavLink href='/rooms'>Rooms</NavLink></li>
            <li className='text-white/70'><NavLink href='/add-room'>Add Rooms</NavLink></li>
            <li className='text-white/70'><NavLink href='/my-bookings'>My Bookings</NavLink></li>
        </>
    );
    const guestLinks = (
        <>
            <li className='text-white/70'><NavLink href='/'>Home</NavLink></li>
            <li className='text-white/70'><NavLink href='/rooms'>Rooms</NavLink></li>
        </>
    );

    return (
        <div className='bg-[#071228]/80 backdrop-blur-md bg-opacity-80 border-b border-white/10 shadow-white'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-5'>
                <div className='flex justify-between items-center'>

                    <div>
                        <Image src={navImg} alt='navbar-img' width={200} height={200} />
                    </div>

                    <ul className='flex items-center gap-5'>
                        {user ? authLinks : guestLinks}
                    </ul>

                    {
                        isPending ? <SyncLoader color="#FFD700" /> :
                        user ? <div className='flex items-center gap-8'>
                        <div className='flex gap-3'>
                            <div>
                                <Image  src={user?.image || "/assets/default.png"} alt='user-png' width={60} height={60}></Image>
                            </div>
                            <div className='space-y-2'>
                                <h2 className='text-white font-semibold text-base'>{user?.name}</h2>
                                <Link className="relative bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-yellow-400 after:transition-all hover:after:w-full" href={'/profile'}>See Profile</Link>
                            </div>
                        </div>

                        <Link onClick={()=> handleSignOut()}  className='bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black transition-transform duration-300 ease-out hover:scale-105 flex items-center group text-base px-4 py-2 hover:shadow-[0_0px_30px_rgba(245,158,11,0.35)] rounded-full' href='/'>
                                Sign Out
                        </Link> </div> : <div className='flex gap-4'>
                        <Link href={'/login'}>
                            <Button className={'bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black transition-transform duration-300 ease-out hover:scale-105 flex items-center group text-base p-5 hover:shadow-[0_0px_30px_rgba(245,158,11,0.35)]'}>
                                Login
                            </Button>
                        </Link>

                        <Link href={'/register'}>
                            <Button className={'border border-white/80 text-white/80 bg-transparent transition-transform duration-300 ease-out hover:scale-105 text-base group p-5 hover:shadow-[0_0px_20px_rgba(255,255,255,0.35)]'}>
                                Register
                            </Button>
                        </Link>
                    </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Navbar;