import useProfile from "@/hooks/dashboard/useProfile";
import React from "react";
import { MdOutlineLogin } from "react-icons/md";

interface Props {
  className: string;
}

export default function Profile({ className }: Props) {
  const { signOutButton, data } = useProfile();

  return (
    <>
      <div className={className}>
        <div className="flex flex-col bg-[#23242e] border border-white/10 rounded-md">
          <div className="text-sm border-b border-white/10 py-4 pl-4 pr-32 capitalize">
            <p>{data.user.username}</p>
          </div>
          <button
            onClick={signOutButton}
            className="flex justify-between py-2 rounded-md px-4 capitalize text-sm hover:bg-white/5 transition duration-300 whitespace-nowrap"
          >
            sign out
            <MdOutlineLogin className="inline size-5 items-end text-gray-400" />
          </button>
        </div>
      </div>
    </>
  );
}
