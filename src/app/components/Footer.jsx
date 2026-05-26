"use client";

import React from 'react';
import navImg from '../../../public/assets/navbar.png'
import Image from 'next/image';
import NavLink from './shared/NavLink';
import { MdOutlineMailOutline } from 'react-icons/md';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion } from "framer-motion";

const Footer = () => {
    const links = (
        <>
            <li className='text-white/70'>
                <NavLink href='/'>Home</NavLink>
            </li>
            <li className='text-white/70'>
                <NavLink href='/rooms'>Rooms</NavLink>
            </li>
        </>
    );

    return (
        <div className='bg-[#071228] backdrop-blur- bg-opacity-80 border border-white/10 shadow-white'>

            <div className='w-11/12 lg:w-10/12 mx-auto py-16'>
                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-12'>

                    <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className='space-y-6'>
                        <Image src={navImg} alt='footer-img' width={300} height={300} />
                        <p className='text-white/80 leading-7'>
                            Private study spaces you can book by the hour—crafted for deep focus, serious thinking, and lifelong learning.
                        </p>
                    </motion.div>

                    <motion.ul initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} viewport={{ once: true }} className='flex flex-col justify-center items-center gap-5'>
                        <h3 className='text-xl font-semibold text-white/80'>Useful Links</h3>
                        {links}
                    </motion.ul>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }} className='flex flex-col justify-center items-center gap-4'>
                        <h3 className='text-xl font-semibold text-white/80'>Contact Us</h3>

                        <p className='text-white/80 leading-7 flex items-center gap-2'>
                            <MdOutlineMailOutline /> contact.studynook@gmail.com
                        </p>

                        <p className='text-white/80 leading-7 flex items-center gap-2'>
                            <FaPhoneAlt /> +8801234567890
                        </p>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }} viewport={{ once: true }} className='flex flex-col justify-center items-center gap-4' >
                        <h3 className='text-xl font-semibold text-white/80'>Follow Us</h3>

                        <div className='flex gap-4'>

                            <motion.button whileHover={{ scale: 1.1 }} className='rounded-full bg-[#071228]/70 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-linear-to-r hover:from-[#FFD700] hover:via-[#FFC107] hover:to-[#FFB300] hover:text-white hover:scale-110 cursor-pointer p-1'>
                                <FaFacebook size={25} />
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.1 }} className='rounded-full bg-[#071228]/70 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-linear-to-r hover:from-[#FFD700] hover:via-[#FFC107] hover:to-[#FFB300] hover:text-white hover:scale-110 cursor-pointer p-1'>
                                <FaXTwitter size={25} />
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.1 }} className='rounded-full bg-[#071228]/70 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-linear-to-r hover:from-[#FFD700] hover:via-[#FFC107] hover:to-[#FFB300] hover:text-white hover:scale-110 cursor-pointer p-1'>
                                <FaLinkedin size={25} />
                            </motion.button>

                            <motion.button whileHover={{ scale: 1.1 }} className='rounded-full bg-[#071228]/70 flex items-center justify-center text-white/70 transition-all duration-300 hover:bg-linear-to-r hover:from-[#FFD700] hover:via-[#FFC107] hover:to-[#FFB300] hover:text-white hover:scale-110 cursor-pointer p-1'>
                                <FaInstagram size={25} />
                            </motion.button>

                        </div>
                    </motion.div>

                </div>
            </div>

            <div className='border border-gray-700'></div>
            <div className='w-11/12 lg:w-10/12 mx-auto'>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.6 }} viewport={{ once: true }} className='flex flex-col md:flex-row gap-5 justify-between py-5'>
                    <p className='text-white/80'>&copy; 2026 Study Nook. All Rights Reserved</p>
                    <p className='text-white/80'>Crafted for focused minds.</p>
                </motion.div>
            </div>

        </div>
    );
};

export default Footer;