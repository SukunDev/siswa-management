import { Guru } from "@/types/guru";
import { Kelas } from "@/types/kelas";
import { Siswa } from "@/types/siswa";

const transformSiswaData = (data: Siswa[]): (string | null)[][] => {
  return data.map((siswa) => [
    siswa.id.toString(),
    siswa.nama,
    siswa.nis,
    siswa.kelas?.nama || "-",
    siswa.jenis_kelamin,
  ]);
};
const transformGuruData = (data: Guru[]): (string | null)[][] => {
  return data.map((guru) => [
    guru.id.toString(),
    guru.nama,
    guru.nig,
    guru.kelas?.nama || "-",
    guru.jenis_kelamin,
  ]);
};

const transformKelasData = (data: Kelas[]): (string | null)[][] => {
  return data.map((kelas) => [kelas.id.toString(), kelas.nama]);
};

export { transformSiswaData, transformGuruData, transformKelasData };
