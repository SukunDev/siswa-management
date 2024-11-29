import { Request, Response } from "express";
import { sequelize } from "../db";
import Kelas from "../models/kelasModel";
import Siswa from "../models/siswaModel";
import Guru from "../models/guruModel";

export const getKelas = async (req: Request, res: Response) => {
  try {
    const page = Math.max(parseInt(req.query.page as string) || 1, 1);
    const limit = Math.max(parseInt(req.query.limit as string) || 10, 1);
    const offset = (page - 1) * limit;

    const { count, rows: kelas } = await Kelas.findAndCountAll({
      limit,
      offset,
      distinct: true,
      order: [["createdAt", "DESC"]],
    });
    const totalPages = Math.ceil(count / limit);
    res.json({
      status: true,
      data: {
        kelas: kelas,
        current_page: page,
        total_pages: totalPages,
        total_items: count,
      },
    });
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const getKelasById = async (req: Request, res: Response) => {
  const { id: kelas_id } = req.params;
  try {
    const kelas = await Kelas.findOne({
      where: { id: kelas_id },
    });
    if (!kelas) {
      res.json({
        status: false,
        message: "can't find kelas",
      });
    } else {
      res.json({
        status: true,
        data: {
          kelas: kelas,
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const createKelas = async (req: Request, res: Response) => {
  const { kelas_name } = req.body;
  if (!kelas_name) {
    res.json({ status: false, message: "field 'kelas_name' can't empty" });
  } else {
    try {
      const checkKelas = await Kelas.findOne({ where: { nama: kelas_name } });
      if (checkKelas) {
        res.json({ status: false, message: "'kelas_name' has been used" });
      } else {
        const kelas = await Kelas.create({ nama: kelas_name });
        res.json({
          status: true,
          message: "success to create kelas",
          data: {
            kelas: kelas,
          },
        });
      }
    } catch (error: any) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

export const updateKelas = async (req: Request, res: Response) => {
  const { kelas_name } = req.body;
  const { id: kelas_id } = req.params;
  if (!kelas_name) {
    res.json({ status: false, message: "field 'kelas_name' can't empty" });
  } else {
    try {
      const kelas = await Kelas.findByPk(kelas_id);
      if (kelas) {
        await kelas.update({ nama: kelas_name });
        res.json({
          status: true,
          data: {
            kelas: kelas,
          },
        });
      } else {
        res.json({
          status: false,
          message: "can't find kelas",
        });
      }
    } catch (error: any) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

export const deleteKelas = async (req: Request, res: Response) => {
  const { id: kelas_id } = req.params;

  if (!kelas_id) {
    res.status(400).json({ status: false, message: "Invalid kelas ID" });
  } else {
    const transaction = await sequelize.transaction();
    try {
      const kelas = await Kelas.findByPk(kelas_id, { transaction });

      if (!kelas) {
        res.status(404).json({ status: false, message: "Kelas not found" });
      } else {
        await Siswa.update(
          { kelas_id: null },
          { where: { kelas_id }, transaction }
        );
        await Guru.update(
          { kelas_id: null },
          { where: { kelas_id }, transaction }
        );

        await kelas.destroy({ transaction });

        await transaction.commit();
        res.json({
          status: true,
          message: "Kelas deleted successfully",
        });
      }
    } catch (error: any) {
      await transaction.rollback();
      res.status(500).json({ status: false, message: error.message });
    }
  }
};
