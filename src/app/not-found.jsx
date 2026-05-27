import React from 'react';
import errorImg from '../../public/assets/404.svg'
import Link from 'next/link';
import Image from 'next/image';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-[#071228] px-5 text-center">
      
      <Image className='mx-auto' src={errorImg} width={500} height={500} alt='error-image'></Image>
      

      <p className="mt-3 text-white/70 max-w-md">
        The page you are looking for doesn’t exist or may have been moved.
      </p>

      <Link href="/">
        <button className="mt-6 px-6 py-3 rounded-xl bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black font-semibold hover:scale-105 transition duration-300">
          Back to Home
        </button>
      </Link>
    </div>
    );
};

export default ErrorPage;