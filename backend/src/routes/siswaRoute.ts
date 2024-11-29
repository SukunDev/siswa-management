import express from "express";
import {
  createSiswa,
  deleteSiswa,
  getSiswa,
  getSiswaById,
  updateSiswa,
} from "../controllers/siswaController";

const router = express.Router();

router.get("/", getSiswa);

router.post("/", createSiswa);
router.get("/:id", getSiswaById);
router.put("/:id", updateSiswa);
router.delete("/:id", deleteSiswa);

export default router;
