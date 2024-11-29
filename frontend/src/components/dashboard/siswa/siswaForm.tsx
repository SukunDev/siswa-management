"use client";

import useSiswaForm from "@/hooks/dashboard/siswa/useSiswaForm";
import { Kelas } from "@/types/kelas";
import { SiswaFormData } from "@/types/siswaFormData";
import React from "react";
import { PiSpinnerGap } from "react-icons/pi";

interface Props {
  kelas: Kelas[];
  data: SiswaFormData;
  siswa_id: string | null;
}

export default function SiswaForm({ kelas, data, siswa_id }: Props) {
  const { formData, isLoading, handleInput, handleSelectInput, handleSubmit } =
    useSiswaForm(data, siswa_id);

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="capitalize" htmlFor="nama">
          nama
        </label>
        <input
          className="px-4 py-2 rounded bg-black/10 outline-none focus:bg-black/20"
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleInput}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="capitalize" htmlFor="nis">
          nis
        </label>
        <input
          className="px-4 py-2 rounded bg-black/10 outline-none focus:bg-black/20"
          type="text"
          name="nis"
          value={formData.nis}
          onChange={handleInput}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="capitalize" htmlFor="kelas_id">
          kelas
        </label>
        <select
          className="px-4 py-2 rounded bg-black/10 outline-none focus:bg-black/20 capitalize"
          name="kelas_id"
          id="kelas_id"
          value={formData.kelas_id || ""}
          onChange={handleSelectInput}
        >
          <option className="text-black" value="">
            pilih kelas
          </option>
          {kelas.map((item, idx) => (
            <option key={idx} className="text-black uppercase" value={item.id}>
              {item.nama}
            </option>
          ))}
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="capitalize" htmlFor="jenis_kelamin">
          jenis kelamin
        </label>
        <select
          className="px-4 py-2 rounded bg-black/10 outline-none focus:bg-black/20 capitalize"
          name="jenis_kelamin"
          id="jenis_kelamin"
          value={formData.jenis_kelamin}
          onChange={handleSelectInput}
        >
          <option className="text-black capitalize" value="laki laki">
            laki laki
          </option>
          <option className="text-black capitalize" value="perempuan">
            perempuan
          </option>
        </select>
      </div>
      <div className="flex flex-col gap-1">
        <label className="capitalize" htmlFor="tempat_tanggal_lahir">
          tempat tanggal lahir
        </label>
        <input
          className="px-4 py-2 rounded bg-black/10 outline-none focus:bg-black/20"
          type="text"
          name="tempat_tanggal_lahir"
          value={formData.tempat_tanggal_lahir}
          onChange={handleInput}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="capitalize" htmlFor="alamat">
          alamat
        </label>
        <input
          className="px-4 py-2 rounded bg-black/10 outline-none focus:bg-black/20"
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleInput}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="capitalize" htmlFor="agama">
          agama
        </label>
        <input
          className="px-4 py-2 rounded bg-black/10 outline-none focus:bg-black/20"
          type="text"
          name="agama"
          value={formData.agama}
          onChange={handleInput}
          required
        />
      </div>
      <div className="flex flex-col gap-1">
        <label className="capitalize" htmlFor="phone_number">
          phone number
        </label>
        <input
          className="px-4 py-2 rounded bg-black/10 outline-none focus:bg-black/20"
          type="text"
          name="phone_number"
          value={formData.phone_number}
          onChange={handleInput}
          required
        />
      </div>
      <div className="flex flex-row items-center justify-end">
        <button
          className="px-16 py-2 rounded-md bg-green-500 hover:bg-green-400 transition duration-300 text-white font-semibold w-fit"
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <PiSpinnerGap className="inline text-lg animate-spin" /> Loading
            </>
          ) : (
            "Submit"
          )}
        </button>
      </div>
    </form>
  );
}
