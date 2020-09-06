import {
  Model,
  Column,
  PrimaryKey,
  DataType,
  Table,
  AutoIncrement,
  HasMany,
} from "sequelize-typescript";

import { Funcionario } from "./Funcionario";

@Table({ tableName: "cargos" })
export class Cargo extends Model<Cargo> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  descricao!: string;

  @HasMany(() => Funcionario)
  funcionarios!: Funcionario[];
}
