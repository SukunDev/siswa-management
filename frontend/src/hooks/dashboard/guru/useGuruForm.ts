import { createGuru, updateGuru } from "@/app/actions";
import { GuruFormData } from "@/types/guruFormData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const useGuruForm = (data: GuruFormData, guruId: string | null) => {
  const [formData, setFormData] = useState<GuruFormData>({
    nama: data.nama,
    nig: data.nig,
    tempat_tanggal_lahir: data.tempat_tanggal_lahir,
    jenis_kelamin: data.jenis_kelamin,
    agama: data.agama,
    phone_number: data.phone_number,
    alamat: data.alamat,
    kelas_id: data.kelas_id,
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
    if (guruId) {
      const { error } = await updateGuru(formData, guruId);
      if (error) {
        setIsLoading(false);
        toast(error, { type: "error" });
        return;
      }
      toast("Success to update guru", { type: "success" });
      router.push(`/dashboard/guru/${guruId}`);
    } else {
      const { error } = await createGuru(formData);
      if (error) {
        setIsLoading(false);
        toast(error, { type: "error" });
        return;
      }
      toast("Success to insert guru", { type: "success" });
      router.push(`/dashboard/guru`);
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

export default useGuruForm;
