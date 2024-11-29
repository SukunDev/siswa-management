import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";
import Kelas from "./kelasModel";

interface GuruAttributes {
  id: number;
  kelas_id: number | null;
  nig: string;
  nama: string;
  tempat_tanggal_lahir: string;
  jenis_kelamin: string;
  agama: string;
  phone_number: string;
  alamat: string;
}

interface GuruCreationAttributes extends Optional<GuruAttributes, "id"> {}

class Guru
  extends Model<GuruAttributes, GuruCreationAttributes>
  implements GuruAttributes
{
  public id!: number;
  public kelas_id!: number;
  public nig!: string;
  public nama!: string;
  public tempat_tanggal_lahir!: string;
  public jenis_kelamin!: string;
  public agama!: string;
  public phone_number!: string;
  public alamat!: string;

  public static associate() {
    Guru.belongsTo(Kelas, {
      foreignKey: "kelas_id",
      as: "kelas",
    });
  }
}

Guru.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    kelas_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: Kelas,
        key: "id",
      },
    },
    nig: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tempat_tanggal_lahir: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jenis_kelamin: {
      type: DataTypes.ENUM("laki laki", "perempuan"),
      allowNull: false,
      defaultValue: "laki laki",
    },
    agama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    alamat: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Guru",
    tableName: "gurus",
  }
);

export default Guru;
