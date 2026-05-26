import React from 'react';
import { BsCalendar2CheckFill } from 'react-icons/bs';
import { FaVolumeMute } from 'react-icons/fa';
import { GrGroup } from 'react-icons/gr';
import {  IoIosWifi } from 'react-icons/io';
import starImg from '../../../../public/assets/Star.svg'
import Image from 'next/image';

const WhyChoose = () => {
    return (
        <div className='bg-[url(/assets/ChooseBg.svg)] bg-cover bg-center h-[200vh] md:h-[120vh] lg:h-[90vh]'>
            <div className='w-11/12 lg:w-10/12 mx-auto py-20'>
                
                <div className='text-center space-y-5'>
                    <p className='
                        inline-flex items-center gap-1.5
                        px-5 py-2 rounded-full
                        border-2 border-yellow-400/60
                        bg-[#071228]/60 backdrop-blur-md
                        text-sm font-semibold tracking-[3px]

                        bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300]
                        bg-clip-text text-transparent

                        shadow-[0_0_15px_rgba(255,193,7,0.18)]'>
                        <Image src={starImg} alt='star' width={40} height={40}></Image>
                        WHY CHOOSE US
                    </p>
                    <h2 className='text-4xl lg:text-5xl font-bold text-white'>Why Choose <span className='bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300]
                        bg-clip-text text-transparent'>StudyNook</span>?</h2>
                        <p className='text-base leading-7 text-white/80'>We Provide the perfect environment and tools to help you study better, together</p>
                </div>
                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12'>
                        <div className='bg-[#061a3a] rounded-2xl p-8 space-y-4 text-center border border-[#335483] hover:shadow-[0_0_40px_rgba(251,191,36,0.18)] transition-all duration-300 hover:-translate-y-3'>
                            <div className='flex justify-center items-center'>
                                <div className='bg-[#112645] p-5 border border-[#335483] rounded-full'>
                                <BsCalendar2CheckFill className='text-yellow-400' size={45}/>
                            </div>
                            </div>
                            <h3 className='text-xl text-white font-semibold'>Instant Booking</h3>
                            <p className='text-white/80 text-sm leading-6'>Book your study room in just a few clicks without any hassle. Fast, simple, and fully seamless experience for students.</p>
                            <div className="w-18 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
                        </div>
                        <div className='bg-[#061a3a] rounded-2xl p-8 space-y-4 text-center border border-[#335483] hover:shadow-[0_0_40px_rgba(251,191,36,0.18)] transition-all duration-300 hover:-translate-y-3'>
                            <div className='flex justify-center items-center'>
                                <div className='bg-[#112645] p-5 border border-[#335483] rounded-full'>
                                <FaVolumeMute className='text-yellow-400' size={45}/>
                            </div>
                            </div>
                            <h3 className='text-xl text-white font-semibold'>Quiet Environment</h3>
                            <p className='text-white/80 text-sm leading-6'>Focus better in a peaceful, distraction-free space designed to improve concentration and productivity while you study.</p>
                            <div className="w-18 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
                        </div>
                        <div className='bg-[#061a3a] rounded-2xl p-8 space-y-4 text-center border border-[#335483] hover:shadow-[0_0_40px_rgba(251,191,36,0.18)] transition-all duration-300 hover:-translate-y-3'>
                            <div className='flex justify-center items-center'>
                                <div className='bg-[#112645] p-5 border border-[#335483] rounded-full'>
                                <IoIosWifi className='text-yellow-400' size={45}/>
                            </div>
                            </div>
                            <h3 className='text-xl text-white font-semibold'>High-Speed WiFi</h3>
                            <p className='text-white/80 text-sm leading-6'>Enjoy ultra-fast and stable internet connection so you can research, attend classes, and work without interruption.</p>
                            <div className="w-18 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
                        </div>
                        <div className='bg-[#061a3a] rounded-2xl p-8 space-y-4 text-center border border-[#335483] hover:shadow-[0_0_40px_rgba(251,191,36,0.18)] transition-all duration-300 hover:-translate-y-3'>
                            <div className='flex justify-center items-center'>
                                <div className='bg-[#112645] p-5 border border-[#335483] rounded-full'>
                                <GrGroup className='text-yellow-400' size={45}/>
                            </div>
                            </div>
                            <h3 className='text-xl text-white font-semibold'>Collaborative Spaces</h3>
                            <p className='text-white/80 text-sm leading-6'>Perfect rooms for group study, discussions, and project work with comfortable seating and teamwork-friendly layout.</p>
                            <div className="w-18 h-1 bg-yellow-400 mx-auto mt-3 rounded-full"></div>
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default WhyChoose;