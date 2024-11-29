import { getKelas } from "@/app/actions";
import TableComponent from "@/components/dashboard/tableComponent";
import { Kelas } from "@/types/kelas";
import { transformKelasData } from "@/utils/helper";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default async function KelasPage({ params }: Props) {
  const { data: kelasData, error: kelasError } = await getKelas(params.slug);
  if (kelasError) {
    notFound();
  }

  const kelas: Kelas[] = kelasData.kelas;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold capitalize">Kelas</h2>
        </div>
      </div>
      <div className="mt-10">
        <TableComponent
          tableName="kelas"
          head={["id", "nama"]}
          body={transformKelasData(kelas)}
          currentPage={kelasData.current_page}
          totalPages={kelasData.total_pages}
          totalItems={kelasData.total_items}
          path="/dashboard/kelas"
          pathPagenation="/dashboard/kelas"
        />
      </div>
    </div>
  );
}
