import {
  Table,
  Model,
  Column,
  ForeignKey,
  BelongsTo,
} from "sequelize-typescript";
import { Tx } from "../Tx/Tx.model";
import { CA } from "../CA/CA.model";

@Table({
  timestamps: false,
  modelName: "TxCA",
  tableName: "tx_ca",
  paranoid: false,
  charset: "utf8",
  collate: "utf8_general_ci",
})
export class TxCA extends Model {
  @ForeignKey(() => Tx)
  @Column // 여기서 field를 사용하여 외래 키의 컬럼명을 명시
  txId!: number;

  @ForeignKey(() => CA)
  @Column // 여기서 field를 사용하여 외래 키의 컬럼명을 명시
  caId!: number;
  @BelongsTo(() => Tx)
  tx!: Tx;

  @BelongsTo(() => CA)
  ca!: CA;
}
