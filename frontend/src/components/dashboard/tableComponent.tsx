"use client";

import React from "react";
import { FaInbox } from "react-icons/fa";
import Paginations from "./paginations";
import { useRouter } from "next/navigation";

interface Props {
  tableName: string;
  head: string[];
  body: (string | null)[][];
  currentPage: number;
  totalPages: number;
  totalItems: number;
  pathPagenation: string;
  path: string;
}

export default function TableComponent({
  tableName,
  head,
  body,
  currentPage,
  totalPages,
  totalItems,
  path,
  pathPagenation,
}: Props) {
  const router = useRouter();

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left bg-white/5 border border-white/10 rounded-md">
        {head.length > 0 ? (
          <thead className="text-xs uppercase border-b border-white/10">
            <tr>
              {head.map((item, idx) => (
                <th key={idx} scope="col" className="px-6 py-3">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
        ) : (
          ""
        )}
        <tbody>
          {body.length > 0 ? (
            body.map((item, idx) => (
              <tr
                key={idx}
                onClick={() => router.push(`${path}/${item[0]}`)}
                className="border-b border-white/10 transition duration-300 hover:bg-white/5 cursor-pointer"
              >
                {item.map((val, idx) => (
                  <td key={idx} className="px-6 py-4 uppercase">
                    {val}
                  </td>
                ))}
              </tr>
            ))
          ) : (
            <tr className="border-b border-white/10">
              <td colSpan={head.length} className="px-6 py-4 text-center">
                <div className="flex flex-col items-center">
                  <FaInbox className="size-14 text-white/10" />
                  <p className="text-white/15 capitalize font-semibold">
                    no {tableName} yet
                  </p>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <Paginations
        metaPagination={{
          currentPage: currentPage,
          totalPages: totalPages,
          totalItems: totalItems,
        }}
        path={pathPagenation}
      />
    </div>
  );
}
