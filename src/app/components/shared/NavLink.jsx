"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children }) => {
  const pathName = usePathname();
  const isActive = href === pathName;

  return (
    <Link
      href={href}
      className="relative px-6 py-2 text-white/80 transition-all duration-300 hover:text-white/80 group"
    >
      {children}

      {/* gradient underline */}
      <span
        className={`absolute left-0 -bottom-1 h-[3px] w-full rounded-full bg-linear-to-r from-[#FFD700] via-[#FFC107] to-[#FFB300] transition-all duration-300
        ${isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"}`}
      />
    </Link>
  );
};

export default NavLink;