import { Request, Response } from "express";
import Siswa from "../models/siswaModel";
import Kelas from "../models/kelasModel";

export const getSiswa = async (req: Request, res: Response) => {
  try {
    const page = Math.max(parseInt(req.query.page as string) || 1, 1);
    const kelas = (req.query.kelas as string) || null;
    const limit = Math.max(parseInt(req.query.limit as string) || 10, 1);
    const offset = (page - 1) * limit;

    const whereCondition: any = {};

    if (kelas && kelas !== "") {
      const getKelas = await Kelas.findOne({
        where: { nama: kelas },
      });
      if (getKelas) {
        whereCondition.kelas_id = getKelas.id;
      }
    }

    const { count, rows: siswa } = await Siswa.findAndCountAll({
      where: whereCondition,
      include: [{ model: Kelas, as: "kelas" }],
      attributes: { exclude: ["kelas_id"] },
      limit,
      offset,
      distinct: true,
      order: [["createdAt", "DESC"]],
    });
    const totalPages = Math.ceil(count / limit);
    res.json({
      status: true,
      data: {
        siswa: siswa,
        current_page: page,
        total_pages: totalPages,
        total_items: count,
      },
    });
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const getSiswaById = async (req: Request, res: Response) => {
  const { id: siswa_id } = req.params;
  try {
    const siswa = await Siswa.findOne({
      where: { id: siswa_id },
      include: [{ model: Kelas, as: "kelas" }],
      attributes: { exclude: ["kelas_id"] },
    });
    if (!siswa) {
      res.json({
        status: false,
        message: "can't find siswa",
      });
    } else {
      res.json({
        status: true,
        data: {
          siswa: siswa,
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const createSiswa = async (req: Request, res: Response) => {
  const {
    nis,
    nama,
    kelas_id,
    tempat_tanggal_lahir,
    alamat,
    agama,
    jenis_kelamin,
    phone_number,
  } = req.body;
  if (!nis) {
    res.json({ status: false, message: "field 'nis' can't empty" });
  } else if (!nama) {
    res.json({ status: false, message: "field 'nama' can't empty" });
  } else if (!tempat_tanggal_lahir) {
    res.json({
      status: false,
      message: "field 'tempat_tanggal_lahir' can't empty",
    });
  } else if (!alamat) {
    res.json({ status: false, message: "field 'alamat' can't empty" });
  } else if (!agama) {
    res.json({ status: false, message: "field 'agama' can't empty" });
  } else if (!jenis_kelamin) {
    res.json({ status: false, message: "field 'jenis_kelamin' can't empty" });
  } else if (!phone_number) {
    res.json({ status: false, message: "field 'alamat' can't empty" });
  } else {
    try {
      const checkSiswa = await Siswa.findOne({ where: { nama: nama } });
      if (checkSiswa) {
        res.json({ status: false, message: "'nama' has been used" });
      } else {
        const siswa = await Siswa.create({
          nis: nis,
          nama: nama,
          kelas_id: kelas_id || null,
          tempat_tanggal_lahir: tempat_tanggal_lahir,
          alamat: alamat,
          agama: agama,
          jenis_kelamin: jenis_kelamin,
          phone_number: phone_number,
        });
        res.json({
          status: true,
          message: "success to create siswa",
          data: {
            siswa: siswa,
          },
        });
      }
    } catch (error: any) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

export const updateSiswa = async (req: Request, res: Response) => {
  const {
    nis,
    nama,
    kelas_id,
    tempat_tanggal_lahir,
    alamat,
    agama,
    jenis_kelamin,
    phone_number,
  } = req.body;
  const { id: siswa_id } = req.params;

  if (!nis) {
    res.json({ status: false, message: "field 'nis' can't empty" });
  } else if (!nama) {
    res.json({ status: false, message: "field 'nama' can't empty" });
  } else if (!tempat_tanggal_lahir) {
    res.json({
      status: false,
      message: "field 'tempat_tanggal_lahir' can't empty",
    });
  } else if (!alamat) {
    res.json({ status: false, message: "field 'alamat' can't empty" });
  } else if (!agama) {
    res.json({ status: false, message: "field 'agama' can't empty" });
  } else if (!jenis_kelamin) {
    res.json({ status: false, message: "field 'jenis_kelamin' can't empty" });
  } else if (!phone_number) {
    res.json({ status: false, message: "field 'alamat' can't empty" });
  } else {
    try {
      const siswa = await Siswa.findByPk(siswa_id);
      if (siswa) {
        await siswa.update({
          nis: nis,
          nama: nama,
          kelas_id: kelas_id || null,
          tempat_tanggal_lahir: tempat_tanggal_lahir,
          alamat: alamat,
          agama: agama,
          jenis_kelamin: jenis_kelamin,
          phone_number: phone_number,
        });
        res.json({
          status: true,
          message: "success to update siswa",
          data: {
            siswa: siswa,
          },
        });
      } else {
        res.json({
          status: false,
          message: "can't find siswa",
        });
      }
    } catch (error: any) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

export const deleteSiswa = async (req: Request, res: Response) => {
  const { id: siswa_id } = req.params;
  try {
    const siswa = await Siswa.findByPk(siswa_id);
    if (!siswa) {
      res.json({
        status: false,
        message: "can't find siswa",
      });
    } else {
      const siswaName = siswa.nama;
      await siswa.destroy();
      res.json({
        status: true,
        message: `sucess to delete siswa ${siswaName}`,
      });
    }
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};
