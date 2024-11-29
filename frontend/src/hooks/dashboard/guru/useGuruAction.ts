import { deleteGuru } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const useGuruAction = (guru_id: string) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const router = useRouter();

  const deleteButton = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const onCancelCallBack = () => {
    setShowDeleteModal(false);
  };

  const onDeleteCallBack = async () => {
    const { error } = await deleteGuru(guru_id);
    if (error) {
      toast(error, { type: "error" });
      return;
    }
    toast("Success to delete guru", { type: "success" });
    setShowDeleteModal(false);
    router.push(`/dashboard/guru`);
  };

  return { showDeleteModal, deleteButton, onCancelCallBack, onDeleteCallBack };
};

export default useGuruAction;
