import { getKelas } from "@/app/actions";
import GuruForm from "@/components/dashboard/guru/guruForm";
import { Kelas } from "@/types/kelas";
import { notFound } from "next/navigation";
import React from "react";

export default async function InsertGuruPage() {
  const { data: kelasData, error: kelasError } = await getKelas();
  if (kelasError) {
    notFound();
  }
  const kelas: Kelas[] = kelasData.kelas;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold capitalize">Insert Guru</h2>
      </div>
      <div className="mt-10 bg-white/5 border border-white/10 p-6">
        <GuruForm
          kelas={kelas}
          data={{
            nama: "",
            nig: "",
            tempat_tanggal_lahir: "",
            jenis_kelamin: "laki laki",
            agama: "",
            phone_number: "",
            alamat: "",
            kelas_id: null,
          }}
          guru_id={null}
        />
      </div>
    </div>
  );
}
