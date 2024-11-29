import { createKelas, updateKelas } from "@/app/actions";
import { KelasFormData } from "@/types/kelasFormData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const useKelasForm = (data: KelasFormData, kelasId: string | null) => {
  const [formData, setFormData] = useState<KelasFormData>({
    kelas_name: data.kelas_name,
  });
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const router = useRouter();

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSelectInput = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    setFormData((prevState) => ({
      ...prevState,
      [fieldName]: fieldValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (kelasId) {
      const { error } = await updateKelas(formData, kelasId);
      if (error) {
        setIsLoading(false);
        toast(error, { type: "error" });
        return;
      }
      toast("Success to update kelas", { type: "success" });
      router.push(`/dashboard/kelas/${kelasId}`);
    } else {
      const { error } = await createKelas(formData);
      if (error) {
        setIsLoading(false);
        toast(error, { type: "error" });
        return;
      }
      toast("Success to insert kelas", { type: "success" });
      router.push(`/dashboard/kelas`);
    }
  };

  return {
    formData,
    isLoading,
    handleInput,
    handleSelectInput,
    handleSubmit,
  };
};

export default useKelasForm;
