"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Button } from '@heroui/react';
import { LuMoveRight } from 'react-icons/lu';
import { HiMiniArrowRightStartOnRectangle } from 'react-icons/hi2';

const Hero = () => {
    return (
        <div className="bg-[url(/assets/bg.svg)] bg-cover bg-center h-[95vh] lg:h-[70vh]">
            <div className='w-11/12 lg:w-10/12 mx-auto p-5 md:p-0'>
                <div className='flex flex-col gap-12 lg:flex-row justify-between items-center py-10 lg:py-16'>

                    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className='w-full lg:w-[800px] space-y-5'>
                        <h2 className='text-white text-3xl md:text-5xl font-bold leading-tight'>
                            <motion.span initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }}>
                                Book Your Spot,{" "}
                            </motion.span>

                            <motion.span initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.4 }} className='bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(255,193,7,0.35)'>
                                Boost Your Grades
                            </motion.span>
                        </h2>

                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }} className='text-white/80 text-lg leading-7 mb-10'>
                            Discover and reserve quiet study rooms, group discussion zones, and collaboration spaces instantly . No more wandering around campus looking for an empty room—secure your study nook in just a few clicks!
                        </motion.p>
                    <div className='flex flex-col md:flex-row gap-4'>
                        <Link href={'/rooms'}><Button className={'text-black bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] transition-transform duration-300 ease-out hover:scale-105 flex items-center group text-base p-5 hover:shadow-[0_0px_30px_rgba(245,158,11,0.35)]'}>Explore Rooms <LuMoveRight className="transition-transform duration-300 group-hover:translate-x-1" /></Button></Link>
                        <Link href={'/register'}><Button className={'border border-white/90 text-white/90 bg-transparent transition-transform duration-300 ease-out hover:scale-105 text-base group p-5 hover:shadow-[0_0px_20px_rgba(255,255,255,0.35)]'} >Get Started <HiMiniArrowRightStartOnRectangle className="transition-transform duration-300 group-hover:translate-x-1"/></Button></Link>
                    </div>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }}>
                        <Image src="/assets/STUDENT.svg" alt="Student" width={450} height={450} className="object-contain w-[280px] md:w-[350px] lg:w-[450px]"/>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Hero;