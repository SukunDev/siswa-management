import { getKelas, getGuruById } from "@/app/actions";
import GuruForm from "@/components/dashboard/guru/guruForm";
import { Kelas } from "@/types/kelas";
import { Guru } from "@/types/guru";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditGuruPage({ params }: Props) {
  const { data: guruData, error: guruError } = await getGuruById(params.id);
  const { data: kelasData, error: kelasError } = await getKelas();

  if (kelasError || guruError) {
    notFound();
  }

  const guru: Guru = guruData.guru;
  const kelas: Kelas[] = kelasData.kelas;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold capitalize">Edit Guru</h2>
      </div>
      <div className="mt-10 bg-white/5 border border-white/10 p-6">
        <GuruForm
          kelas={kelas}
          data={{
            nama: guru.nama,
            nig: guru.nig,
            tempat_tanggal_lahir: guru.tempat_tanggal_lahir,
            jenis_kelamin: guru.jenis_kelamin,
            agama: guru.agama,
            phone_number: guru.phone_number,
            alamat: guru.alamat,
            kelas_id: guru.kelas ? guru.kelas.id : null,
          }}
          guru_id={params.id}
        />
      </div>
    </div>
  );
}
