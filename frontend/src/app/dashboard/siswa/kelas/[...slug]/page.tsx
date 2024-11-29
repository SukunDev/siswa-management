import { getKelas, getSiswa } from "@/app/actions";
import KelasFilterButton from "@/components/dashboard/kelasFilterButton";
import TableComponent from "@/components/dashboard/tableComponent";
import { Kelas } from "@/types/kelas";
import { Siswa } from "@/types/siswa";
import { transformSiswaData } from "@/utils/helper";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    slug: string;
  };
}

export default async function SiswaByKelasPage({ params }: Props) {
  if (params.slug[1] !== "page" && params.slug[1] !== undefined) {
    notFound();
  }

  const { data: siswaData, error: siswaError } = await getSiswa(
    params.slug[2] || "1",
    params.slug[0]
  );
  const { data: kelasData, error: kelasError } = await getKelas();
  if (siswaError || kelasError) {
    notFound();
  }
  const siswa: Siswa[] = siswaData.siswa;
  const kelas: Kelas[] = kelasData.kelas;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold capitalize">Siswa</h2>
        </div>
        <KelasFilterButton path="/dashboard/siswa" kelas={kelas} />
      </div>
      <div className="mt-10">
        <TableComponent
          tableName="siswa"
          head={["id", "nama", "nis", "kelas", "jenis kelamin"]}
          body={transformSiswaData(siswa)}
          currentPage={siswaData.current_page}
          totalPages={siswaData.total_pages}
          totalItems={siswaData.total_items}
          pathPagenation={`/dashboard/siswa/kelas/${params.slug[0]}`}
          path="/dashboard/siswa"
        />
      </div>
    </div>
  );
}
