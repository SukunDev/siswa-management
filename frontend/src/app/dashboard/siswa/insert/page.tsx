import { getKelas } from "@/app/actions";
import SiswaForm from "@/components/dashboard/siswa/siswaForm";
import { Kelas } from "@/types/kelas";
import { notFound } from "next/navigation";
import React from "react";

export default async function InsertSiswaPage() {
  const { data: kelasData, error: kelasError } = await getKelas();
  if (kelasError) {
    notFound();
  }
  const kelas: Kelas[] = kelasData.kelas;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold capitalize">Insert Siswa</h2>
      </div>
      <div className="mt-10 bg-white/5 border border-white/10 p-6">
        <SiswaForm
          kelas={kelas}
          data={{
            nama: "",
            nis: "",
            tempat_tanggal_lahir: "",
            jenis_kelamin: "laki laki",
            agama: "",
            phone_number: "",
            alamat: "",
            kelas_id: null,
          }}
          siswa_id={null}
        />
      </div>
    </div>
  );
}
