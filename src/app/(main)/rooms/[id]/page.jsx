import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { MdLocationOn } from 'react-icons/md';
import { RiArrowLeftLongFill } from 'react-icons/ri';
import { FiUsers } from 'react-icons/fi';
import { LuLayers3 } from 'react-icons/lu';
import { TbCalendarStats } from 'react-icons/tb';
import BookRoom from '@/app/components/BookRoom';

const RoomDetailsPage = async ({ params }) => {
  const { id } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/rooms/${id}`,
    {
      cache: 'no-store',
    }
  );

  const room = await res.json();

  return (
    <div className='w-11/12 lg:w-10/12 mx-auto py-14'>
      
      <div className='mb-10'>
        <Link href='/rooms'>
          <Button className=' bg-[#071228] border border-[#1f3b63] text-white hover:bg-[#0c1d3a] transition-all duration-300 rounded-full px-5'>
            <RiArrowLeftLongFill className='text-xl' />
            Back
          </Button>
        </Link>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

        <div className='lg:col-span-2 space-y-7'>
          <div className='overflow-hidden rounded-3xl border border-[#1d3557]'>
            <Image className='w-full h-[260px] md:h-[450px] lg:h-[600px] object-cover hover:scale-105 transition duration-500' src={room.imageUrl} alt='room-image' width={1200} height={900}/>
          </div>

          <div className='flex flex-col lg:flex-row justify-between lg:items-center gap-4'>

            <div>
              <h1 className='text-3xl md:text-5xl font-bold text-white'>
                {room.categoryName}
              </h1>
            </div>

            <div className='flex items-center gap-3 bg-[#0c1b33] border border-[#26456e] text-white/80 px-4 py-2 rounded-full'>
                <MdLocationOn className='text-lg' />
                <p>{room.buildingName}</p>
              </div>
          </div>

          <p className='text-white/80 leading-8 text-[17px] max-w-4xl'>
            {room.description}
          </p>

          <div className='space-y-5'>

            <h3 className='text-2xl font-semibold text-white'>
              Facilities
            </h3>

            <div className='flex flex-wrap gap-3'>
              {room.facilities.map((facility, index) => (
                <button key={index} className=' bg-[#082657] border border-[#26456e] text-white/80 px-4 py-2 rounded-full text-sm'
                >
                  {facility}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className='space-y-6'>

          <div className=' bg-[#0c1b33] border border-[#26456e] rounded-3xl p-7 sticky top-24 '>

            <div className='flex items-start justify-between mb-8'>
              <div>
                <h2 className='text-5xl font-bold bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent'>
                  ${room.price}
                </h2>
              </div>

              <p className='text-white/60 mt-2'>per hour</p>
            </div>

            <div className='space-y-5 text-white/80 mb-8'>

              <div className='flex items-center gap-3'>
                <LuLayers3 className='text-lg' />
                <p>{room.SelectFloor === "1"
                ? "1st Floor"
                : room.SelectFloor === "2"
                ? "2nd Floor"
                : room.SelectFloor === "3"
                ? "3rd Floor"
                : `${room.SelectFloor}th Floor`}</p>
              </div>

              <div className='flex items-center gap-3'>
                <FiUsers className='text-lg' />
                <p>Up to {room.capacity} people</p>
              </div>
            </div>
            <BookRoom room = {room}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailsPage;