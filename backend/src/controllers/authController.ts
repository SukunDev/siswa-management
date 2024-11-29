import { Request, Response } from "express";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";
import User from "../models/userModel";
import { generateAccessToken } from "../utils/helper";

dotenv.config();

export const signIn = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  if (!username) {
    res.json({ status: false, message: "field 'username' can't be empty" });
  } else if (!password) {
    res.json({ status: false, message: "field 'password' can't be empty" });
  } else {
    try {
      const user = await User.findOne({
        where: { username },
      });
      if (!user) {
        res.json({ status: false, message: "User not found" });
      } else {
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          res.json({ status: false, message: "Invalid credentials" });
        } else {
          const accessToken = generateAccessToken(user);
          if (user) {
            delete (user as any).dataValues.password;
          }
          res.json({
            status: true,
            data: {
              user: user,
              accessToken: accessToken,
            },
          });
        }
      }
    } catch (error: any) {
      res.status(500).json({ status: false, message: error.message });
    }
  }
};
