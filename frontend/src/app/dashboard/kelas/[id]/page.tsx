import { getKelasById } from "@/app/actions";
import KelasAction from "@/components/dashboard/kelas/kelasAction";
import { Kelas } from "@/types/kelas";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export default async function SingleKelasPage({ params }: Props) {
  const { data: kelasData, error: kelasError } = await getKelasById(params.id);

  if (kelasError) {
    notFound();
  }
  const kelas: Kelas = kelasData.kelas;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold capitalize">
            Kelas {kelas.nama}
          </h2>
        </div>
        <KelasAction kelas_id={params.id} />
      </div>
      <div className="p-6 rounded-md bg-white/5 border border-white/10 mt-8">
        <table className="mt-4">
          <tbody>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">created at</td>
              <td className="pl-2 pr-6 capitalize">
                :{" "}
                {new Date(kelas.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">updated at</td>
              <td className="pl-2 pr-6 capitalize">
                :{" "}
                {new Date(kelas.updatedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
