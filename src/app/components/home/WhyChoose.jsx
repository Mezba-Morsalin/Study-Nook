"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import { BsCalendar2CheckFill } from "react-icons/bs";
import { FaVolumeMute } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { IoIosWifi } from "react-icons/io";

import starImg from "../../../../public/assets/Star.svg";

const features = [
  {
    icon: BsCalendar2CheckFill,
    title: "Instant Booking",
    description:
      "Book your study room in just a few clicks without any hassle.",
  },
  {
    icon: FaVolumeMute,
    title: "Quiet Environment",
    description:
      "Focus better in a peaceful and distraction-free environment.",
  },
  {
    icon: IoIosWifi,
    title: "High-Speed WiFi",
    description:
      "Enjoy ultra-fast internet connection without interruption.",
  },
  {
    icon: GrGroup,
    title: "Collaborative Spaces",
    description:
      "Perfect rooms for group study and teamwork discussions.",
  },
];

export default function WhyChooseContent() {
  return (
    <section className="bg-[url(/assets/ChooseBg.svg)] bg-cover bg-center overflow-hidden">

      <div className="w-11/12 lg:w-10/12 mx-auto py-20">

        <div className="text-center space-y-5">

          <p className="inline-flex items-center gap-1.5 px-5 py-1 rounded-full border-2 border-yellow-400/60 bg-[#071228]/60 backdrop-blur-md text-sm font-semibold tracking-[3px] bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent shadow-[0_0_15px_rgba(255,193,7,0.18)]">

            <Image
              src={starImg}
              alt="star"
              width={40}
              height={40}
            />

            WHY CHOOSE US
          </p>

          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Why Choose{" "}

            <span className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent">
              StudyNook
            </span>

            ?
          </h2>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mt-12">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -10,
                }}
                className="bg-[#061a3a] rounded-2xl p-8 space-y-4 text-center border border-[#335483] hover:shadow-[0_0_40px_rgba(251,191,36,0.18)] transition-all duration-300"
              >

                <div className="flex justify-center items-center">

                  <div className="bg-[#112645] p-5 border border-[#335483] rounded-full">

                    <Icon
                      className="text-yellow-400"
                      size={45}
                    />

                  </div>

                </div>

                <h3 className="text-xl text-white font-semibold">
                  {feature.title}
                </h3>

                <p className="text-white/80 text-sm leading-6">
                  {feature.description}
                </p>

              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}