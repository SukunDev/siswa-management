import { getSiswaById } from "@/app/actions";
import SiswaAction from "@/components/dashboard/siswa/siswaAction";
import { Siswa } from "@/types/siswa";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export default async function SingleSiswaPage({ params }: Props) {
  const { data: siswaData, error: siswaError } = await getSiswaById(params.id);

  if (siswaError) {
    notFound();
  }
  const siswa: Siswa = siswaData.siswa;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold capitalize">
            Siswa {siswa.nama}
          </h2>
          {siswa.kelas ? (
            <p className="text-xl">Kelas : {siswa.kelas.nama}</p>
          ) : (
            ""
          )}
        </div>
        <SiswaAction siswa_id={params.id} />
      </div>
      <div className="p-6 rounded-md bg-white/5 border border-white/10 mt-8">
        <table className="mt-4">
          <tbody>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">nis</td>
              <td className="pl-2 pr-6 capitalize">: {siswa.nis}</td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">
                tempat tanggal lahir
              </td>
              <td className="pl-2 pr-6 capitalize">
                : {siswa.tempat_tanggal_lahir}
              </td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">alamat</td>
              <td className="pl-2 pr-6 capitalize">: {siswa.alamat}</td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">jenis kelamin</td>
              <td className="pl-2 pr-6 capitalize">: {siswa.jenis_kelamin}</td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">agama</td>
              <td className="pl-2 pr-6 capitalize">: {siswa.agama}</td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">phone number</td>
              <td className="pl-2 pr-6 capitalize">: {siswa.phone_number}</td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">created at</td>
              <td className="pl-2 pr-6 capitalize">
                :{" "}
                {new Date(siswa.createdAt).toLocaleDateString("en-US", {
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
                {new Date(siswa.updatedAt).toLocaleDateString("en-US", {
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
