import Image from 'next/image';
import React from 'react';
import FeaturedRoom from '../FeaturedRoom';
import Link from 'next/link';
import { LuMoveRight } from 'react-icons/lu';

const FeatureRooms = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`, {
    cache: "no-store",
  })
    const rooms = await res.json()
    return (
        <div className='bg-[#061a3a] overflow-hidden'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-16'>
                <div className='text-center space-y-4'>
                    <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight inline-flex items-center gap-2 flex-wrap justify-center">
                        Feature
                        <span className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent">
                          Rooms
                        </span>
                      </h2>
            
                      <p className="text-white/80 text-base max-w-2xl mx-auto leading-7">
                        Explore our carefully designed study rooms built for focus, collaboration, and comfort. Find the perfect space that matches your study needs and boost your productivity.
                      </p>
                      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
                {
                    rooms.map(room => <FeaturedRoom key={room._id} room = {room}></FeaturedRoom>)
                }
            </div>
                </div>
                <div className="flex justify-center items-center mt-12">
          <Link href="/rooms">
            <button className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black font-medium transition-transform duration-300 hover:scale-105 flex items-center gap-2 px-6 py-3 rounded-full hover:shadow-[0_0px_30px_rgba(245,158,11,0.35)] cursor-pointer">
              View All Rooms
              <LuMoveRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
            </div>
        </div>
    );
};

export default FeatureRooms;