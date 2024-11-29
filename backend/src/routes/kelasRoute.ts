import express from "express";
import {
  createKelas,
  deleteKelas,
  getKelas,
  getKelasById,
  updateKelas,
} from "../controllers/kelasController";

const router = express.Router();

router.get("/", getKelas);
router.get("/:id", getKelasById);
router.post("/", createKelas);
router.put("/:id", updateKelas);
router.delete("/:id", deleteKelas);

export default router;
