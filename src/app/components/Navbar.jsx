"use client";

import React, { useState } from "react";
import navImg from "../../../public/assets/navbar.png";
import Image from "next/image";
import NavLink from "./shared/NavLink";
import Link from "next/link";
import { Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";
import { SyncLoader } from "react-spinners";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const { data: session, isPending } = authClient.useSession();
  const user = session?.user ?? null;

  const [open, setOpen] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleSignOut = async () => {
    await authClient.signOut();
    setDropdown(false);
    setOpen(false);
  };

  const authLinks = (
    <>
      <li className="text-white/70"><NavLink href="/">Home</NavLink></li>
      <li className="text-white/70"><NavLink href="/rooms">Rooms</NavLink></li>
      <li className="text-white/70"><NavLink href="/add-room">Add Rooms</NavLink></li>
      <li className="text-white/70"><NavLink href="/my-bookings">My Bookings</NavLink></li>
    </>
  );

  const guestLinks = (
    <>
      <li className="text-white/70"><NavLink href="/">Home</NavLink></li>
      <li className="text-white/70"><NavLink href="/rooms">Rooms</NavLink></li>
    </>
  );

  const linksToRender = user ? authLinks : guestLinks;

  return (
    <div className="bg-[#071228]/80 border-b border-white/10 relative">

      <div className="hidden lg:flex w-11/12 lg:w-10/12 mx-auto py-5 justify-between items-center">

        <Image src={navImg} alt="logo" width={180} height={180} />

        <ul className="flex items-center gap-5">
          {linksToRender}
        </ul>

        <div className="flex items-center gap-6">
          {isPending ? (
            <SyncLoader color="#FFD700" />
          ) : user ? (
            <div className="relative">

              <button
                onClick={() => setDropdown(!dropdown)}
                className="flex items-center gap-3 bg-[#0b1f3a] px-3 py-2 rounded-full border border-white/10">
                <Image src={user?.image || "/assets/default.png"} alt="user" width={40} height={40} className="rounded-full"/>

                <div className="text-left">
                  <p className="text-white text-sm font-semibold leading-4">
                    {user?.name}
                  </p>
                  <p className="text-white/60 text-xs">{user?.email}</p>
                </div>

                <FiChevronDown
                  className={`text-white transition-transform ${
                    dropdown ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {dropdown && (
                  <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} className="absolute right-0 mt-3 w-48 bg-[#071228] border border-white/10 rounded-xl z-50">
                    <Link href="/profile" onClick={() => setDropdown(false)} className="block px-4 py-3 text-white/80 hover:bg-white/10">
                      Profile
                    </Link>
                    <Link href="/my-bookings" onClick={() => setDropdown(false)} className="block px-4 py-3 text-white/80 hover:bg-white/10">
                      My Bookings
                    </Link>

                    <button onClick={handleSignOut} className="w-full text-left px-4 py-3 text-red-400 hover:bg-white/10">
                      Sign Out
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <div className="flex gap-4">
              <Link href="/login">
                <Button className="bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black transition-transform duration-300 ease-out hover:scale-105 flex items-center group text-base p-5 hover:shadow-[0_0px_30px_rgba(245,158,11,0.35)]">
                  Login
                </Button>
              </Link>

              <Link href="/register">
                <Button className="border border-white/80 text-white/80 bg-transparent transition-transform duration-300 ease-out hover:scale-105 text-base group p-5 hover:shadow-[0_0px_20px_rgba(255,255,255,0.35)]">
                  Register
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="lg:hidden w-11/12 mx-auto py-5 flex justify-between items-center">

        <Image src={navImg} alt="logo" width={160} height={160} />

        <button onClick={() => setOpen(true)} className="text-white text-2xl">
          <FiMenu />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setOpen(false)} className="fixed inset-0 bg-black/60 z-40"/>

            <motion.div initial={{ x: "-100%" }} animate={{ x: 0 }} exit={{ x: "-100%" }} transition={{ duration: 0.25 }} className="fixed top-0 left-0 h-full w-72 bg-[#071228] border-r border-white/10 z-50">
              <div className="flex justify-between items-center p-5 border-b border-white/10">
                <h2 className="text-white font-semibold">Menu</h2>
                <button onClick={() => setOpen(false)} className="text-white text-xl">
                  <FiX />
                </button>
              </div>

              <ul className="flex flex-col gap-4 p-5">
                {linksToRender}
              </ul>

              <div className="p-5 border-t border-white/10">
                {user ? (
                  <div className="space-y-3">
                    <p className="text-white font-semibold">{user?.name}</p>
                    <p className="text-white/60 text-sm">{user?.email}</p>

                    <Link href="/profile" className="block text-yellow-400">
                      Profile
                    </Link>
                    <Link href="/my-bookings" className="block text-yellow-400">
                      Ny Bookings
                    </Link>

                    <button onClick={handleSignOut} className="px-4 py-3 text-red-400 cursor-pointer hover:text-red-500">
                      Sign Out
                    </button>
                  </div>
                ) : (
                  <div className="flex flex-col gap-3">
                    <Link href="/login">
                      <Button className="w-full bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] text-black">
                        Login
                      </Button>
                    </Link>

                    <Link href="/register">
                      <Button className="w-full border border-white/80 text-white/80">
                        Register
                      </Button>
                    </Link>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Navbar;