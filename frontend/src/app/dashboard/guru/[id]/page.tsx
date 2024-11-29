import { getGuruById } from "@/app/actions";
import GuruAction from "@/components/dashboard/guru/guruAction";
import { Guru } from "@/types/guru";
import { notFound } from "next/navigation";
import React from "react";

interface Props {
  params: {
    id: string;
  };
}

export default async function SingleGuruPage({ params }: Props) {
  const { data: guruData, error: guruError } = await getGuruById(params.id);

  if (guruError) {
    notFound();
  }
  const guru: Guru = guruData.guru;

  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <div className="flex flex-col">
          <h2 className="text-2xl font-semibold capitalize">
            Guru {guru.nama}
          </h2>
          {guru.kelas ? (
            <p className="text-xl">Kelas : {guru.kelas.nama}</p>
          ) : (
            ""
          )}
        </div>
        <GuruAction guru_id={params.id} />
      </div>
      <div className="p-6 rounded-md bg-white/5 border border-white/10 mt-8">
        <table className="mt-4">
          <tbody>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">nig</td>
              <td className="pl-2 pr-6 capitalize">: {guru.nig}</td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">
                tempat tanggal lahir
              </td>
              <td className="pl-2 pr-6 capitalize">
                : {guru.tempat_tanggal_lahir}
              </td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">alamat</td>
              <td className="pl-2 pr-6 capitalize">: {guru.alamat}</td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">jenis kelamin</td>
              <td className="pl-2 pr-6 capitalize">: {guru.jenis_kelamin}</td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">agama</td>
              <td className="pl-2 pr-6 capitalize">: {guru.agama}</td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">phone number</td>
              <td className="pl-2 pr-6 capitalize">: {guru.phone_number}</td>
            </tr>
            <tr>
              <td className="pl-6 pr-2 py-1 capitalize">created at</td>
              <td className="pl-2 pr-6 capitalize">
                :{" "}
                {new Date(guru.createdAt).toLocaleDateString("en-US", {
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
                {new Date(guru.updatedAt).toLocaleDateString("en-US", {
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
