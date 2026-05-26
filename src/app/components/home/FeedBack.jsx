"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { GoStarFill } from 'react-icons/go';

import say from '../../../../public/assets/say.svg';
import sara from '../../../../public/assets/sara.jpg';
import ben from '../../../../public/assets/ben.jpg';
import chloe from '../../../../public/assets/chloe.jpg';

const feedbacks = [
  {
    img: sara,
    name: "Sarah Leoner",
    role: "Computer Science",
    text: "StudyNook completely changed the way I manage my study time on campus. Before, I used to waste a lot of time searching for empty rooms, especially during busy hours. Now I can instantly check availability and book a quiet space within seconds. It has made my exam preparation much more organized and stress-free.",
  },
  {
    img: ben,
    name: "Ben Stokes",
    role: "Business Administration",
    text: "The interface is extremely clean and easy to navigate. I usually study with my friends, and finding a suitable group study room used to be a real hassle. With StudyNook, we can quickly reserve spaces in advance and focus more on our work instead of worrying about availability.",
  },
  {
    img: chloe,
    name: "Chloe Keener",
    role: "Engineering Student",
    text: "I really like how smooth and efficient the whole system feels. Real-time room availability is a game changer during peak study hours. It saves me from walking around the campus unnecessarily and helps me stay focused on my studies in a calm environment.It has made my exam preparation much more organized and stress-free.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
    },
  }),
};

const FeedBack = () => {
  return (
    <section className="bg-[#061a3a] overflow-hidden">
      <div className="w-11/12 lg:w-10/12 mx-auto py-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 space-y-4"
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight inline-flex items-center gap-2 flex-wrap justify-center">

            <Image
              className="w-14 md:w-16"
              src={say}
              alt="saying"
              width={600}
              height={600}
            />

            What{" "}

            <span className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent">
              Students
            </span>

            Says
          </h2>

          <p className="text-white/80 text-base max-w-2xl mx-auto leading-7">
            Hear from students who use StudyNook to book quiet, comfortable,
            and productive study spaces every day.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {feedbacks.map((item, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={i}
              whileHover={{ y: -10 }}
              className="p-[1px] bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] rounded-2xl"
            >
              <div className="bg-[#071228] rounded-2xl text-center space-y-4 p-8">

                <Image
                  className="rounded-full w-44 h-44 mx-auto object-cover"
                  src={item.img}
                  alt={item.name}
                  width={200}
                  height={200}
                />

                <h3 className="text-white text-xl">
                  {item.name}
                </h3>

                <p className="text-sm text-white/80 leading-6">
                  {item.text}
                </p>

                {/* Stars */}
                <div className="flex justify-center items-center gap-1 text-[#FFD700]">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <GoStarFill key={idx} size={15} />
                  ))}
                </div>

                <button className="bg-linear-to-r from-[#FFC106] to-[#FFB300] text-black px-5 py-1 rounded-full">
                  {item.role}
                </button>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeedBack;