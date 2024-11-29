"use client";

import useScroll from "@/hooks/useScroll";
import React from "react";

export default function HomeNavbar() {
  const { scrollY } = useScroll();
  return (
    <nav
      className={`fixed inset-x-0 top-0 z-10 ${
        scrollY > 50 ? "bg-[#140648]" : ""
      } transition duration-300`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center p-4 sm:p-6">
          <h1 className="text-xl sm:text-2xl font-bold">Siswa Management</h1>
          <div className="flex flex-row gap-2 sm:gap-4 font-semibold">
            <a
              href="/signin"
              className="px-3 sm:px-4 py-2 rounded-md text-xs sm:text-sm text-white bg-blue-700 hover:-translate-y-1 transition duration-300 block capitalize"
            >
              sign in
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
