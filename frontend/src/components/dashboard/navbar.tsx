"use client";

import React from "react";
import { IoMdMenu } from "react-icons/io";
import Profile from "./profile";
import useNavbar from "@/hooks/dashboard/useNavbar";

export default function Navbar() {
  const { menuButton, profileButton, showProfileButton } = useNavbar();
  return (
    <nav className="flex flex-row justify-between items-center sticky top-0 bg-[#171823] border border-white/10 px-4 py-2 z-50 md:hidden">
      <button onClick={menuButton}>
        <IoMdMenu className="size-6 text-gray-400" />
      </button>
      <h2 className="font-bold">Siswa Management</h2>
      <div className="relative">
        <button
          onClick={profileButton}
          type="button"
          className="text-muted flex h-11 shrink-0 items-center gap-1 rounded-full p-1.5 sm:h-9"
        >
          <svg
            className="block size-6 rounded-full"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M0 12C0 5.37258 5.37258 0 12 0C18.6274 0 24 5.37258 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12Z"
              opacity="0.2"
            ></path>
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.66965 15.5375C3.86376 17.3086 2 20.4367 2 24C2 29.5228 6.47715 34 12 34C17.5228 34 22 29.5228 22 24C22 20.4367 20.1362 17.3086 17.3304 15.5375C16.0464 17.0444 14.1348 18 12 18C9.8652 18 7.95359 17.0444 6.66965 15.5375Z"
            ></path>
            <circle cx="12" cy="11" r="5"></circle>
          </svg>
        </button>
      </div>
      {showProfileButton ? (
        <Profile className="absolute top-16 right-4 z-10" />
      ) : (
        ""
      )}
    </nav>
  );
}
