"use client";

import useSidebar from "@/hooks/dashboard/useSidebar";
import Link from "next/link";
import React from "react";

import Profile from "./profile";
import { FaHashtag } from "react-icons/fa";

const SidebarComponent = () => {
  const { pathname, data, showProfileButton, hideMenu, setShowProfileButton } =
    useSidebar();

  return (
    <>
      {!data.sidebar ? (
        <div
          onClick={hideMenu}
          className="fixed inset-0 blur z-10 bg-black bg-opacity-50 translate-x-0 md:-translate-x-full"
        ></div>
      ) : (
        ""
      )}
      <aside
        className={`w-64 bg-[#23242e] md:bg-white/5 flex flex-col border-r border-white/10 font-poppins fixed md:relative inset-y-0  ${
          data.sidebar
            ? "-translate-x-full md:translate-x-0"
            : "translate-x-0 md:translate-x-0"
        }`}
      >
        <div className="flex flex-row px-3 pt-3 pb-2 items-center border-b border-white/5">
          <button className="text-strong flex items-center justify-between gap-1.5 rounded-lg px-1.5 py-2.5 sm:py-1.5 min-w-0 flex-1">
            <div className="flex min-w-0 items-center gap-4">
              <div className="flex size-6 items-center justify-center rounded-md text-[#fff] bg-purple-500 shrink-0">
                {data.user.username[0].toUpperCase()}
              </div>
              <span className="min-w-0 truncate text-base font-medium sm:text-sm capitalize">
                {data.user.username}
              </span>
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              fill="currentColor"
              viewBox="0 0 256 256"
              className="size-4 shrink-0 aria-expanded:rotate-180 lg:hidden"
            >
              <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
            </svg>
          </button>
          <div className="relative hidden lg:block">
            <button
              onClick={() => setShowProfileButton(!showProfileButton)}
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
            {showProfileButton ? (
              <Profile className="absolute top-11 -right-3 z-10" />
            ) : (
              ""
            )}
          </div>
        </div>
        <div className="flex flex-col px-3 py-4 flex-grow h-full">
          <div className="flex flex-col">
            <Link
              className="block py-1 pr-2 pl-1.5 text-sm hover:bg-white/5 rounded-md transition duration-300 text-white"
              href={"/dashboard/siswa"}
            >
              <FaHashtag className="size-5 inline mr-2 mb-0.5 text-gray-400" />
              Siswa
            </Link>
            <ul className="text-sm capitalize mb-2 ml-6 text-gray-400 font-light">
              <li>
                <Link
                  className={`block px-2 py-1 rounded-md ${
                    pathname === "/dashboard/siswa"
                      ? "bg-blue-600  text-white"
                      : "hover:bg-white/5 duration-300"
                  }`}
                  href={"/dashboard/siswa"}
                >
                  Overviews
                </Link>
              </li>
              <li>
                <Link
                  className={`block px-2 py-1 rounded-md ${
                    pathname === "/dashboard/siswa/insert"
                      ? "bg-blue-600  text-white"
                      : "hover:bg-white/5 duration-300"
                  }`}
                  href={"/dashboard/siswa/insert"}
                >
                  Insert
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Link
              className="block py-1 pr-2 pl-1.5 text-sm hover:bg-white/5 rounded-md transition duration-300 text-white"
              href={"/dashboard/guru"}
            >
              <FaHashtag className="size-5 inline mr-2 mb-0.5 text-gray-400" />
              Guru
            </Link>
            <ul className="text-sm capitalize mb-2 ml-6 text-gray-400 font-light">
              <li>
                <Link
                  className={`block px-2 py-1 rounded-md ${
                    pathname === "/dashboard/guru"
                      ? "bg-blue-600  text-white"
                      : "hover:bg-white/5 duration-300"
                  }`}
                  href={"/dashboard/guru"}
                >
                  Overviews
                </Link>
              </li>
              <li>
                <Link
                  className={`block px-2 py-1 rounded-md ${
                    pathname === "/dashboard/guru/insert"
                      ? "bg-blue-600  text-white"
                      : "hover:bg-white/5 duration-300"
                  }`}
                  href={"/dashboard/guru/insert"}
                >
                  Insert
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col">
            <Link
              className="block py-1 pr-2 pl-1.5 text-sm hover:bg-white/5 rounded-md transition duration-300 text-white"
              href={"/dashboard/kelas"}
            >
              <FaHashtag className="size-5 inline mr-2 mb-0.5 text-gray-400" />
              Kelas
            </Link>
            <ul className="text-sm capitalize mb-2 ml-6 text-gray-400 font-light">
              <li>
                <Link
                  className={`block px-2 py-1 rounded-md ${
                    pathname === "/dashboard/kelas"
                      ? "bg-blue-600  text-white"
                      : "hover:bg-white/5 duration-300"
                  }`}
                  href={"/dashboard/kelas"}
                >
                  Overviews
                </Link>
              </li>
              <li>
                <Link
                  className={`block px-2 py-1 rounded-md ${
                    pathname === "/dashboard/kelas/insert"
                      ? "bg-blue-600  text-white"
                      : "hover:bg-white/5 duration-300"
                  }`}
                  href={"/dashboard/kelas/insert"}
                >
                  Insert
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SidebarComponent;
