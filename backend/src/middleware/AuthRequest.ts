import { Request } from "express";
import User from "../models/userModel";

export interface AuthRequest extends Request {
  user?: User | null;
}
