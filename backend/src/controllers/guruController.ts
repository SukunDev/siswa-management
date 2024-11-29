import { Request, Response } from "express";
import Kelas from "../models/kelasModel";
import Guru from "../models/guruModel";

export const getGuru = async (req: Request, res: Response) => {
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

    const { count, rows: guru } = await Guru.findAndCountAll({
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
        guru: guru,
        current_page: page,
        total_pages: totalPages,
        total_items: count,
      },
    });
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const getGuruById = async (req: Request, res: Response) => {
  const { id: guru_id } = req.params;
  try {
    const guru = await Guru.findOne({
      where: { id: guru_id },
      include: [{ model: Kelas, as: "kelas" }],
      attributes: { exclude: ["kelas_id"] },
    });
    if (!guru) {
      res.json({
        status: false,
        message: "can't find guru",
      });
    } else {
      res.json({
        status: true,
        data: {
          guru: guru,
        },
      });
    }
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};

export const createGuru = async (req: Request, res: Response) => {
  const {
    nig,
    nama,
    kelas_id,
    tempat_tanggal_lahir,
    alamat,
    agama,
    jenis_kelamin,
    phone_number,
  } = req.body;
  if (!nig) {
    res.json({ status: false, message: "field 'nig' can't empty" });
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
      const checkGuru = await Guru.findOne({ where: { nama: nama } });
      if (checkGuru) {
        res.json({ status: false, message: "'nama' has been used" });
      } else {
        const guru = await Guru.create({
          nig: nig,
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
          message: "success to create guru",
          data: {
            guru: guru,
          },
        });
      }
    } catch (error: any) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

export const updateGuru = async (req: Request, res: Response) => {
  const {
    nig,
    nama,
    kelas_id,
    tempat_tanggal_lahir,
    alamat,
    agama,
    jenis_kelamin,
    phone_number,
  } = req.body;
  const { id: guru_id } = req.params;

  if (!nig) {
    res.json({ status: false, message: "field 'nig' can't empty" });
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
      const guru = await Guru.findByPk(guru_id);
      if (guru) {
        await guru.update({
          nig: nig,
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
          message: "success to update guru",
          data: {
            guru: guru,
          },
        });
      } else {
        res.json({
          status: false,
          message: "can't find guru",
        });
      }
    } catch (error: any) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
};

export const deleteGuru = async (req: Request, res: Response) => {
  const { id: guru_id } = req.params;
  try {
    const guru = await Guru.findByPk(guru_id);
    if (!guru) {
      res.json({
        status: false,
        message: "can't find guru",
      });
    } else {
      const guruName = guru.nama;
      await guru.destroy();
      res.json({
        status: true,
        message: `sucess to delete guru ${guruName}`,
      });
    }
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};
