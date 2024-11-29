import dotenv from "dotenv";
import { connectDB } from "./db";
import app from "./app";

import http from "http";
import User from "./models/userModel";
import Kelas from "./models/kelasModel";
import Siswa from "./models/siswaModel";
import Guru from "./models/guruModel";

dotenv.config();

(async () => {
  await connectDB();

  await User.sync();

  await Kelas.sync();
  Kelas.associate();

  await Siswa.sync();
  Siswa.associate();

  await Guru.sync();
  Guru.associate();
})();

const port = process.env.PORT || 3000;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
