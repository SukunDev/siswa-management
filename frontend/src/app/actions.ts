"use server";

import { GuruFormData } from "@/types/guruFormData";
import { KelasFormData } from "@/types/kelasFormData";
import { SiswaFormData } from "@/types/siswaFormData";
import axiosRequest from "@/utils/axios";
import { cookies } from "next/headers";

const getUser = async () => {
  const accessToken = cookies().get("access_token");

  if (!accessToken) {
    return {
      data: null,
      error: "access_token not found",
    };
  }
  return axiosRequest("/user", "GET", undefined, accessToken.value);
};

const getSiswa = async (page: string = "1", kelas: string = "") => {
  return axiosRequest(
    `/siswa?page=${page}&kelas=${kelas}`,
    "GET",
    undefined,
    undefined
  );
};

const getSiswaById = async (id: string) => {
  return axiosRequest(`/siswa/${id}`, "GET", undefined, undefined);
};

const createSiswa = async (data: SiswaFormData) => {
  return axiosRequest(`/siswa`, "POST", data, undefined);
};

const updateSiswa = async (data: SiswaFormData, id: string) => {
  return axiosRequest(`/siswa/${id}`, "PUT", data, undefined);
};

const deleteSiswa = async (id: string) => {
  return axiosRequest(`/siswa/${id}`, "DELETE", undefined, undefined);
};

const getGuru = async (page: string = "1", kelas: string = "") => {
  return axiosRequest(
    `/guru?page=${page}&kelas=${kelas}`,
    "GET",
    undefined,
    undefined
  );
};

const getGuruById = async (id: string) => {
  return axiosRequest(`/guru/${id}`, "GET", undefined, undefined);
};

const createGuru = async (data: GuruFormData) => {
  return axiosRequest(`/guru`, "POST", data, undefined);
};

const updateGuru = async (data: GuruFormData, id: string) => {
  return axiosRequest(`/guru/${id}`, "PUT", data, undefined);
};

const deleteGuru = async (id: string) => {
  return axiosRequest(`/guru/${id}`, "DELETE", undefined, undefined);
};

const getKelas = async (page: string = "1") => {
  return axiosRequest(`/kelas?page=${page}`, "GET", undefined, undefined);
};

const getKelasById = async (id: string) => {
  return axiosRequest(`/kelas/${id}`, "GET", undefined, undefined);
};

const createKelas = async (data: KelasFormData) => {
  return axiosRequest(`/kelas`, "POST", data, undefined);
};

const updateKelas = async (data: KelasFormData, id: string) => {
  return axiosRequest(`/kelas/${id}`, "PUT", data, undefined);
};

const deleteKelas = async (id: string) => {
  return axiosRequest(`/kelas/${id}`, "DELETE", undefined, undefined);
};

export {
  getUser,
  getKelas,
  getKelasById,
  createKelas,
  updateKelas,
  deleteKelas,
  getSiswa,
  getSiswaById,
  createSiswa,
  updateSiswa,
  deleteSiswa,
  getGuru,
  getGuruById,
  createGuru,
  updateGuru,
  deleteGuru,
};
