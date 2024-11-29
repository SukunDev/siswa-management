import useDeleteConfirmationModal from "@/hooks/dashboard/useDeleteConfirmationModal";
import React from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface Props {
  onCancel: () => void;
  onDelete: () => void;
}

export default function DeleteConfirmationModal({ onCancel, onDelete }: Props) {
  const { cancelButton, deleteButton } = useDeleteConfirmationModal(
    onCancel,
    onDelete
  );
  return (
    <>
      <div className="fixed inset-0 bg-black/50 z-[998]"></div>
      <div className="fixed inset-0 max-w-xl h-fit m-auto z-[999]">
        <div className="bg-[#171823] border border-white/10 p-6 rounded-xl">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row justify-center">
              <IoIosCloseCircleOutline className="size-24 text-red-600" />
            </div>
            <p className="text-2xl font-semibold text-center">Are you sure ?</p>
            <div className="flex flex-row items-center justify-center gap-2">
              <button
                onClick={cancelButton}
                className="px-6 py-2 rounded-md border border-gray-500 bg-gray-500 text-white hover:bg-gray-400 transition duration-300"
              >
                Cancel
              </button>
              <button
                onClick={deleteButton}
                className="px-6 py-2 rounded-md border border-black bg-black text-white hover:bg-black/50 transition duration-300"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
