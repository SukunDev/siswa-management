import express from "express";
import {
  createGuru,
  deleteGuru,
  getGuru,
  getGuruById,
  updateGuru,
} from "../controllers/guruController";

const router = express.Router();

router.get("/", getGuru);
router.get("/:id", getGuruById);
router.post("/", createGuru);
router.put("/:id", updateGuru);
router.delete("/:id", deleteGuru);

export default router;
