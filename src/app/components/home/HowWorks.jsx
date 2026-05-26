"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import quetImg from "../../../../public/assets/question.svg";

import { HiOutlineSearch } from "react-icons/hi";
import { HiOutlineCalendarDays } from "react-icons/hi2";
import { FaGraduationCap } from "react-icons/fa";

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.2,
    },
  }),
};

const cards = [
  {
    icon: HiOutlineSearch,
    title: "Browse Rooms",
    desc: "Explore available study rooms based on your needs — quiet study, group discussion, or collaboration spaces.",
  },
  {
    icon: HiOutlineCalendarDays,
    title: "Select & Book",
    desc: "Choose your preferred room and pick a time slot that fits your schedule with instant booking access.",
  },
  {
    icon: FaGraduationCap,
    title: "Enjoy Study Time",
    desc: "Walk in and enjoy a distraction-free environment designed for focus and productivity.",
  },
];

const HowWorks = () => {
  return (
    <section className="bg-[#071228] overflow-hidden">
      <div className="w-11/12 lg:w-10/12 mx-auto py-16">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight inline-flex items-center gap-2 flex-wrap justify-center">
            How

            <span className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent">
              StudyNook
            </span>

            Works

            <motion.div
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >
              <Image
                className="w-12 md:w-16"
                src={quetImg}
                alt="question"
                width={600}
                height={600}
              />
            </motion.div>
          </h2>

          <p className="text-base text-white/80 mt-4 max-w-2xl mx-auto leading-7">
            Book your perfect study space in just 3 simple steps.
            Fast, easy, and stress-free experience for every student.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {cards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                custom={index}
                whileHover={{
                  y: -10,
                  scale: 1.02,
                }}
                className="bg-[#061a3a] rounded-2xl p-8 space-y-3 text-center border border-[#335483] hover:shadow-[0_0_40px_rgba(251,191,36,0.18)] transition-all duration-300"
              >
                <motion.div
                  whileHover={{
                    rotate: 8,
                    scale: 1.1,
                  }}
                >
                  <Icon
                    className="text-yellow-400 mx-auto"
                    size={45}
                  />
                </motion.div>

                <h3 className="text-white text-xl font-semibold">
                  {card.title}
                </h3>

                <p className="text-sm text-white/80 leading-6">
                  {card.desc}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default HowWorks;