import { connectDB } from "./db";
import Guru from "./models/guruModel";
import Kelas from "./models/kelasModel";
import Siswa from "./models/siswaModel";
import User from "./models/userModel";

(async () => {
  await connectDB();

  await User.sync();

  await Kelas.sync();
  Kelas.associate();

  await Siswa.sync();
  Siswa.associate();

  await Guru.sync();
  Guru.associate();

  console.log(`Insert Users`);
  await User.findOrCreate({
    where: { username: "admin" },
    defaults: {
      username: "admin",
      password: "admin",
    },
  });

  console.log(`Insert Kelas`);
  const kelas_x = await Kelas.findOrCreate({
    where: { nama: "x" },
    defaults: {
      nama: "x",
    },
  });
  await Kelas.findOrCreate({
    where: { nama: "xi" },
    defaults: {
      nama: "xi",
    },
  });
  await Kelas.findOrCreate({
    where: { nama: "xii" },
    defaults: {
      nama: "xii",
    },
  });

  console.log(`Insert Siswa`);
  await Siswa.findOrCreate({
    where: { nama: "johan pratama" },
    defaults: {
      kelas_id: kelas_x[0].id,
      nis: "872352532352365",
      nama: "johan pratama",
      tempat_tanggal_lahir: "Pati, 18 september 1999",
      jenis_kelamin: "laki laki",
      agama: "islam",
      phone_number: "+628xxxxxxxxxxxx",
      alamat: "Dukuhseti Pati",
    },
  });

  console.log(`Insert Guru`);
  await Guru.findOrCreate({
    where: { nama: "andika suroso" },
    defaults: {
      kelas_id: kelas_x[0].id,
      nig: "84758234",
      nama: "andika suroso",
      tempat_tanggal_lahir: "Pati, 27 agustus 1985",
      jenis_kelamin: "laki laki",
      agama: "islam",
      phone_number: "+628xxxxxxxxxxxx",
      alamat: "Dukuhseti Pati",
    },
  });

  console.log(`Finish to seeding database`);
})();
