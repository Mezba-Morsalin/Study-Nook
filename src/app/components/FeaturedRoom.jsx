import Image from 'next/image';
import React from 'react';
import { GrGroup } from 'react-icons/gr';
import { LuLayers3 } from 'react-icons/lu';

const FeaturedRoom = ({room}) => {
    return (
        <div className="group bg-[#071228] rounded-2xl overflow-hidden border border-[#335483] hover:shadow-[0_0_40px_rgba(251,191,36,0.18)] transition-all duration-300">
        
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
                    <LuLayers3 className="text-yellow-400" />
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
                  {room.facilities.map((facility, index) => (
                    <span
                      key={index}
                      className="text-xs px-3 py-1 rounded-full bg-[#082657] text-white/80 border border-white/10 hover:bg-[#0b2f6b] transition"
                    >
                      {facility}
                    </span>
                  ))}
                </div>
              </div>
            </div>
    );
};

export default FeaturedRoom;