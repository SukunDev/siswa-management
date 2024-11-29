import { Dialect, Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(
  process.env.DATABASE_DB as string,
  process.env.DATABASE_USER as string,
  process.env.DATABASE_PASSWORD as string,
  {
    host: process.env.DATABASE_HOST,
    dialect: (process.env.DATABASE_DIALECT as Dialect) || "mysql",
    logging: false,
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();

    console.log("MySQL database connected successfully");
  } catch (error) {
    console.log("Unable to connect to the database:", error);
    process.exit(1);
  }
};

export { sequelize, connectDB };
