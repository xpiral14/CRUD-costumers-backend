import {
  Model,
  Column,
  PrimaryKey,
  DataType,
  Table,
  AutoIncrement,
  BelongsTo,
  NotNull,
  AllowNull,
  ForeignKey,
} from "sequelize-typescript";
import { Cargo } from "./Cargo";
@Table({ tableName: "funcionarios" })
export class Funcionario extends Model<Funcionario> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @ForeignKey(() => Cargo)
  @NotNull
  @AllowNull(false)
  @Column({ references: { key: "id", model: "cargos" } })
  cargoId!: number;

  @NotNull
  @AllowNull(false)
  @Column(DataType.STRING)
  nome!: string;

  @Column(DataType.STRING)
  sobrenome!: string;

  @NotNull
  @AllowNull(false)
  @Column(DataType.DATEONLY)
  dataNascimento!: Date;

  @NotNull
  @AllowNull(false)
  @Column(DataType.FLOAT(10, 2))
  salario!: number;

  @BelongsTo(() => Cargo, "cargoId")
  cargo!: Cargo;
}
