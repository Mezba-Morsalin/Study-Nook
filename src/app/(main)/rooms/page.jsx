import Room from '@/app/components/Room';
import React from 'react';

const page = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/rooms`)
    const rooms = await res.json()
    return (
        <div className='w-11/12 lg:w-10/12 mx-auto py-16'>
            <div className='text-center space-y-4'>
                <h2 className='text-3xl md:text-5xl font-bold bg-linear-to-r from-white via-yellow-300 to-amber-500 bg-clip-text text-transparent'>Find Your Perfect Study Space</h2>
                <p className='text-white/80 leading-7 max-w-3xl mx-auto'>Explore quiet study rooms, collaborative spaces, and modern learning environments designed to help students stay focused and productive</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-12'>
                {
                    rooms.map(room => <Room key={room._id} room = {room}></Room>)
                }
            </div>
        </div>
    );
};

export default page;