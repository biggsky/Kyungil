import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Tx } from "../Tx/Tx.model";
import { EOA } from "../EOA/EOA.model";

@Table({
  timestamps: false,
  modelName: "TxEOA",
  tableName: "tx_eoa",
  paranoid: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})
export class TxEOA extends Model {
  @ForeignKey(() => Tx)
  @Column
  txId!: number;

  @ForeignKey(() => EOA)
  @Column
  eoaId!: number;
  @BelongsTo(() => Tx)
  tx!: Tx;

  @BelongsTo(() => EOA)
  eoa!: EOA;
}
