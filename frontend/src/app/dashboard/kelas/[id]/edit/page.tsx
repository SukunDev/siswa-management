import { getKelasById } from "@/app/actions";
import KelasForm from "@/components/dashboard/kelas/kelasForm";
import { Kelas } from "@/types/kelas";

import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export default async function EditKelasPage({ params }: Props) {
  const { data: kelasData, error: kelasError } = await getKelasById(params.id);

  if (kelasError || kelasError) {
    notFound();
  }

  const kelas: Kelas = kelasData.kelas;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold capitalize">Edit Kelas</h2>
      </div>
      <div className="mt-10 bg-white/5 border border-white/10 p-6">
        <KelasForm
          data={{
            kelas_name: kelas.nama,
          }}
          kelas_id={params.id}
        />
      </div>
    </div>
  );
}
