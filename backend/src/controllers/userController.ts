import { Response } from "express";
import { AuthRequest } from "../middleware/AuthRequest";
import User from "../models/userModel";

export const getUser = async (req: AuthRequest, res: Response) => {
  try {
    const user = await User.findOne({
      where: { id: req.user!.id },
      attributes: {
        exclude: ["password"],
      },
    });
    res.json({
      status: true,
      data: {
        user: user,
      },
    });
  } catch (error: any) {
    res.status(500).json({ status: false, message: error.message });
  }
};
