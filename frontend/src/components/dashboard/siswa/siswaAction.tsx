"use client";

import Link from "next/link";
import React from "react";
import { FaEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import DeleteConfirmationModal from "../deleteConfirmationModal";
import useSiswaAction from "@/hooks/dashboard/siswa/useSiswaAction";

interface Props {
  siswa_id: string;
}

export default function SiswaAction({ siswa_id }: Props) {
  const { showDeleteModal, deleteButton, onCancelCallBack, onDeleteCallBack } =
    useSiswaAction(siswa_id);
  return (
    <>
      <div className="flex flex-row items-center gap-2 flex-wrap">
        <Link
          href={`/dashboard/siswa/${siswa_id}/edit`}
          className="px-6 py-2 rounded-md border border-blue-500 bg-blue-500 text-white hover:bg-blue-400 transition duration-300"
        >
          <FaEdit className="inline mr-1 -mt-1" />
          Edit
        </Link>
        <button
          onClick={deleteButton}
          className="px-6 py-2 rounded-md border border-red-500 bg-red-500 text-white hover:bg-red-400 transition duration-300"
        >
          <FaRegTrashCan className="inline mr-1 -mt-1" />
          Delete
        </button>
      </div>
      {showDeleteModal ? (
        <DeleteConfirmationModal
          onCancel={onCancelCallBack}
          onDelete={onDeleteCallBack}
        />
      ) : (
        ""
      )}
    </>
  );
}
