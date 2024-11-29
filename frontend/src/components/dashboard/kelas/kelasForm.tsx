"use client";

import useKelasForm from "@/hooks/dashboard/kelas/useKelasForm";
import { KelasFormData } from "@/types/kelasFormData";
import React from "react";
import { PiSpinnerGap } from "react-icons/pi";

interface Props {
  data: KelasFormData;
  kelas_id: string | null;
}

export default function KelasForm({ data, kelas_id }: Props) {
  const { formData, isLoading, handleInput, handleSubmit } = useKelasForm(
    data,
    kelas_id
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label className="capitalize" htmlFor="kelas_name">
          kelas_name
        </label>
        <input
          className="px-4 py-2 rounded bg-black/10 outline-none focus:bg-black/20"
          type="text"
          name="kelas_name"
          value={formData.kelas_name}
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
