import { Kelas } from "./kelas";

export interface Siswa {
  id: number;
  nis: string;
  nama: string;
  tempat_tanggal_lahir: string;
  jenis_kelamin: string;
  alamat: string;
  agama: string;
  phone_number: string;
  kelas: Kelas | null;
  createdAt: Date;
  updatedAt: Date;
}
