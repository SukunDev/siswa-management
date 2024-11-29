import { Request, Response } from "express";

export const home = async (req: Request, res: Response) => {
  try {
    res.json({ status: true, message: "server ready to use" });
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};
