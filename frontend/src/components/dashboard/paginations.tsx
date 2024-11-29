import usePaginations from "@/hooks/dashboard/usePagination";
import Link from "next/link";
import React from "react";
import { PiCaretLeft } from "react-icons/pi";

interface Props {
  metaPagination: {
    currentPage: number;
    totalPages: number;
    totalItems: number;
  };
  path: string;
}

export default function Paginations({ metaPagination, path }: Props) {
  const { currentPage, totalPages, pages } = usePaginations({ metaPagination });

  if (totalPages <= 1) return "";

  return (
    <div className="mt-16">
      <ul className="flex items-center justify-center text-gray-500">
        {currentPage > 1 ? (
          <li>
            <Link
              className="block p-2 mx-1 transition duration-300 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white rounded-xl active:scale-110"
              href={`${path}${
                Math.floor(currentPage - 1) === 1
                  ? "/"
                  : "/page/" + Math.floor(currentPage - 1)
              }`}
              aria-label="Previous Button"
            >
              <PiCaretLeft className="text-xl" />
            </Link>
          </li>
        ) : (
          ""
        )}
        {pages.length > 0
          ? pages.map((page) => (
              <li key={page}>
                <Link
                  className={`block px-3.5 py-1.5 mx-1 transition duration-300 border-2 ${
                    currentPage === page
                      ? "text-white bg-gray-600 border-gray-600"
                      : "border-gray-500 hover:bg-gray-600 hover:border-gray-600"
                  } hover:text-white rounded-xl active:scale-110`}
                  href={page === 1 ? `${path}` : `${path}/page/${page}`}
                >
                  {page}
                </Link>
              </li>
            ))
          : ""}
        {currentPage < totalPages ? (
          <li>
            <Link
              className="block p-2 mx-1 transition duration-300 border-2 border-gray-500 hover:bg-gray-600 hover:border-gray-600 hover:text-white rounded-xl active:scale-110"
              href={`${path}/page/${Math.floor(currentPage + 1)}`}
              aria-label="Next Button"
            >
              <PiCaretLeft className="text-xl rotate-180" />
            </Link>
          </li>
        ) : (
          ""
        )}
      </ul>
    </div>
  );
}
