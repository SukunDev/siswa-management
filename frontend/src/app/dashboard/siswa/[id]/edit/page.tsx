import { getKelas, getSiswaById } from "@/app/actions";
import SiswaForm from "@/components/dashboard/siswa/siswaForm";
import { Kelas } from "@/types/kelas";
import { Siswa } from "@/types/siswa";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditSiswaPage({ params }: Props) {
  const { data: siswaData, error: siswaError } = await getSiswaById(params.id);
  const { data: kelasData, error: kelasError } = await getKelas();

  if (kelasError || siswaError) {
    notFound();
  }

  const siswa: Siswa = siswaData.siswa;
  const kelas: Kelas[] = kelasData.kelas;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold capitalize">Edit Siswa</h2>
      </div>
      <div className="mt-10 bg-white/5 border border-white/10 p-6">
        <SiswaForm
          kelas={kelas}
          data={{
            nama: siswa.nama,
            nis: siswa.nis,
            tempat_tanggal_lahir: siswa.tempat_tanggal_lahir,
            jenis_kelamin: siswa.jenis_kelamin,
            agama: siswa.agama,
            phone_number: siswa.phone_number,
            alamat: siswa.alamat,
            kelas_id: siswa.kelas ? siswa.kelas.id : null,
          }}
          siswa_id={params.id}
        />
      </div>
    </div>
  );
}
