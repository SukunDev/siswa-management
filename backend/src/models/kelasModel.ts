import { DataTypes, Model, Optional } from "sequelize";
import { sequelize } from "../db";
import Siswa from "./siswaModel";
import Guru from "./guruModel";

interface KelasAttributes {
  id: number;
  nama: string;
}

interface KelasCreationAttributes extends Optional<KelasAttributes, "id"> {}

class Kelas
  extends Model<KelasAttributes, KelasCreationAttributes>
  implements KelasAttributes
{
  public id!: number;
  public nama!: string;

  public static associate() {
    Kelas.hasMany(Siswa, {
      foreignKey: "kelas_id",
      as: "siswa",
    });

    Kelas.hasMany(Guru, {
      foreignKey: "kelas_id",
      as: "guru",
    });
  }
}

Kelas.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nama: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Kelas",
    tableName: "kelas",
  }
);

export default Kelas;
