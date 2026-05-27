import React from 'react';
import searchImg from '../../../../public/assets/searchRoom.svg'
import Image from 'next/image';
import Link from 'next/link';
import { LuMoveRight } from 'react-icons/lu';
const MyBookingPage = () => {
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto py-16'>
            <div className='space-y-4 text-center'>
                <h2 className='text-3xl md:text-5xl font-bold bg-linear-to-r from-white via-yellow-300 to-amber-500 bg-clip-text text-transparent '>No bookings yet</h2>
            <p className='text-white/80 leading-7 max-w-3xl mx-auto'>Explore quiet study rooms, collaborative spaces, and modern learning environments designed to help students stay focused and productive</p>
            </div>
            <div className='mt-12'>
                <Image className='mx-auto' src={searchImg} alt='searching' width={500} height={500}></Image>
            </div>
            <div className="flex justify-center items-center">
          <Link href="/rooms">
            <button className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black font-medium transition-transform duration-300 hover:scale-105 flex items-center gap-2 px-6 py-3 rounded-full hover:shadow-[0_0px_30px_rgba(245,158,11,0.35)] cursor-pointer">
              Browse Rooms
              <LuMoveRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
        </div>
    );
};

export default MyBookingPage;