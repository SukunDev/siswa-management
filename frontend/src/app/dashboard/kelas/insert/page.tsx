import KelasForm from "@/components/dashboard/kelas/kelasForm";
import React from "react";

export default async function InsertKelasPage() {
  return (
    <div className="mx-auto max-w-6xl my-16">
      <div className="flex justify-between">
        <h2 className="text-2xl font-semibold capitalize">Insert Kelas</h2>
      </div>
      <div className="mt-10 bg-white/5 border border-white/10 p-6">
        <KelasForm
          data={{
            kelas_name: "",
          }}
          kelas_id={null}
        />
      </div>
    </div>
  );
}
