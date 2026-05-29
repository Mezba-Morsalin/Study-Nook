import React from "react";
import Image from "next/image";
import Link from "next/link";
import { LuMoveRight } from "react-icons/lu";
import searchImg from "../../../../public/assets/searchRoom.svg";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { format } from "date-fns";
import { SlLocationPin } from "react-icons/sl";
import { MdDateRange } from "react-icons/md";
import { BsStopwatch } from "react-icons/bs";
import { AiFillDollarCircle } from "react-icons/ai";
import CancelBookings from "@/app/components/CancelBookings";

const MyBookingPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user?.id) {
    return (
      <div className="w-11/12 mx-auto py-20 text-center">
        <h2 className="text-white text-2xl">Please login first</h2>
      </div>
    );
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user.id}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) {
    return (
      <div className="w-11/12 mx-auto py-20 text-center">
        <h2 className="text-red-400 text-xl">Failed to load bookings</h2>
      </div>
    );
  }

  const data = await res.json();

  const hasBookings = data?.length > 0;

  if (!hasBookings) {
    return (
      <div className="w-11/12 lg:w-10/12 mx-auto py-16">
        <div className="space-y-4 text-center">
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold bg-linear-to-r from-white via-yellow-300 to-amber-500 bg-clip-text text-transparent">
            No bookings yet
          </h2>

          <p className="text-white/80 max-w-2xl mx-auto text-sm md:text-base">
            Explore quiet study rooms and modern learning environments designed
            to help students stay focused.
          </p>
        </div>

        <div className="mt-10">
          <Image
            src={searchImg}
            alt="no bookings"
            width={500}
            height={500}
            className="mx-auto w-[70%] md:w-[500px]"
          />
        </div>

        <div className="flex justify-center mt-6">
          <Link href="/rooms">
            <button className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black font-medium px-5 md:px-6 py-2 md:py-3 rounded-full flex items-center gap-2 hover:scale-105 transition text-sm md:text-base">
              Browse Rooms
              <LuMoveRight />
            </button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-11/12 mx-auto py-10 md:py-16">
      <div className="mb-8 md:mb-10 space-y-2 md:space-y-4">
        <h2 className="text-2xl md:text-3xl text-white">My Bookings</h2>
        <p className="text-white/80 text-sm md:text-base">
          Manage Your Room Bookings And Reservation
        </p>
      </div>

      <div className="flex flex-col gap-6 md:gap-10">
        {data.map((booking) => (
          <div
            key={booking._id}
            className="p-4 md:p-8 border border-[#335483] rounded-2xl text-white bg-[#061a3a] flex flex-col lg:flex-row lg:justify-between gap-6 lg:gap-0"
          >
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 w-full">
              
              <div className="flex justify-center lg:block">
                <Image
                  className="rounded-2xl w-full max-w-[220px] md:max-w-[250px]"
                  src={booking?.roomImage}
                  alt="room-image"
                  width={250}
                  height={250}
                />
              </div>

              <div className="flex flex-col justify-between gap-6 w-full">
                <div className="space-y-2 md:space-y-3">
                  <h3 className="text-base md:text-lg font-semibold">
                    {booking.roomName || "Room"}
                  </h3>

                  <div className="flex flex-wrap gap-2 md:gap-3">
                    <p className="text-white/80 text-xs md:text-sm flex items-center gap-2">
                      <SlLocationPin />
                      {booking.roomBuilding},
                    </p>
                    <p className="text-white/80 text-xs md:text-sm">
                      {booking.roomFloor === "1"
                        ? "1st Floor"
                        : booking.roomFloor === "2"
                        ? "2nd Floor"
                        : booking.roomFloor === "3"
                        ? "3rd Floor"
                        : `${booking.roomFloor}th Floor`}
                    </p>
                  </div>
                </div>

                <div className="flex flex-col md:flex-row flex-wrap gap-6 md:gap-10">
                  
                  <div className="flex flex-col gap-1 md:gap-2">
                    <p className="text-white/80 text-xs md:text-sm inline-flex items-center gap-2">
                      <MdDateRange className="text-[#FFC107]" size={18} />
                      {booking.bookingDate
                        ? format(new Date(booking.bookingDate), "dd MMMM yyyy")
                        : "No Date"}
                    </p>
                    <p className="text-sm md:text-base font-semibold">Date</p>
                  </div>

                  <div className="flex flex-col gap-1 md:gap-2">
                    <p className="text-white/80 text-xs md:text-sm inline-flex items-center gap-2">
                      <BsStopwatch className="text-[#FFC107]" size={18} />
                      {booking.startTime} - {booking.endTime}
                    </p>
                    <p className="text-sm md:text-base font-semibold">Time</p>
                  </div>

                  <div className="flex flex-col gap-1 md:gap-2">
                    <p className="text-white/80 text-xs md:text-sm inline-flex items-center gap-2">
                      <AiFillDollarCircle className="text-[#FFC107]" size={18} />
                      ${booking.totalPrice}
                    </p>
                    <p className="text-sm md:text-base font-semibold">
                      Total Price
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="self-end lg:self-auto">
              <CancelBookings booking={booking} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookingPage;