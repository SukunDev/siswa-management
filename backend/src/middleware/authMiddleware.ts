import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import User from "../models/userModel";
import { AuthRequest } from "./AuthRequest";

export const authMiddleware = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];

    try {
      const decoded = jwt.verify(
        token,
        process.env.JWT_SECRET as string
      ) as jwt.JwtPayload;

      req.user = await User.findByPk(decoded.id);

      next();
    } catch (error) {
      res.status(401).json({ status: false, message: "invalid credentials" });
    }
  } else {
    res.status(401).json({ status: false, message: "invalid credentials" });
  }
};
