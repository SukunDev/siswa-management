import { getKelas, getGuru } from "@/app/actions";
import KelasFilterButton from "@/components/dashboard/kelasFilterButton";
import TableComponent from "@/components/dashboard/tableComponent";
import { Kelas } from "@/types/kelas";
import { Guru } from "@/types/guru";
import { transformGuruData } from "@/utils/helper";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default async function GuruPages({ params }: Props) {
  const { data: guruData, error: guruError } = await getGuru(params.slug, "");
  const { data: kelasData, error: kelasError } = await getKelas();
  if (guruError || kelasError) {
    notFound();
  }
  const guru: Guru[] = guruData.guru;
  const kelas: Kelas[] = kelasData.kelas;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold capitalize">Guru</h2>
        </div>
        <KelasFilterButton path="/dashboard/guru" kelas={kelas} />
      </div>
      <div className="mt-10">
        <TableComponent
          tableName="guru"
          head={["id", "nama", "nis", "kelas", "jenis kelamin"]}
          body={transformGuruData(guru)}
          currentPage={guruData.current_page}
          totalPages={guruData.total_pages}
          totalItems={guruData.total_items}
          path="/dashboard/guru"
          pathPagenation="/dashboard/guru"
        />
      </div>
    </div>
  );
}
