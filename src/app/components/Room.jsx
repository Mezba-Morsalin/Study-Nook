import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaDatabase } from "react-icons/fa";
import { GrGroup } from "react-icons/gr";
import { LuCircleArrowOutUpRight } from "react-icons/lu";

const Room = ({ room }) => {
  return (
    <div className="group bg-[#061a3a] rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/5">

      <div className="relative overflow-hidden">
        <Image src={room?.imageUrl || "/placeholder-room.jpg"} alt="room-images" width={450} height={450} className="w-full h-[220px] object-cover group-hover:scale-105 transition-transform duration-500"/>

        <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
          <span className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent font-semibold text-sm">
            ${room.price}/hr
          </span>
        </div>
      </div>

      <div className="p-5 space-y-4">
        
        <h2 className="text-lg font-semibold text-white group-hover:text-yellow-300 transition">
          {room.categoryName}
        </h2>

        <p className="text-white/70 text-sm line-clamp-2">
          {room.description}
        </p>

        <div className="flex justify-between text-sm text-white/70">
          <div className="flex items-center gap-2">
            <FaDatabase className="text-yellow-400" />
             <span>
      {room.SelectFloor === "1"
        ? "1st Floor"
        : room.SelectFloor === "2"
        ? "2nd Floor"
        : room.SelectFloor === "3"
        ? "3rd Floor"
        : `${room.SelectFloor}th Floor`}
    </span>
          </div>

          <div className="flex items-center gap-2">
            <GrGroup className="text-yellow-400" />
            <span>{room.capacity} People</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {room.facilities?.map((facility, index) => (
            <span
              key={index}
              className="text-xs px-3 py-1 rounded-full bg-[#082657] text-white/80 border border-white/10 hover:bg-[#0b2f6b] transition"
            >
              {facility}
            </span>
          ))}
        </div>
        <div className="mt-5">
          <Link href={`/rooms/${room._id}`}>
            <button className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black font-medium transition-transform duration-300 hover:scale-105 flex items-center gap-2 px-4 py-2 rounded-full hover:shadow-[0_0px_30px_rgba(245,158,11,0.35)] cursor-pointer">
              See More
              <LuCircleArrowOutUpRight className="transition-transform group-hover:translate-x-1" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Room;