import { auth } from "@/lib/auth";
import { format } from "date-fns";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";

import {
  FaMapMarkerAlt,
  FaCamera,
  FaPen,
  FaCalendarAlt,
  FaDoorOpen,
  FaArrowUp,
  FaDollarSign,
} from "react-icons/fa";

export const metadata = {
    title : "StudyNook - Profile",
    description : "Profile"
}

const ProfilePage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user?.id) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
       <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-white via-yellow-300 to-amber-500 bg-clip-text text-transparent">
         User not found
       </h2>
      </div>
    );
  }

  let userData = [];

  const {token} = await auth.api.getToken({
      headers : await headers()
    })
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user.id}`,
  {
    method: "GET",
    cache: "no-store",
    headers: {
      authorization: `Bearer ${token}`,
    },
  }
);

    if (!res.ok) {
      throw new Error("Failed to fetch bookings");
    }

    userData = await res.json();
  } catch (error) {
    console.error(error);

    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-white via-yellow-300 to-amber-500 bg-clip-text text-transparent">Error 505 Failed to load profile data.</h2>
      </div>
    );
  }

  if (!userData?.length) {
    return (
      <div className="min-h-[60vh] flex flex-col justify-center items-center">
        <FaCalendarAlt className="text-5xl text-white mb-4" />
        <h2 className="text-3xl md:text-5xl font-bold bg-linear-to-r from-white via-yellow-300 to-amber-500 bg-clip-text text-transparent">No Bookings Found</h2>
        <p className="text-white/80 mt-2">
          You have not made any room bookings yet.
        </p>
        <div className="relative w-24 h-24 mx-auto mt-8">
  <Image
    src={user?.userImage || "/default-user.png"}
    alt={user?.userName || "User"}
    fill
    className="rounded-full object-cover border-4 border-cyan-100"
  />
</div>
      </div>
    );
  }

  const firstBooking = userData[0];

  const totalSpent = userData.reduce(
    (sum, booking) => sum + Number(booking?.totalPrice || 0),
    0
  );

  const uniqueRooms = [
    ...new Set(userData.map((item) => item.roomId)),
  ].length;

  const upcomingBookings = userData.filter(
    (booking) => new Date(booking.bookingDate) > new Date()
  ).length;

  const memberSince = user?.createdAt
    ? new Date(user.createdAt).toLocaleDateString("en-US", {
        month: "short",
        year: "numeric",
      })
    : "N/A";

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white">
          My Profile
        </h1>

        <p className="text-white/80 mt-2">
          Manage your account and booking statistics
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        <div className="bg-[#061a3a] border border-[#335483] rounded-2xl shadow-sm p-8">
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32">
              <Image
                src={
                  firstBooking?.userImage ||
                  "/default-user.png"
                }
                alt={firstBooking?.userName || "User"}
                fill
                className="rounded-full object-cover border-4 border-cyan-100"
              />

              <button className="absolute bottom-1 right-1 bg-[#061a3a] border border-[#335483] text-white p-2 rounded-full shadow-lg">
                <FaCamera size={12} />
              </button>
            </div>

            <h2 className="text-2xl font-bold mt-5 text-white">
              {firstBooking?.userName}
            </h2>

            <div className="flex items-center gap-2 text-white/80 mt-2">
              <FaMapMarkerAlt />
              <span className="">Bangladesh</span>
            </div>
          </div>

          <div className="border-t my-6"></div>

          <div className="space-y-4 text-sm">
            <div className="flex justify-between">
              <span className="text-white/80">
                Member Since
              </span>

              <span className="font-semibold text-white">
                {memberSince}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/80">
                Total Bookings
              </span>

              <span className="font-semibold text-white">
                {userData.length}
              </span>
            </div>

            <div className="flex justify-between">
              <span className="text-white/80">
                Rooms Reserved
              </span>

              <span className="font-semibold text-white">
                {uniqueRooms}
              </span>
            </div>
          </div>

          <button className="w-full mt-8 border text-black bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300]  duration-300 ease-out hover:scale-105  group text-base p-5 hover:shadow-[0_0px_30px_rgba(245,158,11,0.35)]' py-3 rounded-xl flex items-center justify-center gap-2 transition cursor-pointer">
            <FaPen />
            Edit Profile
          </button>
        </div>

        <div className="lg:col-span-2">
          <h3 className="text-xl text-white font-semibold mb-5">
            Booking Statistics
          </h3>

          <div className="grid sm:grid-cols-2 gap-5">

            <div className="bg-[#061a3a] border border-[#335483] rounded-2xl p-6 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-white/80 text-sm">
                  Total Bookings
                </p>

                <h3 className="text-3xl text-white font-bold mt-2">
                  {userData.length}
                </h3>
              </div>

              <div className="bg-[#071228] border border-[#335483] p-4 rounded-full">
                <FaCalendarAlt
                  size={22}
                  className="text-[#FFC107]"
                />
              </div>
            </div>


            <div className="bg-[#061a3a] border border-[#335483] rounded-2xl p-6 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-white/80 text-sm">
                  Rooms Reserved
                </p>

                <h3 className="text-3xl text-white font-bold mt-2">
                  {uniqueRooms}
                </h3>
              </div>

              <div className="bg-[#071228] border border-[#335483] p-4 rounded-full">
                <FaDoorOpen
                  size={22}
                  className="text-[#FFC107]"
                />
              </div>
            </div>


            <div className="bg-[#061a3a] border border-[#335483] rounded-2xl p-6 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-white/80 text-sm">
                  Upcoming Bookings
                </p>

                <h3 className="text-3xl text-white font-bold mt-2">
                  {upcomingBookings}
                </h3>
              </div>

              <div className="bg-[#071228] border border-[#335483] p-4 rounded-full">
                <FaArrowUp
                  size={22}
                  className="text-[#FFC107]"
                />
              </div>
            </div>


            <div className="bg-[#061a3a] border border-[#335483] rounded-2xl p-6 shadow-sm flex justify-between items-center">
              <div>
                <p className="text-white/80 text-sm">
                  Total Spent
                </p>

                <h3 className="text-3xl text-white font-bold mt-2">
                  $
                  {new Intl.NumberFormat("en-US").format(
                    totalSpent
                  )}
                </h3>
              </div>

              <div className="bg-[#071228] border border-[#335483] p-4 rounded-full">
                <FaDollarSign
                  size={22}
                  className="text-[#FFC107]"
                />
              </div>
            </div>
          </div>


          <div className="bg-[#061a3a] border border-[#335483] rounded-2xl shadow-sm mt-8 p-6">
            <h3 className="text-xl text-white font-semibold mb-5">
              Recent Bookings
            </h3>

            <div className="space-y-4">
              {userData.slice(0, 5).map((booking) => (
                <div
                  key={booking._id}
                  className="flex items-center bg-[#071228] gap-4 border border-[#335483] rounded-xl p-3"
                >
                  <Image
                    src={booking.roomImage}
                    alt={booking.roomName}
                    width={80}
                    height={80}
                    className="rounded-lg object-cover"
                  />

                  <div className="flex-1">
                    <h4 className="text-white font-semibold">
                      {booking.roomName}
                    </h4>

                    <p className="text-sm text-white/80">
                      {booking.roomBuilding}
                    </p>

                    <p className="text-sm text-white/80">
                      {booking.bookingDate ? format(new Date(booking.bookingDate), "dd MMMM yyyy") : "No Date"}
                    </p>
                  </div>

                  <div className="font-bold bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] bg-clip-text text-transparent">
                    ${booking.totalPrice}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;