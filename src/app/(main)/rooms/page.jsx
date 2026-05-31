import Room from '@/app/components/Room';
import { title } from 'framer-motion/client';
import React from 'react';
import { FiSearch } from 'react-icons/fi';

export const metadata = {
    title : "StudyNook - Rooms",
    description : "rooms"
}

const page = async ({searchParams}) => {
    const params = await searchParams;

    const search = params?.search || "";
    const types = params?.types || "";

    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms?search=${search}&types=${types}`, {
        cache: "no-store",
    }
    );

    const rooms = await res.json();
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto py-16'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold bg-linear-to-r from-white via-yellow-300 to-amber-500 bg-clip-text text-transparent'>Find Your Perfect Study Space</h2>
                <p className='text-white/80 leading-7 max-w-3xl mx-auto'>Explore quiet study rooms, collaborative spaces, and modern learning environments designed to help students stay focused and productive</p>
            </div>
                <form method="GET" className="relative mt-6 w-full max-w-xl mx-auto">
                    <FiSearch className="absolute left-4 top-[26px] -translate-y-1/2 text-lg text-slate-400 z-10" />

                    <div className="flex flex-col sm:flex-row gap-6">
                        <input type="text" name="search" defaultValue={search} placeholder="Search by facilities name, building name or category name..." className="h-14 w-full text-sm rounded-2xl text-white bg-white/5 border border-white/10 pl-12 pr-4"/>

                        <button type="submit" className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black font-medium px-6 py-1 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
                        Search
                        </button>
                    </div>
                </form>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
                {rooms.length > 0 ? (
                    rooms.map((room) => (
                    <Room key={room._id} room={room} />
                    ))
                ) : (
                <div className="col-span-full text-center py-12">
                    <h3 className="text-2xl font-semibold">
                     No Rooms Found
                    </h3>
                    <p className="text-white/70 mt-2">
                    Try another search or filter.
                    </p>
                </div>
                )}
            </div>
        </div>
    );
};

export default page;