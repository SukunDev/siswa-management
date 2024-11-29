import jwt from "jsonwebtoken";

const generateAccessToken = (user: any) => {
  return jwt.sign(
    { id: user.id, username: user.username, email: user.email },
    process.env.JWT_SECRET as string,
    {
      expiresIn: "1d",
    }
  );
};

export { generateAccessToken };
