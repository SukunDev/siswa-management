import { createSiswa, updateSiswa } from "@/app/actions";
import { SiswaFormData } from "@/types/siswaFormData";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const useSiswaForm = (data: SiswaFormData, siswaId: string | null) => {
  const [formData, setFormData] = useState<SiswaFormData>({
    nama: data.nama,
    nis: data.nis,
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
    if (siswaId) {
      const { error } = await updateSiswa(formData, siswaId);
      if (error) {
        setIsLoading(false);
        toast(error, { type: "error" });
        return;
      }
      toast("Success to update siswa", { type: "success" });
      router.push(`/dashboard/siswa/${siswaId}`);
    } else {
      const { error } = await createSiswa(formData);
      if (error) {
        setIsLoading(false);
        toast(error, { type: "error" });
        return;
      }
      toast("Success to insert siswa", { type: "success" });
      router.push(`/dashboard/siswa`);
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

export default useSiswaForm;
