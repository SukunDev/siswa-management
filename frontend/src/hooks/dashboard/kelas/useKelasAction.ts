import { deleteKelas } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const useKelasAction = (kelas_id: string) => {
  const [showDeleteModal, setShowDeleteModal] = useState<boolean>(false);
  const router = useRouter();

  const deleteButton = () => {
    setShowDeleteModal((prev) => !prev);
  };

  const onCancelCallBack = () => {
    setShowDeleteModal(false);
  };

  const onDeleteCallBack = async () => {
    const { error } = await deleteKelas(kelas_id);
    if (error) {
      toast(error, { type: "error" });
      return;
    }
    toast("Success to delete kelas", { type: "success" });
    setShowDeleteModal(false);
    router.push(`/dashboard/kelas`);
  };

  return { showDeleteModal, deleteButton, onCancelCallBack, onDeleteCallBack };
};

export default useKelasAction;
