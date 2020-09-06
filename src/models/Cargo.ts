import {
  Model,
  Column,
  PrimaryKey,
  DataType,
  Table,
  AutoIncrement,
} from "sequelize-typescript";

@Table({ tableName: "cargos" })
export class Cargo extends Model<Cargo> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  descricao!: string;
}
