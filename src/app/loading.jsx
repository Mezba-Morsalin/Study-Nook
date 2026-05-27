import React from 'react';
import { MoonLoader } from 'react-spinners';

const loading = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#071228]">
      <MoonLoader color="#FFD700" size={50} />
      <p className='mt-3 bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent font-bold'>Loading...</p>
    </div>
    );
};

export default loading;