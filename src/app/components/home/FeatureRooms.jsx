import Image from 'next/image';
import React from 'react';

const FeatureRooms = () => {
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
                </div>
            </div>
        </div>
    );
};

export default FeatureRooms;