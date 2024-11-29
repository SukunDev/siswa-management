"use client";

import { Kelas } from "@/types/kelas";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface Props {
  kelas: Kelas[];
  path: string;
}

export default function KelasFilterButton({ kelas, path }: Props) {
  const pathname = usePathname();

  return (
    <div className="flex flex-row items-center gap-1">
      <Link
        href={path}
        className={`px-5 py-1.5 rounded-xl ${
          pathname === path
            ? "bg-white/10"
            : pathname.startsWith(`${path}/page`)
            ? "bg-white/10"
            : "bg-black hover:bg-white/10"
        } text-xs border border-white/10 transition duration-300`}
      >
        All
      </Link>
      {kelas.map((item, idx) => (
        <Link
          key={idx}
          href={`${path}/kelas/${item.nama}`}
          className={`px-5 py-1.5 rounded-xl ${
            pathname === `${path}/kelas/${item.nama}`
              ? "bg-white/10"
              : pathname.startsWith(`${path}/kelas/${item.nama}/page`)
              ? "bg-white/10"
              : "bg-black hover:bg-white/10"
          } text-xs border border-white/10 transition duration-300 uppercase`}
        >
          {item.nama}
        </Link>
      ))}
    </div>
  );
}
