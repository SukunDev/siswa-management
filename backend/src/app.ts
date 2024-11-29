import express from "express";
import cors from "cors";
import path from "path";

import homeRoute from "./routes/homeRoute";
import authRoute from "./routes/authRoute";
import userRoute from "./routes/userRoute";
import kelasRoute from "./routes/kelasRoute";
import siswaRoute from "./routes/siswaRoute";
import guruRoute from "./routes/guruRoute";

import { authMiddleware } from "./middleware/authMiddleware";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", express.static(path.join(__dirname, "../public")));

app.use("/", homeRoute);
app.use("/auth", authRoute);
app.use("/user", authMiddleware, userRoute);
app.use("/kelas", kelasRoute);
app.use("/siswa", siswaRoute);
app.use("/guru", guruRoute);

export default app;
